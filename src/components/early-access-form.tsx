import React, { useEffect, useState } from "react";
import InputField from "./form-elements/input-field";
import PhoneInput from "./form-elements/phone-input";

interface Props {
  closeModal: () => void;
}

const EarlyAccessFrom: React.FC<Props> = ({ closeModal }) => {
  const [contact, setContact] = useState<string>("email");
  const [form, setForm] = useState({
    data: {
      email: "",
      name: "",
      company: "",
      website: "",
    },
    isSubmitting: false,
    error: "",
    submitted: false,
  });
  const contactIsEmail = contact === "email";

  const switchContact = (value: string) => {
    setContact(value);
  };

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formCopy = JSON.parse(JSON.stringify(form));
    formCopy.data[name] = value;
    setForm({ ...formCopy, error: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, company, website } = form.data;

    //validate inputs
    const isValidEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (name && name.trim() === "" || (email && email.trim() === "") || (company && company.trim() === "") || (website && website.trim() === "")) {
      setForm({ ...form, error: "Please fill in all fields" });
      return;
    } else if (!isValidEmail) {
      setForm({ ...form, error: "Please enter a valid email address" });
      return;
    }

    setForm({ ...form, isSubmitting: true, error: "", submitted: false });

    try {
      const res = await fetch("/api/save-contact", { method: "POST", body: JSON.stringify({ email, company, website, name }) });

      if (res.ok) {
        setForm({ ...form, submitted: true, isSubmitting: false, data: { website: "", company: "", email: "", name: "" } });

        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        throw Error();
      }
    } catch {
      setForm({ ...form, error: "Something went wrong! Please try again", isSubmitting: false });
    }
  };

  return (

    <div className="">
      <h1 className="text-black text-xl sm:text-2xl lg:text-[28px] font-medium mb-5 sm:mb-7 text-center">
        Join early access
      </h1>
      <MessageBadge success message={form.submitted ? "Thank you for joining our beta list, we will reach out to you very soon.!" : ""} />
      <MessageBadge message={form.error} />
      <form className="flex flex-col space-y-6 sm:space-y-7.5" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name" className="text-sm sm:text-1sm mb-3.5 inline-block">
            Full Name
          </label>
          <InputField name="name" placeholder="Enter your full name" onChange={updateValue} value={form.data.name} />
        </div>
        <div className="">
          <div className="flex items-center mb-3.5 space-x-3.75 text-sm sm:text-1sm ">
            <label htmlFor="email" >
              Your work email
            </label>
          </div>
          {contact === "email" && (
            <InputField
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={updateValue}
              value={form.data.email}
            />
          )}
        </div>
        <div className="">
          <label htmlFor="company" className="text-sm sm:text-1sm mb-3.5 inline-block">
            Your company's name
          </label>
          <InputField name="company" placeholder="Enter your company's name" onChange={updateValue} value={form.data.company} />
        </div>
        <div className="">
          <label htmlFor="website" className="text-sm sm:text-1sm mb-3.5 inline-block">
            Your company's website
          </label>
          <InputField name="website" placeholder="Enter your company's website" onChange={updateValue} value={form.data.website} />
        </div>

        <button
          className={`h-12.5 sm:h-15 bg-accent-green w-full py-3.75 text-lg rounded-[10px] font-medium hover:shadow-none transition-all duration-150 ${
            form.isSubmitting ? "opacity-80 cursor-not-allowed" : "shadow-card"
          }`}
          disabled={form.isSubmitting}
        >
          {form.isSubmitting ? "Saving..." : "Join the beta"}
        </button>
      </form>
    </div>
  );
};

const SwitchButton: React.FC<{ value: string; onClick: (name: string) => void; contact: string }> = ({
  value,
  onClick,
  contact,
  children,
}) => {
  return (
    <button
      className={`transition-all duration-150 ease-out pt-2 pb-1.5 px-2.5 rounded-lg ${
        contact === value ? "text-white bg-black" : "text-support"
      }`}
      type="button"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
};

const MessageBadge: React.FC<{ message: string; success?: boolean }> = ({ message, success }) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className={`flex items-center text-xs px-3.75 pt-2.5 pb-2 rounded-md mb-4 text-center justify-center ${
        success ? "text-black bg-accent-green " : "text-red-500 bg-red-500 bg-opacity-10"
      }`}
    >
      {message}
    </div>
  );
};

export default EarlyAccessFrom;

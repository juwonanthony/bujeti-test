import React from "react";

const EarlyAccessFrom = () => {
  return (
    <div className="bg-white rounded-[10px] p-6 sm:px-8 md:py-8 lg:py-12 lg:px-10 sm:min-w-[360px] lg:min-w-[400px] xl:min-w-[440px]">
      <h1 className="text-black text-xl sm:text-2xl lg:text-[28px] font-medium ">Join early access</h1>
      <form action="" className="flex flex-col mt-8 sm:mt-9 space-y-6 sm:space-y-7.5">
        <div className="">
          <label htmlFor="name" className="text-sm sm:text-1sm mb-3.5 inline-block">
            Full Name
          </label>
          <InputField name="name" placeholder="Enter Name" />
        </div>
        <div className="">
          <label htmlFor="name" className="text-sm sm:text-1sm mb-3.5 inline-block">
            Email
          </label>
          <InputField name="email" placeholder="Enter email" />
        </div>

        <button className="h-12.5 sm:h-15 bg-accent-green w-full py-3.75 text-lg rounded-[10px] shadow-card font-medium hover:shadow-none transition-all duration-150">
          Get early access
        </button>
      </form>
    </div>
  );
};

interface InputFieldProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const InputField: React.FC<InputFieldProps> = ({ className, ...props }) => {
  return (
    <input
      type="text"
      {...props}
      className="w-full border border-grey-light h-12 sm:h-[50px] rounded-md text-grey-dark placeholder-grey-dark placeholder-opacity-40 text-1sm p-3.75 focus:border-grey-dark transition-all ease-out duration-150 no-outline focus:placeholder-opacity-25"
    />
  );
};

export default EarlyAccessFrom;

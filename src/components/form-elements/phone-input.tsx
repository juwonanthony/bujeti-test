interface PhoneInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
import { useEffect, useState } from "react";
import countryCodes from "../../assets/js/country-codes.json";

const PhoneInput: React.FC<PhoneInputProps> = ({ className, onChange, ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("+234");
  const [digits, setDigits] = useState("");

  useEffect(() => {
    setShowDropdown(false);
  }, [selected]);

  const isSelected = (code) => code === selected;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setDigits(value);
    onChange({ ...e, target: { ...e.target, name: e.target.name, value: `${selected}${value}` } });
  };

  return (
    <div className="relative flex items-center">
      <input
        {...props}
        type="tel"
        value={digits}
        onChange={handleChange}
        className="pl-20 w-full border border-grey-light h-12 sm:h-[50px] rounded-md text-grey-dark placeholder-grey-dark placeholder-opacity-40 text-1sm p-3.75 focus:border-grey-dark transition-all ease-out duration-150 no-outline focus:placeholder-opacity-25"
      />
      <button
        className="h-full w-[70px] bg-grey-light bg-opacity-20 hover:bg-opacity-30 transition-all duration-100 border-r border-grey-light left-0 absolute rounded-l-md flex items-center justify-center text-support text-sm font-medium"
        type="button"
        onClick={() => setShowDropdown(true)}
      >
        <span className="inline-block pt-0.5">{selected}</span>
        <svg viewBox="0 0 14 8" fill="none" className="ml-1.25 w-2.5 transform rotate-180">
          <path d="M13 7L7 1L1 7" stroke="#586068" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div
          className={`bg-white w-[120%] absolute top-0 rounded-md transform transition-all duration-200 ease-out max-h-[350px] overflow-y-auto shadow-card border border-grey-light ${
            showDropdown ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-10"
          }`}
        >
          <ul className="flex flex-col divide-y divide-grey-divider" onClick={(e) => e.stopPropagation()}>
            {countryCodes.map((c, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(c.dial_code);
                  setShowDropdown(false);
                }}
                className={`px-3 pt-3 pb-2.5 text-left bg-grey-light transition-all duration-100 ease-out ${
                  isSelected(c.dial_code) ? "bg-opacity-40" : "bg-opacity-0 hover:bg-opacity-25"
                }`}
              >
                <span className="pt-1 inline-block">{c.emoji}</span> {c.dial_code}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
};

export default PhoneInput;

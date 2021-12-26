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

export default InputField;

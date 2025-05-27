import { JSX } from "react";
import { Input } from "./ui/input";

type InputFieldProps = {
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  setValue: (value: string) => void;
};

function InputField({
  name,
  placeholder,
  type = "text",
  value,
  setValue,
}: InputFieldProps): JSX.Element {
  return (
    <div>
      <label
        className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
        htmlFor={name.toLowerCase()}
      >
        {name}*
      </label>
      <Input
        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
        placeholder={placeholder}
        name={name.toLowerCase()}
        id={name.toLowerCase()}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputField;

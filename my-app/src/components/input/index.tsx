import { CSSProperties, ChangeEvent } from "react";
import "./index.css";

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange?: (value: string) => void;
  disabled: boolean;
  inputStyle?: CSSProperties;
  inputTitle?: string;
  required?: boolean;
}

const InputField = ({ label, type, value, onChange, disabled, inputStyle, inputTitle, required }: InputProps) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.value)
        }
    };
    
  return (
    <>
      <div  className="inputFieldContainer">
        <label className="labelText">{label}</label>
        <input 
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        style={inputStyle}
        title={inputTitle}
        required={required}
        />
      </div>
    </>
  );
};

export default InputField;

import React from 'react';
import Text from './text-component';

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'textarea';
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, type = 'text', className }) => {
  return (
    <div className={`flex flex-col ${className} space-y-[5px]`}>
      <Text variant="title">{label}</Text>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="text-black p-2 h-32 focus:outline-none"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="text-black p-2 focus:outline-none"
        />
      )}
    </div>
  );
};

export default InputField;

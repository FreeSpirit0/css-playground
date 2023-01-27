import React, { createContext, useEffect, useState } from "react";

interface WrapperProps {
  options: string[];
  child: React.ReactNode;
}

interface CheckBoxProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckBoxProps> = ({
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

const CheckBoxContext = createContext<string[]>([]);

const CheckboxWrapper: React.FC<WrapperProps> = ({ options, child }) => {
  const [checkedArray, setCheckedArray] = useState(
    new Array(options.length).fill(false)
  );

  const handleChange = (index: number) => {
    let temp = [...checkedArray];
    temp[index] = !temp[index];
    setCheckedArray(temp);
  };

  return (
		<CheckBoxContext.Provider value={checkedArray}>
			<div className="flex flex-row gap-4 mt-4">
				{options.map((option, index) => (
					<Checkbox
						key={option}
						name={option}
						value={option}
						checked={checkedArray[index]}
						onChange={() => handleChange(index)}
					/>
				))}
				{child}
			</div>
		</CheckBoxContext.Provider>
  );
};

export default CheckboxWrapper;

import React from 'react';
import { useField } from 'formik';

const CRadioButton = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <input
        type="radio"
        {...field}
        {...props}
        checked={field.value === props.value}
      />
      <label htmlFor={props.id || props.name}>{label}</label>
    </div>
  );
};

export default CRadioButton;

import React from 'react';
import { useField } from 'formik';

export const CRadioButton = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <input
        type="radio"
        {...field}
        {...props}
        checked={field.value === props.value}
      />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
};



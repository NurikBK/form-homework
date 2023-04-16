import React from 'react';
import { useField } from 'formik';

export const CTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="wrapper">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};


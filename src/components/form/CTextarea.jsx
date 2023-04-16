import React from 'react';
import { useField } from 'formik';

export const CTextarea = ({ label = null, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="wrapper">
      {label && <label>{label}</label>}
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CTextarea;

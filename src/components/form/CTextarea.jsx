import React from 'react';
import { useField } from 'formik';

const CTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>
        {label}
        <textarea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CTextarea;

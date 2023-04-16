import React from 'react';
import { useField } from 'formik';


export const CCheckBox = ({ children = null, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <input type="checkbox" {...field} {...props} />
      {children && <label htmlFor={props.id}>{children}</label>}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

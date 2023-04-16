import React from 'react';
import { Formik, Form } from 'formik';
import {
  CCheckBox,
  CRadioButton,
  CSelectOptions,
  CTextInput,
  CTextarea,
  colorOptions,
  initialValues,
  saucesOptions,
  stoogeOptions,
  validationSchema,
} from './form';

const UserForm = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({ values, handleSubmit, handleReset, dirty, isValid }) => (
          <Form className="form-container" onSubmit={handleSubmit}>
            <CTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
            />

            <CTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
            />

            <CTextInput
              label="Age"
              name="age"
              type="number"
              placeholder="Enter your age"
            />
            <div className="wrapper">
              <p className="title">Employed</p>
              <CCheckBox name="employed" />
            </div>

            <CSelectOptions label="Favorite color" name="favoriteColor">
              {colorOptions.map((item) => (
                <option key={item.label} value={item.value.toUpperCase()}>
                  {item.value}
                </option>
              ))}
            </CSelectOptions>
            <div className="wrapper">
              <p className="title">Sauces</p>
              <div>
                {saucesOptions.map((item) => (
                  <CCheckBox
                    key={item.label}
                    name="souces"
                    id={item.label}
                    label={item.label}
                    value={item.value}
                  >
                    {item.value}
                  </CCheckBox>
                ))}
              </div>
            </div>

            <div className="wrapper">
              <p className="title">Best Stooge</p>
              <div>
                {stoogeOptions.map((item) => (
                  <CRadioButton
                    key={item.label}
                    name="stooge"
                    id={item.label}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
            <CTextarea cols={40} rows={5} name="notes" label="Notes" />
            <div className="btn-wrapper">
              <button
                type="submit"
                className="btn btn-submit"
                disabled={!dirty || !isValid}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-reset"
                onClick={handleReset}
                disabled={!dirty}
              >
                Reset
              </button>
            </div>
            <div className="result">
              <textarea
                cols={40}
                rows={15}
                value={JSON.stringify(values, null, 2)}
                readOnly
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

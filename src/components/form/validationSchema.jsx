import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  age: Yup.number()
    .min(18, 'Must be 18 or more')
    .max(100, 'Must be 100 or less')
    .required('Required'),
  notes: Yup.string()
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
});

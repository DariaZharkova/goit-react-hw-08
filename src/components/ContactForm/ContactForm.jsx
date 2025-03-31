// import { useId } from 'react';
// import { useDispatch } from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import css from './ContactForm.module.css';
// import { addContact } from '../../redux/contactsOps';

// const contactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('This is a required field'),
//   number: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('This is a required field'),
// });

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const nameFieldId = useId();
//   const numberFieldId = useId();

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={contactSchema}
//       onSubmit={(values, actions) => {
//         dispatch(addContact({ ...values }));
//         actions.resetForm();
//       }}
//     >
//       <Form className={css.form}>
//         <div className={css.wrap}>
//           <label htmlFor={nameFieldId}>Name</label>
//           <Field type="text" name="name" id={nameFieldId} />
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>

//         <div className={css.wrap}>
//           <label htmlFor={numberFieldId}>Number</label>
//           <Field type="text" name="number" id={numberFieldId} />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>

//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }

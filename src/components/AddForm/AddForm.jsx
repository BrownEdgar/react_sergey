import "./AddForm.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object } from "yup";
import {
  formYupValidationObject,
  initialValues,
} from "../../constants/constants";

const validationSchema = object().shape(formYupValidationObject);

function AddForm() {
  const renderErrorMessages = (formikError) => {
    const arr = Object.keys(formikError);
    return (
      <div className='errFlex'>
        {arr.map((field) => (
          <p key={field} className='error'>
            <em>{field}:</em> {formikError[field]}{" "}
          </p>
        ))}
      </div>
    );
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className='AddForm'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <Field type='text' name='username' id='username' required />
              <Field
                type='email'
                name='email'
                required
                placeholder='enter your email'
              />
              <Field type='password' name='password' required />
              <Field type='password' name='repeatPassword' required />
              <Field as='select' name='languages'>
                <option value='html'>html</option>
                <option value='css'>css</option>
                <option value='js'>js</option>
              </Field>
              <Field type='checkbox' name='size' value='xl' />
              xl
              <Field type='checkbox' name='size' value='md' />
              md
              <Field type='checkbox' name='size' value='xs' />
              xs
              <hr />
              <Field as='textarea' name='message' />
              <Field type='submit' name='submit' value='save' />
              <ErrorMessage>{renderErrorMessages}</ErrorMessage>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddForm;

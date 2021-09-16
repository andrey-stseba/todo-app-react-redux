import React from 'react';
import { connect } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { INPUT_SCHEMA } from '../../utils/validatingSchemas';
import { createTask } from '../../actions';

function TodoForm (props) {
  const { createTaskAction } = props;

  const initialTaskValues = { body: '' };

  const submitHandler = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialTaskValues}
        onSubmit={submitHandler}
        validationSchema={INPUT_SCHEMA}
      >
        {formikProps => {
          return (
            <Form>
              <Field type='text' name='body' placeholder='Enter todo here' />
              <button type='submit'>Add Task</button>
              <ErrorMessage name='body' component='h5' />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createTaskAction: taskData => {
      dispatch(createTask(taskData));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);

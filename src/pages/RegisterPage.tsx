import axios from 'axios';
import { useState } from 'react';
import RegisterForm, { ExpenseFormData } from '../components/RegisterForm';

const RegisterPage = () => {
  const [error, setError] = useState();

  const createUser = (newUserSubmittedData: ExpenseFormData) => {
    const newUser = newUserSubmittedData;

    axios
      .post('http://localhost:4000/register', newUser)
      .then(({ data: savedUser }) => console.log(savedUser))
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      {error && <p>{error}</p>}
      <h1>Register Name</h1>
      <RegisterForm onSubmit={(data) => createUser(data)}></RegisterForm>
    </>
  );
};

export default RegisterPage;

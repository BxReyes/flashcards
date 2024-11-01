import React from 'react';
import { useField, Field } from '../hooks/state-hooks';

const RegisterForm: React.FC = () => {
  const username: Field = useField('text');
  const password: Field = useField('password');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Connection to server not yet implemented
  }

  return (
    <div className='auth-form__container'>
      <form>
        <input
          type={username.type}
          value={username.value}
          onChange={(e) => username.onChange(e.target.value)}
          placeholder='Username'
        />

        <input
          type={password.type}
          value={password.value}
          onChange={(e) => password.onChange(e.target.value)}
          placeholder='Password'
        />

        <button
          type='submit'
          onSubmit={handleSubmit}
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;

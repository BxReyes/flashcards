import React from 'react';
import { useField, Field } from '../hooks/state-hooks';

const LoginForm: React.FC = () => {
  const username: Field = useField('text');
  const password: Field = useField('password');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Connection to server not implemented yet.
  }

  return (
    <div className='auth-form__container'>
      <h2 className='login-title'>Log In</h2>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
        <input
          className='auth-input login-input'
          type={username.type}
          value={username.value}
          onChange={(e) => username.onChange(e.target.value)}
          placeholder='Your username'
        />

        <input
          className='auth-input login-input'
          type={password.type}
          value={password.value}
          onChange={(e) => password.onChange(e.target.value)}
          placeholder='Your password'
        />

        <button
          className='form-submit-btn login-btn'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm;

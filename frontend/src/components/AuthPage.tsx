import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
      <RegisterForm />
      <LoginForm />
    </div>
  )
}

export default AuthPage;

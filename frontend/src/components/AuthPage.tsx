import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import '../styles/auth-page.css';

const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
      <div className='forms-container'>
        <RegisterForm />
        <hr />
        <LoginForm />
      </div>
      <p className='photo-credits'>
        Photo by <a href="https://unsplash.com/@priscilladupreez">Priscilla Du Preez 🇨🇦</a> on <a href="https://unsplash.com">Unsplash</a>
      </p>
    </div>
  )
}

export default AuthPage;

import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './auth-form.module.css';
import { signIn } from 'next-auth/client';
import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils';

const createUser = async user => {
  console.log(user)
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email: user.email, password: user.password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  if (response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }

  return data
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const route = useRouter()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async event => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value
    const user = { email, password }

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        // callbackUrl: 'http://localhost:3000/profile',
        email: email,
        password: password
      })
      if (!result.error) {
        //set auth state
        localStorage.setItem('email', email)
        route.replace('/profile')
      }
    } else {
      try {
        const result = await createUser(user)
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;

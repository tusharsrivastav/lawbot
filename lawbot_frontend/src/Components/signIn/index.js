import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import './signIn.css'
import Header from '../common/header';

const SignIn = () => {
  useEffect(() => {
      document.title = 'SignIn | LawBot'
  })

  return (
    <div className='wrapper'>
      <Header />
      <div className='form-wrapper'>
        <div className='form-title'>SignIn</div>
          <form>
              <div className='form-row'>
                  <label className='form-label'>Userame</label>
                  <input type='text' className='form-input' />
              </div>
              <div className='form-row'>
                  <label className='form-label'>Password</label>
                  <input type='password' className='form-input' />
              </div>

              <button type='submit' className='primary-btn'>Submit</button>
              <Link to="/signup" className='secondary-btn'>SignUp</Link>
          </form>
      </div>
    </div>
  )
}

export default SignIn
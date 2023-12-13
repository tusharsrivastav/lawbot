import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import './signUp.css'
import Header from '../common/header';

const SignUp = () => {
    useEffect(() => {
        document.title = 'SignUp | LawBot'
    })

  return (
    <div className='wrapper'>
        <Header />
        <div className='form-wrapper'>
            <div className='form-title'>SignUp</div>
            <form>
                <div className='form-row'>
                    <label className='form-label'>Full Name</label>
                    <input type='text' className='form-input' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>Userame</label>
                    <input type='text' className='form-input' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-input' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>Password</label>
                    <input type='password' className='form-input' />
                </div>

                <button type='submit' className='primary-btn'>Submit</button>
                <Link to="/signin" className='secondary-btn'>SignIn</Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp
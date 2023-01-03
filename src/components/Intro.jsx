import { useState } from 'react'
import './Intro.css'
import logo from '../images/logo.svg'
import React from 'react'


const Intro = () => {
    const regexEmail = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        if (!regexEmail.test(email) || email === '') {
            e.preventDefault()
            console.log('alert')
        } else {
            window.location.reload()
        }
        
    }

    return (
        <div className="intro_container flex_column">
            <img src={logo} alt="logo" />
            <div className='statement_container'>
                <p>We are launching <span>soon!</span></p>
                <small>Subscribe and get notified</small>
            </div>
            <form className="notify_me_container flex_row" method='get' onSubmit={handleSubmit}>
                <div className='input_container flex_column'>
                    <input  type="email" 
                            placeholder="Your email address..." 
                            onChange={handleChange}/>
                    <p className="errorMessage">Please enter a valid email</p>
                </div>              
                <button className="btn" type='submit'>Notify Me</button>
            </form>
        </div>
    )
}

export default Intro
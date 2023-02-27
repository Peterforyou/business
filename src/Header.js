import React from 'react'
import Peter from './Peter.jpeg'
import ButtonOne from './Button (1).png'
import ButtonTwo from './Button.png'

function Header () {
    return (
        <div className='header'>
            <img src={Peter} alt='Peter' className='img' />
            <h2>Odeke Peter</h2>
            <h3>Frontend Developer</h3>
            <p>Peterbit.HelloWorld!!</p>
            <div className='socials'>
                <a href="mailto:odeke451@gmail.com? subject='Hi Peter'" target='_blank' rel="noopener noreferrer"  className='email'>
                    <img src={ButtonOne} alt="Email" />
                </a>
                <a href="https://www.linkedin.com/mwlite/in/peter-odeke-8339b620a" target='_blank' rel="noopener noreferrer"  className='linkdln'>
                    <img src={ButtonTwo} alt="Linkdln" />
                </a>
            </div>
        </div>
    )
}
export default Header
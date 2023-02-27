import React from 'react'
import Facebook from './Facebook Icon.png'
import Github from './GitHub Icon.png'
import Instagram from './Instagram Icon.png'
import Twitter from './Twitter Icon.png'

function Footer () {
    return (
        <div className='footer'>
            <a href="https://www.facebook.com/hz.anyanwu"  target="_blank" rel="noopener noreferrer" >
                <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://github.com/Peterforyou"  target="_blank" rel="noopener noreferrer" >
                <img src={Github} alt="Github" />
            </a>
            <a href="https://www.instagram.conpm startm/pero12345000/"  target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/Peterbyte2/"  target="_blank" rel="noopener noreferrer" >
                <img src={Twitter} alt="Twitter" />
            </a>
        </div>
    )
}
export default Footer
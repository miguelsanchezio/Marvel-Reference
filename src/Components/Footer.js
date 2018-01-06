import React from 'react';

const Footer = () => {
    return (
        <div className='row align-items-end'>
            <div className='col footer'>
                <div className='text-center created-by'>
                    <a href='https://miguelthedev.com' target='_blank' rel='noopener noreferrer'>Created by Miguel Sanchez</a>
                </div>
                <div className='text-center attribution'>
                    <a href='https://marvel.com' target='_blank' rel='noopener noreferrer'>Data provided by Marvel. © 2018 MARVEL</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
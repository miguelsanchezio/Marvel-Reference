import React from 'react';
import { Link }  from 'react-router-dom';

const Header = () => {
    return (
        <div className='row'>
            <div className='col header'>
                <h1 className='text-center'>
                    <Link to='/' className='brand-logo'>Marvel App</Link>
                </h1>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className={'div-header'}>
                <div className={'div-png'}>
                    {/*Logo*/}
                </div>
                <div className={'div-option'}>
                    {/*<NavLink to='/'><Home/></NavLink>*/}
                    <button className='button-header'>Home</button>

                </div>
                <div className={'div-option'}>
                    {/*<NavLink to='/'><Home/></NavLink>*/}
                    <button className='button-header'>Book Now</button>
                </div>
                <div className={'div-option'}>
                    {/*<NavLink to='/'><Home/></NavLink>*/}
                    <button className='button-header'>Portfolio</button>
                </div>
                <div className={'div-option'}>
                    {/*<NavLink to='/'><Home/></NavLink>*/}
                    <button className='button-header'>About us</button>
                </div>
                <div className={'div-option'}>
                    {/*<NavLink to='/'><Home/></NavLink>*/}
                    <button className='button-header'>Contact us</button>
                </div>
                <div className={'div-option'}>
                    {/*<NavLink to='/'><Home/></NavLink>*/}
                    <button className='button-header'>Sign out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
import React, { useContext, useState } from 'react';
import './Nav.css';
import Logo from '../Images/MovieLogo.png';
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppContext } from '../../App';

export const Nav = () => {


    const [Mobile, setMobile] = useState();
    const { select, setSelect } = useContext(AppContext);

    return (
        <>
            <header>
                <div className='container flexSB'>
                    <nav className='flexSB'>
                        <div className='logo'>
                            <img src={Logo} alt='' className='img-nav' />
                        </div>
                        {/*<ul className='flexSB'>*/}
                        <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                            <li>
                                <Link to='/'> Home </Link>
                            </li>
                            <li>
                                <Link to='/movies'> Movies </Link>
                            </li>
                            <li>
                                <Link to='/contact'> Contact </Link>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            <AiOutlineBars className='fa fa-bars' />
                        </button>
                    </nav>
                    <div className='account flexSB'>
                        <i className='fas fa-user'>{select}</i>
                        <Link to='/Login' className='botton-login'>
                            <button className='button-subscribe'>Subscribe Now</button>
                        </Link>
                    </div>
                </div>
            </header>
        </>

    )
}

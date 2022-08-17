import { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import './Login.css';
import { IoIosAdd } from "react-icons/io";
import { GiChessQueen, GiChessRook, GiChessKnight, GiChessKing, GiChessPawn } from "react-icons/gi";
import { AppContext } from '../../App';

export const Login = () => {

    const email = useRef('');
    const password = useRef('');
    const [error, setError] = useState();
    const [subscribe, setSubscribe] = useState();
    const { select } = useContext(AppContext);


    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const handleClick = () => {

        if (email.current.value === '' || password.current.value === '') {

            setError('Complete the requirements');
            setSubscribe(false)


        } else {
            setError('Thanks for subscribing');
            setSubscribe(true);
            window.localStorage.setItem('isLogin', true);

        }
    }



    return (
        <>
            <form className='login-container' onClick={handleSubmit}>
                <h2 className='titel-container'>Subscribe for new content</h2>
                <div>
                    <i className='user-img'>
                        {select}
                    </i>
                </div>
                <div>
                <GiChessQueen className='user-ico2' onClick={()=> window.localStorage.setItem('User','Queen')}/>
                <GiChessRook className='user-ico2' onClick={()=> window.localStorage.setItem('User','Rook')}/>
                <GiChessKnight className='user-ico2' onClick={()=> window.localStorage.setItem('User','Knight')}/>
                <GiChessKing className='user-ico2' onClick={()=> window.localStorage.setItem('User','King')}/>
                <GiChessPawn className='user-ico2' onClick={()=> window.localStorage.setItem('User','Pawn')}/>
                </div>
                <p className={subscribe ? 'p-access' : 'p-error'}>{error}</p>
                <p className='login-p'>Email</p>
                <input type='email' className='login-input' ref={email} />
                <p className='login-p'>Password</p>
                <input type='password' className='login-input' ref={password} />
                <button className='button-login' onClick={handleClick}>Enter</button>
            </form>
        </>
    )
}

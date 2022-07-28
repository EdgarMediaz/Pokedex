import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import Ash from '../assets/Ash.png'

const UserInput = () => {

    const [userName, setUserName] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getName = () => {
        dispatch(changeUser(userName))
        navigate('/pokedex')
    }

    return (
        <div className='App'>
            <div className="pokeball-background"></div>
            <div className="banner">
                <h1>Hello Trainer!</h1>
                <img src={Ash} alt="Ash" />
            </div>
            <form action="">
                <input
                    type="text"
                    placeholder='Your name here'
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <button onClick={getName}>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
    );
};

export default UserInput;
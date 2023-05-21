import React, {useState} from 'react';
import classNames from 'classnames';
import '../App.css';
import wishInput from '../wishInput';
import wishList from '../wishList/wishList';


const initialWishes = [
    {text: 'travel to the moon', done: false},
    {text: 'Pay gym', done: true},
    {text: 'Be a programmer', done: true},
    {text: 'Discover the world', done: false},

];

const App = () => {
    const [wishes, setWishes] = useState(initialWishes);
    return (
    <div>
        <h1>My wish list</h1>
        <wishInput onNewWish = {wish => setWishes([wish, ...wishes]) }/>
        <wishList wishes={wishes} />
    <button type="button" className='wish-clear'>
        Archive wish
        </button>
    </div>
    );

    }
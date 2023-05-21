import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const wishList = ({ wishes}) => (

    <ul className = ' wish-list'>
    {wishes.map(({done, text}, i) => (
         <li
            key={classNames('wish-list__item', {
                'wish-list__item--done' : done,
            })}
         
         >
            <input id={`wish${i}`} type="checkbox" checked={done} />
            <label htmlFor={`wish${i}`}>{text}</label>
         </li>))}
    </ul>

);

wishList.propTypes = {
    wishes: PropTypes.array,
}
export default wishList;
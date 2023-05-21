import React, {useState} from  'react';
import PropTypes from 'prop-types';




const wishInput = ( { onNewWish} ) => {
     const [newWishText, setNewWishText] = useState('');
    
    return (
        <fieldset className='wish-input'>
            <legend className="wish-input__label">New wish</legend>
            <input className="wish-input__field" placeholder="Enter your wish" vale={newWishText}
             onChange = {e => setNewWishText(e.target.value)} 
             onKeyUp= {e => {
                if(e.key == ' Enter' && newWishText.length){
                    onNewWish({done: false, text: newWishText});
                    setNewWishText('');
                }
             }}
             />
        </fieldset>
);
    }

wishInput.protoTypes = {
    onNewWish : PropTypes.func,
};
wishInput.defaultProp = {
    onNewWish: () => {},
}

export default wishInput;
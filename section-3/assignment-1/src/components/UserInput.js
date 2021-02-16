import React from 'react'
import './UserInput.css'

const UserInput = ({name, onChangeUsername}) => {
    return (
        <div>
            <input id="user-input-field" name="username" value={name}
                   onChange={(e) => onChangeUsername(e.target.value)}/>
        </div>
    )
};

export default UserInput

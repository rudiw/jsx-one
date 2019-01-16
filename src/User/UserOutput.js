import React from 'react';
import './UserOutput.css'

const userOutput = (upUser) => {
    return (
        <div className="UserOutput">
            <p>Paragraph One {upUser.username}</p>
            <p>Paragraph Two {upUser.username}</p>
        </div>
    )
}

export default userOutput;
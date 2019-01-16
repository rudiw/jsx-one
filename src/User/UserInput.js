import React from 'react';

const userInput = (upUser) => {
    const userInput = {
        width: "60%",
        margin: "16px auto",
        border: "1px solid #eee",
        padding: "16px",
    }

    return (
        <div style={userInput}>
            <input type="text" onChange={upUser.updateUsername}
                value={upUser.username} />
        </div>
    )
}

export default userInput;
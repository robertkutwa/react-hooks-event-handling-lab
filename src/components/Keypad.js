// Code Keypad Component Here

import React from 'react';

class Keybad extends React.Component {
    handleChange = (event) => {
        console.log ('Entering password...');
    }

    render (){
        return (
            <div>
                <input type="password" onChange={this.handleChange} />
            </div>
        );
    }
}
export default Keybad;
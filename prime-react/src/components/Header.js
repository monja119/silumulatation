import React, { Component } from 'react';

class Header extends Component 
{

    constructor(props) {
        super(props)
    }

    render()
    {
        return (<header className="bg-light text-center py-5">
        <h1>Mon site</h1>
      </header>)
    }

}

export default Header;
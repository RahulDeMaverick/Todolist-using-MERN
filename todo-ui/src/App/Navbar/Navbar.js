import React from 'react';

import './Navbar.scss';

//Navigation bar component

export class Navbar extends React.Component {
//click function to add new todo
    render() {
        return <nav>
            <span className="menu"> <img src="assets/menu.png" alt="menu"></img></span>
            <h1 className="title">TODO APP</h1>
            <span className="create" onClick={this.props.createHandler}>
                <img src="assets/plus.png" alt="create"></img></span>
        </nav>
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     icon: PropTypes.string.isRequired
    // };
    render() {
        const { icon, title } = this.props;
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon} /> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }

}

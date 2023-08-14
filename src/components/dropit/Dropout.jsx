import React from 'react';
import './dropdown.scss';
import { Link } from 'react-router-dom';

export default function DropdownLogin() {
    return (
        <div className="dropdown">
            <button
                className="btn dropdown-toggle account-btn"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
                <ion-icon name="person-outline"></ion-icon>
                <span className='icon_title'>login</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <Link className="dropdown-item" to="register">
                        Register
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="login">
                        Login
                    </Link>
                </li>
            </ul>
        </div>

    )
}

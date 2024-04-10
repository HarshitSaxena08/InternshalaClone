import React from 'react';
import Navbar from '../style/Navbar.css';


const Nav = () => {
    return (
            <>
                <div className='container'>
                    <div className='logo'>
                        LOGO
                    </div>
                    <div className='menu'>
                        <ul>
                            <li>
                                <select>

                                    <option value="Internships">Internships</option>

                                    <option value="vegetable">Vegetable</option>

                                    <option value="meat">Meat</option>

                                </select>
                            </li>
                            <li>
                                <select>

                                    <option value="Courses">Courses</option>

                                    <option value="vegetable">Vegetable</option>

                                    <option value="meat">Meat</option>

                                </select>
                            </li>
                            <li>
                                <select>

                                    <option value="jobs">jobs</option>

                                    <option value="vegetable">Vegetable</option>

                                    <option value="meat">Meat</option>

                                </select>
                            </li>
                            <li>Clubs</li>
                            <li>
                                <img src='../../images/bell_icon.png' width='30px' alt='bell' />
                            </li>
                            <li>
                                <img src='../../images/message.png' width='30px' alt='message' />
                            </li>

                            <li>Profile</li>
                        </ul>
                    </div>
                </div>

            </>
            )
}

            export default Nav;
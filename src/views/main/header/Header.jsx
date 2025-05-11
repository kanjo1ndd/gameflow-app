import './Header.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AppContext } from '../../../AppContext';

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    const {token, setToken} = useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const gameCategories = ['Action', 'Adventure', 'Strategy', 'RPG', 'Simulation', 'Sports', 'fdgdfg'];

    return <>
        <div className='head'>
            <div className='logo'>
                STORE
            </div>
            <div className='path'>
                <nav>
                    <ul className='nav'>
                        <li className={`li ${location.pathname === '/' ? 'active' : ''}`} 
                            onClick={() => navigate('/')}>
                            Discover
                        </li>
                        <li className={`li ${location.pathname === '/Support' ? 'active' : ''}`} 
                            onClick={() => navigate('/Support')}>
                            Support
                        </li>
                        <div className="li-category" onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}>
                            <span className="li-category-label">Category</span>
                            {showDropdown && (
                                <ul className="dropdown">
                                    {gameCategories.map((cat, index) => (
                                    <li
                                        key={index}
                                        className="dropdown-item"
                                        onClick={() => {
                                        navigate(`/Category/${cat.toLowerCase()}`);
                                        setShowDropdown(false);
                                        }}
                                    >
                                        {cat}
                                    </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <li className={`li ${location.pathname === '/News' ? 'active' : ''}`} >
                            News
                        </li>
                    </ul> 
                </nav>
                <div>
                    <i className="bi bi-search"></i>
                    <input placeholder='Search store'></input>
                </div>
            </div>
            <div className='reg'>
                {token == null ? <>
                    <i className={`bi bi-person-circle ${location.pathname === '/Profile' ? 'active' : ''}`}
                        onClick={() => navigate('/SignIn')}/>
                    <i className={`bi bi-suit-heart ${location.pathname === '/WishList' ? 'active' : ''}`}
                        onClick={() => navigate('/SignIn')}/>
                    <i className="bi bi-cart3"/>
                    <i className="bi bi-globe2"/>
                    <button className='btn sign_in' onClick={() => navigate('/SignIn')}>Sign in</button>
                </> : <>
                    <i className={`bi bi-person-circle ${location.pathname === '/Profile' ? 'active' : ''}`}
                        onClick={() => navigate('/Profile')}/>
                    <i className={`bi bi-suit-heart ${location.pathname === '/WishList' ? 'active' : ''}`}
                        onClick={() => navigate('/WishList')}/>
                    <i className="bi bi-cart3"/>
                    <i className="bi bi-globe2"/>
                    <button className='btn sign_in' title={token} onClick={() => {setToken(null); navigate('/');}}>Sign out</button>
                </>}
                <button className='btn download'>Download</button>
            </div>
        </div>
    </>;
}
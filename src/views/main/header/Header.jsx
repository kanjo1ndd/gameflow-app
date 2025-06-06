import './Header.css'
import { useNavigate, useLocation} from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import { AppContext } from '../../../AppContext';

export default function Header() {

    // Категории
    const navigate = useNavigate();
    const location = useLocation();
    const {token, setToken} = useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const [categories, setCategory] = useState([]);
    const { request } = useContext(AppContext);

    useEffect(() => {
        request("/api/shop/allCategories")
            .then(data => setCategory(data))
            .catch(console.error);
    }, []);
    // Категории

    // Игры в поиске
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
    const delayDebounce = setTimeout(() => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }

        request("/api/shop/allProducts")
            .then(products => {
                const filtered = products.filter(p =>
                    p.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(filtered.slice(0, 3));
            })
            .catch(console.error);
        }, 300); 

        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);
    // Игры в поиске

    // const gameCategories = categories.map(cat => cat.name);

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
                                    {categories.map((cat, index) => (
                                    <li
                                        key={index}
                                        className="dropdown-item"
                                        onClick={() => {
                                        navigate(`/Category/${cat.slug}`);
                                        setShowDropdown(false);
                                        }}
                                    >
                                        {cat.name}
                                    </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <li className={`li ${location.pathname === '/News' ? 'active' : ''}`} 
                            onClick={() => navigate('/News')}>
                            News
                        </li>
                    </ul> 
                </nav>
                <div>
                    <i className="bi bi-search"></i>
                    <input
                        placeholder="Search store"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onKeyDown={() => {}}
                    />
                </div>
                {searchResults.length > 0 && (
                    <ul className="search-dropdown">
                        {searchResults.map((game, index) => (
                            <li key={index} className="dropdown-itemSearch" onClick={() => navigate(`/Product/${game.id}`)}>
                                <img src={game.imagesCsv} />
                                <div className='name-price-text'>
                                    <span className='name'>{game.name}</span>
                                    <span className='price'>{game.price} UAH</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='reg'>
                {token == null ? <>
                    <i className={`bi bi-person-circle ${location.pathname === '/Profile' ? 'active' : ''}`}
                        onClick={() => navigate('/SignIn')}/>
                    <i className={`bi bi-suit-heart ${location.pathname === '/WishList' ? 'active' : ''}`}
                        onClick={() => navigate('/SignIn')}/>
                    <i className={`bi bi-cart3 ${location.pathname === '/MyCart' ? 'active' : ''}`} 
                        onClick={() => navigate('/SignIn')}/>
                    <i className='bi bi-globe2' onClick={() => navigate('/News')}/>
                    <button className='btn sign_in' onClick={() => navigate('/SignIn')}>Sign in</button>
                </> : <>
                    <i className={`bi bi-person-circle ${location.pathname === '/Profile' ? 'active' : ''}`}
                        onClick={() => navigate('/Profile')}/>
                    <i className={`bi bi-suit-heart ${location.pathname === '/WishList' ? 'active' : ''}`}
                        onClick={() => navigate('/WishList')}/>
                    <i className={`bi bi-cart3 ${location.pathname === '/MyCart' ? 'active' : ''}`} 
                        onClick={() => navigate('/MyCart')}/>
                    <i className={`bi bi-globe2 ${location.pathname === '/MyCart' ? 'active' : ''}`} 
                        onClick={() => navigate('/News')}/>
                    <button className='btn sign_in' title={token} onClick={() => {setToken(null); navigate('/');}}>Sign out</button>
                </>}
                <button className='btn download'>Download</button>
            </div>
        </div>
    </>;
}
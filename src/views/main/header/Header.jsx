import './Header.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    return <>
        <div className='head'>
            <div className='logo'>
                STORE
            </div>
            <div className='path'>
                <nav>
                    <ul className='nav'>
                        <li className='li' onClick={() => navigate('/')}>
                            Discover
                        </li>
                        <li className='li'>
                            Support
                        </li>
                        <li className='li'>
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
                <i className="bi bi-person-circle" onClick={() => navigate('/Profile')}></i>
                <i className="bi bi-suit-heart"></i>
                <i className="bi bi-cart3"></i>
                <i className="bi bi-globe2"></i>
                <button className='sign_in' onClick={() => navigate('/SignIn')}>Sign in</button>
                <button className='download'>Download</button>
            </div>
        </div>
    </>;
}
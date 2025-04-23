import './Header.css'

export default function Header() {
    return <>
        <div className='head'>
            <div className='logo'>
                STORE
            </div>
            <div className='path'>
                <nav>
                    <ul className='nav'>
                        <li className='li'>
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
                <i className="bi bi-person-circle"></i>
                <i className="bi bi-suit-heart"></i>
                <i className="bi bi-cart3"></i>
                <i className="bi bi-globe2"></i>
                <button className='sign_in'>Sign in</button>
                <button className='download'>Download</button>
            </div>
        </div>
    </>;
}
import './EditProfileContent.css'

export default function EditProfileContent() {
    return <>
        <div className='content-edit-profile'>
            <div className='title-edit-profile'>Profile Editor</div>
            <div className='main-content-edit-profile'>
                <div className='left-part-list'>
                    <nav>
                        <ul className='nav-li'>
                            <li className='li-edit-profile'>Main</li>
                            <li className='li-edit-profile'>Avatar</li>
                            <li className='li-edit-profile'>Showcase</li>
                            <li className='li-edit-profile'>Privacy</li>
                        </ul>
                    </nav>
                </div>
                <div className='right-part-list'>
                    <Main />
                </div>
            </div>
        </div>
    </>;
}

export function Main() {
    return <>
        <div className='title-right-part'>Main</div>
        <hr/>
    </>;
}
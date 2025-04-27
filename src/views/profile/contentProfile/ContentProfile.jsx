import './ContentProfile.css'

export default function ContentProfile() {
    return <>
    <div className='content-profile'>
        <div className='block-profile'>
            <div className='profile-img'/>
            <div className='nickname-level'>
                <div className='level'>Level 1</div>
                <div className='nickname'>Nickname</div>
            </div>
            <div className='about-me'>
                <div className='text-about-me'>About me:</div>
                <div className='text-description'>Description</div>
            </div>
            <div className='button-edit'>
                <buttom className="button-edit-profile">EDIT PROFILE</buttom>
            </div>
        </div>
    </div>
    </>;
}
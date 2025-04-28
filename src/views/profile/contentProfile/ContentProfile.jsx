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
                    <button className="button-edit-profile">EDIT PROFILE</button>
                </div>
            </div>
            <div className='achievements-carts'>
                <div className='category-achievements'>Achievements</div>
                <div className='block-achievements-for-carts'>
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                </div>
                <div className='show-achievements'>Show more <i className="bi bi-arrow-right"></i></div>
            </div>
        </div>
    </>;
}

export function AchievementsCart() {
    return <>
        <div className='block-achievements-cart'>
            <div className='achievements-img'></div>
            <div className='achievements-name'>Name achievement</div>
            <div className='achievements-progress'>Completed by ???%</div>
        </div>
    </>;
}
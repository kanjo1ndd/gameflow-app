import { AppContext } from '../../../AppContext';
import './ContentProfile.css'
import { useContext, useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'

export default function ContentProfile() {

    const navigate = useNavigate();
    const { request, token } = useContext(AppContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if(token == null) {
            setUserData({});
        }
        else {
            request("/api/user/profile")
            .then(setUserData)
            .catch(err => {
                console.error(err);
                setUserData({});
            });
        }
    }, [token]);


    return <>
        {token == null ? <>
            <div className='need-authorization'>Need Authorization</div>
        </> : <> 
            <div className='content-profile'>
                <div className='block-profile'>
                    <img className='profile-img' src={userData.avatarUrl && userData.avatarUrl !== 'https://localhost:7202/Admin/Image/'
                        ? userData.avatarUrl : '/unknownUser.jpg'}/>
                    <div className='nickname-level'>
                        <div className='level'>Level 1</div>
                        <div className='nickname'>{userData.userName ?? 'Nickname'}</div>
                    </div>
                    <div className='about-me'>
                        <div className='text-about-me'>About me:</div>
                        <div className='text-description'>{userData.aboutUser ?? 'Description'}</div>
                    </div>
                    <div className='button-edit'>
                        <button className="btn button-edit-profile" onClick={() => navigate('/Profile/Edit')}>EDIT PROFILE</button>
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
                <div className='game-collection'>
                    <div className='category-collection'>Game collection</div>
                    <div className='blocks-collection'>
                        <CollectionCart />
                        <CollectionCart />
                        <CollectionCart />
                        <CollectionCart />
                        <CollectionCart />
                        <CollectionCart />
                    </div>
                </div>
            </div>
        </>}
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

export function CollectionCart() {
    return <>
        <div className='block-collection'>
            <div className='collection-img'/>
            <div className='collection-content'>
                <div className='collection-name'>Name game</div>
                <div className='collection-mini-img-text'>
                    <div className='collection-mini-img'>
                        <div className='mini-img'/>
                        <div className='mini-img'/>
                        <div className='mini-img'/>
                    </div>
                    <div className='collection-text'>
                        <div className='text-record'>? hours played on record</div>
                        <div className='text-played'>Last played: ? days ago</div>
                    </div>
                </div>
                <div>
                    <div className='text-completed'>Completed: ?%</div>
                    <div className='bar-completed'></div>
                </div>
            </div>
        </div>
    </>;
}
import './AchievementsContent.css'

export default function AchievementsContent() {
    return <>
        <div className='content-Achievements'>
            <div className='title-AchievementsBlock'>Achievements</div>
            <div className='amount-Achievements'>Amount of achievements: ???</div>
            <div className='main-contentblock-for-Achievements'>
                <Achievement />
                <Achievement />
                <Achievement />
                <Achievement />
                <Achievement />
            </div>
        </div>
    </>;
}

export function Achievement() {
    return <>
        <div className='block-Achievement'>
            <img className='img-Achievement'/>
            <div className='information-block'>
                <div className='name-description-Achievement'>
                    <div className='name-Achievemnt'>Name Achievement</div>
                    <div className='description-Achievemnt'>Description</div>
                </div>
                <div className='progress-Achievemnt'>??%</div>
            </div>
        </div>
    </>;
}
import './AchievementsContent.css'

export default function AchievementsContent() {
    return <>
        <div className='content-Achievements'>
            <div className='title-AchievementsBlock'>Achievements</div>
            <div className='amount-Achievements'>Amount of achievements: ???</div>
            <div className='main-contentblock-for-Achievements'>
                <Achievement />
            </div>
        </div>
    </>;
}

export function Achievement() {
    return <>
        <div></div>
    </>;
}
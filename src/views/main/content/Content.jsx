import './Content.css'
import ContentBlock from './ContentBlock';

export default function Content() {
    return <>
        <div className='content'>
            <div className='first'>
                <div className='first-img'></div>
                <div className='first-div'>
                    <div className='text-name'>NAME GAME</div>
                    <div className='text-update'>NEW UPDATE</div>
                    <div className='img'></div>
                    <div className='img'></div>
                    <div className='price'>FREE</div>
                    <button>Learn more</button>
                </div>
            </div>
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
            <ContentBlock />
        </div>
    </>;
}
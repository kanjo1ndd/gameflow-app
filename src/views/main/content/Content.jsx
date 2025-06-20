import './Content.css'
import ContentBlock, { Conbl, ConFree } from './ContentBlock';
import CategoryList from './ContentCategoryList';
import ContentSale, { ConDeals } from './ContentSale';

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
                    <button className='btn'>Learn more</button>
                </div>
            </div>
            <ContentBlock url="/api/shop/topRatedProducts" title="Top Rated"/>
            <Conbl/>
            <ContentSale />
            <ConDeals />
            <ConFree />
            <div className='con-store-mobile'>
                <div className='store-img'></div>
                <div className='store-main'>
                    <div className='store-title'>Vision Store Mobile</div>
                    <div className='store-description'>Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance.</div>
                    <button className='btn'>Install Mobile <i className="bi bi-box-arrow-up-right"></i></button>
                </div>
            </div>
            <CategoryList />
            <ContentBlock url="/api/shop/newestProducts" title="Newest Releases" />
            <ContentBlock url="/api/shop/topRatedProducts" title="Top Rated"/>
            <ContentBlock url="/api/shop/topRatedProducts" title="Top Rated"/>
        </div>
    </>;
}
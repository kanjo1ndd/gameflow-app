import './ContentCartProduct.css'
import '../wishlist/contentWishList/ContentWishList.css'
import '../profile/contentProfile/ContentProfile.css'
import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from '../../AppContext';

export default function ContentCartProduct() {

    const { id } = useParams();

    const [product, setProduct] = useState([]);
    const { request } = useContext(AppContext);

    useEffect (() => {
        request("/api/shop/product/" + id)
        .then(data => setProduct(data))
        .catch(j => console.error(j));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return <>
        <div className='content-productCart'>
            <div className='title-productCart'>{product.name}</div>
            <div className='main-content-productCart'>
                <div className='big-menu-productCart'>
                    <div className='block-for-img'>
                        <img className='big-img-productCart'/>
                        <img className='mini-img-productCart'/>
                        <img className='mini-img-productCart'/>
                        <img className='mini-img-productCart'/>
                        <img className='mini-img-productCart'/>
                    </div>
                    <div className='title-in-productCart'>Aboit this game</div>
                    <div className='description-in-productCart'>{product.description}</div>
                    <img className='big-img-productCart'/>
                    <div className='description-in-productCart'>{product.description}</div>
                    <div className='title-in-productCart'>System Requirements</div>
                    <div className='block-system-requirements'>
                        <div className='system-requirements'>
                            <div>Minimum</div>
                            <SystemRequirements />
                        </div>
                        <div className='system-requirements'>
                            <div>Recommended</div>
                            <SystemRequirements />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='mini-menu-Cart'>
                    <img className='logo-productCart'/>
                    <div className='description-productCart-mini-menu'>
                        Marvel Rivals is a Super Hero Team-Based PVP Shooter! Assemble an all-star Marvel squad, 
                        devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, 
                        ever-changing battlefields across the continually evolving Marvel universe!
                    </div>
                    <div className='block-date-com'>
                        <div className="block-flex-date-com">
                            <div>All Reviews:</div>
                            <div>Positive</div>
                        </div>
                        <div className="block-flex-date-com">
                            <div>Release Date</div>
                            <div>{product.releaseDate.slice(0, 10)}</div>
                        </div>
                    </div>
                    <div className='block-date-com'>
                        <div className="block-flex-date-com">
                            <div>Developer</div>
                            <div>{product.developer}</div>
                        </div>
                        <div className="block-flex-date-com">
                            <div>Publisher</div>
                            <div>{product.publisher}</div>
                        </div>
                    </div>
                    <div className='buttons-wishlist-addCart'>
                        <button className='btn button-addCart'>Add to cart</button>
                        <button className='btn button-Wishlist'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='achievements-carts'>
                <div className='title-in-productCart'>Achievements</div>
                <div className='block-achievements-for-carts'>
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                    <AchievementsCart />
                </div>
                <div className='show-achievements' onClick={() => navigate('/Achievements')}>Show more <i className="bi bi-arrow-right"></i></div>
            </div>
            <div className='comments-productCart'>
                <div className='title-in-productCart'>Customer reviews</div>
                <div>
                    <div className='review-score'>Review score:</div>
                    <div className='sort-text'>
                        <span className='status-comments'>??? positive</span>
                        <span className='reviews-text'>(?? reviews)</span>
                    </div>
                </div>
                <div className="block-sort">
                    <div className="text-sort">Sort by:</div>
                    <div className="list-by">
                        On Sale
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export function SystemRequirements() {
    return <>
        <div className='system-requirement'>
            <div className='right-part-text'><span className='left-part-text'>OS version: </span> ...</div>
            <div className='right-part-text'><span className='left-part-text'>Processor: </span> ...</div>
            <div className='right-part-text'><span className='left-part-text'>Memory: </span> ...</div>
            <div className='right-part-text'><span className='left-part-text'>GPU: </span>    wefw.</div>
            <div className='right-part-text'><span className='left-part-text'>DirectX: </span> ...</div>
            <div className='right-part-text'><span className='left-part-text'>Storage: </span> ...</div>
            <div className='right-part-text'><span className='left-part-text'>Additional input device: </span> ...</div>
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
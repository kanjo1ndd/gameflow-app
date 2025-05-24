import './ContentCartProduct.css'
import '../wishlist/contentWishList/ContentWishList.css'

export default function ContentCartProduct() {
    return <>
        <div className='content-productCart'>
            <div className='title-productCart'>Name Game</div>
            <div className='main-content-productCart'>
                <div className='big-menu-Cart'>
                    <img className='big-img-Cart'/>
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
                            <div>??.??.????</div>
                        </div>
                    </div>
                    <div className='block-date-com'>
                        <div className="block-flex-date-com">
                            <div>Developer</div>
                            <div>pixyda,inc.</div>
                        </div>
                        <div className="block-flex-date-com">
                            <div>Publisher</div>
                            <div>pixyda,inc.</div>
                        </div>
                    </div>
                    <div className='buttons-wishlist-addCart'>
                        <button className='btn button-addCart'>Add to cart</button>
                        <button className='btn button-Wishlist'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
import './ContentMyCart.css'
import '../../wishlist/contentWishList/ContentWishList.css'

export default function ContentMyCart() {
    return <>
        <div className="content-MyCart">
            <div className='name-sum'>
                <div className='title-wishlist'>My Cart</div>
                <div className='sum-price'>UAH 0.00</div>
            </div>
            <div className='mainContent-mycart'>
                <BlockGame />
                <div className='block-totalsum'>
                    <div className='totalSum'>
                        <span>Total:</span>
                        <span>0.00 UAH</span>
                    </div>
                    <div className='tax'>
                        <span>Tax:</span>
                        <span>?%</span>
                    </div>
                    <div className='description-totalsum'>
                        Of their respective owners in the US and other countries. 
                        VAT included in all prices where applicable
                    </div>
                    <button className='btn button-check-out'>Check Out</button>
                </div>
                <BlockGame />
                <BlockGame />
            </div>
        </div>
    </>;
}

export function BlockGame() {
    return <>
        <div className="block-game-mycart">
            <div className="block-game-left-part">
                <div className="game-img" />
                <div className="left-part-text">
                    <div className="category-game">Category Game</div>
                    <div className="name-game">Name Game</div>
                    <div className="block-date-com">
                        <div className="block-flex-date-com">
                            <div>All Reviews:</div>
                            <div>Positive</div>
                        </div>
                        <div className="block-flex-date-com">
                            <div>Release Date</div>
                            <div>??.??.????</div>
                        </div>
                    </div>
                    <div className="icons-left-part">
                        <i className="bi bi-windows"></i>
                        <i className="bi bi-apple"></i>
                    </div>
                </div>
            </div>
            <div className="block-game-right-part">
                <div className="cost-game">UAH 0.00</div>
                <div className="remove-button-add">
                    <div className="remove">Remove</div>
                    <div className="remove">Move to wishlist</div>
                </div>
            </div>
        </div>
    </>;
}
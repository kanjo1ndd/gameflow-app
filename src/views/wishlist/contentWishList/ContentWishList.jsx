import { useState } from "react";
import './ContentWishList.css'

export default function ContentWishList() {

    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(!isOn);

    return <>
        <div className='block-wishlist'>
            <div className='name-sum'>
                <div className='title-wishlist'>My Wishlist</div>
                <div className='sum-price'>UAH 0.00</div>
            </div>
            <div className='block-notification'>
                <div className='left-part'>!</div>
                <div className='main-content-notification'>
                    <div className='icon-text'>
                        <i className="bi bi-envelope"/>
                        <div className='text-notification'>Get notified when your wishlisted games go on sale, 
                            or are available for purchase or pre-purchase.</div>
                    </div>
                    <div className={`toggle-switch ${isOn ? "on" : "off"}`} onClick={toggle}>
                        <div className="toggle-thumb" />
                        <span className="toggle-label">{isOn ? "ON" : "OFF"}</span>
                    </div>
                </div>
            </div>
            <div className="block-sort">
                <div className="text-sort">Sort by:</div>
                <div className="list-by">
                    On Sale
                    <i className="bi bi-chevron-down"></i>
                </div>
            </div>
            <div className="blocks-game">
                <BlockGame />
                <BlockGame />
            </div>
        </div>
    </>;
}

export function BlockGame() {
    return <>
        <div className="block-game">
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
                    <button className="btn button-add-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </>;
}
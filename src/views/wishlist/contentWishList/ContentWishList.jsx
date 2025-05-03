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
            </div>
        </div>
    </>;
}
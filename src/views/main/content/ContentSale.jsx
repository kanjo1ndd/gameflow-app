import './ContentSale.css'
import './ContentBlock.css'

/* Для 6-ти иконных */

export default function ContentSale() {
    return <>
        <div className='content-div'>
            <div className='category'>Category</div>  {/*категория*/}
            <div className='cards'>
                <ConSale />
                <ConSale />
                <ConSale />
                <ConSale />
                <ConSale />
                <ConSale />
            </div>
        </div>
    </>;
}


export function ConSale() {
    return <>
        <div className='card'>
            <div className='card-img'></div> {/* изображение */}
            <div className='card-subtitle'>Base Game</div>
            <div className='card-title'>Name</div> {/* название */}
            <div className='card-pricing'>
                <div className="discount">-33%</div>{/* скидка */}
                <div className='prices'>{/* цена */}
                    <div className="old-price">UAH Price</div>
                    <div className="new-price">UAH Price</div>
                </div>
            </div>
        </div>
    </>;
}

/* Для 6-ти иконных */


/* Для 3-ех иконных */
export function ConDeals() {
    return <>
        <div className='con-deals'>
            <ConDealsCart />
            <ConDealsCart />
            <ConDealsCart />
        </div>
    </>;
}

export function ConDealsCart() {
    return <>
        <div>
            <div className='img-deal'></div>
            <div className='name-deal'>Name</div>
            <div className='prices-sale'>
                <div className="discount-deal">-33%</div>{/* скидка */}
                <div className="old-price-deal">UAH Price</div>
                <div className="new-price-deal">UAH Price</div>
            </div>
        </div>
    </>;
}

/* Для 3-ех иконных */
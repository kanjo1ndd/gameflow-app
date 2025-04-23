import './ContentCategoryList.css'

export default function CategoryList() {
    return <>
        <div className='category-list'>
            <ListCart />
            <hr/>
            <ListCart />
            <hr/>
            <ListCart />
        </div>
    </>;
}

export function ListCart() {
    return <>
        <div className='list-cart'>
            <div className='list-title'>Category <i className="bi bi-chevron-right"></i></div>
            <div className='list'>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    </>;
}

export function Cart() {
    return <>
        <div className='cart'>
            <div className='cart-img'></div>
            <div className='cart-price-name'>
                <div className='cart-name'>Name</div>
                <div className='cart-price'>Price</div>
            </div>
        </div>
    </>;
}
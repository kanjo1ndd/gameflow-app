import './Category.css';
import Footer from "../main/footer/Footer";
import Header from "../main/header/Header";
import '../wishlist/contentWishList/ContentWishList.css'
import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from '../../AppContext';

export default function Category() {
    const { id } = useParams();

    const [categories, setCategory] = useState(null);
    const { request } = useContext(AppContext);

    useEffect (() => {
        request("/api/shop/" + id)
        .then(data => setCategory(data))
        .catch(j => console.error(j));
    }, [id]);

    if (!categories) return <div>Loading...</div>;

    return <>
        <Header />
        <div className='container-category'>
            <div className='category-title'>{categories.name}</div>
            <div className='img-description-category'>
                <img className='main-img-category' src={categories.imageUrl}/>
                <div className='description-category'>      
                    {categories.description}
                </div>
            </div>
            <hr className='hr-category'/>
            <div className='container-product'>
                {categories.products?.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
        <Footer />
    </>;
}


export function Product({ product }) {
    return <>
        <div className="block-game">
            <div className="block-game-left-part">
                <img className="game-img" src={product.imagesCsv}/>
                <div className="left-part-text">
                    <div className="category-game">Category Game</div>
                    <div className="name-game">{product.name}</div>
                    <div className="block-date-com">
                        <div className="block-flex-date-com">
                            <div>All Reviews:</div>
                            <div>Positive</div>
                        </div>
                        <div className="block-flex-date-com">
                            <div>Release Date</div>
                            <div>{product.releaseDate.slice(0, 10)}</div>
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
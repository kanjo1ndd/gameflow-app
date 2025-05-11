import './Category.css';
import Footer from "../main/footer/Footer";
import Header from "../main/header/Header";
import { useParams } from 'react-router-dom';

export default function Category() {
    const { name } = useParams();
    return <>
        <Header />
            <div className='container-category'>
                <div className='category-title'>{name}</div>
                <div className='img-description-category'>
                    <img className='main-img-category' />
                    <div className='description-category'>
                        Description
                    </div>
                </div>
                <hr className='hr-category'/>
                <div className='container-product'>
                    {/* <Profuct />
                    <Profuct /> */}
                </div>
            </div>
        <Footer />
    </>;
}

export function Profuct() {
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
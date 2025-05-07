import './ContentBlock.css'
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../AppContext";

/* Для 6-ти иконных */

export default function ContentBlock() {

    const [products, setProducts] = useState([]);
    const { request } = useContext(AppContext);

    useEffect(() => {
        request("/api/shop/allCategories")
            .then(data => setProducts(data))
            .catch(console.error);
    }, []);


    return <>
      <div className='content-div'>
        <div className='category'>Category</div>  {/*категория*/}
        <div className='cards'>
            {products.map(product => (
                <Con
                    key={product.id}
                    imageUrl={product.imageUrl}
                    name={product.name}
                />
            ))}
            <Con />
            <Con />
            <Con />
            <Con />
            <Con />
        </div>
      </div>
    </>;
}

export function Con({ imageUrl, name}) {
    return <>
        <div className='card'>
            <img className='card-img' src={imageUrl} /> {/* изображение */}
            <div className='card-subtitle'>Base Game</div>
            <div className='card-title'>{name}</div> {/* название */}
            <div className='card-price'>UAH Price</div> {/* цена */}
        </div>
    </>;
}

/* Для 6-ти иконных */


/* Для 3-ех иконных */
export function Conbl() {
    return <>
        <div className='conbl'>
            <Con_bl />
            <Con_bl />
            <Con_bl />
        </div>
    </>;
}

export function Con_bl() {
    return <>
        <div>
            <div className='img'></div>
            <div className='name'>Name</div>
            <div className='description'>Description</div>
            <button className='btn'>See in Shop <i className="bi bi-box-arrow-up-right"></i></button>
        </div>
    </>;
}
/* Для 3-ех иконных */


export function ConFree() {
    return <>
        <div className='con-free'>
            <div className='con-free-inner'>
                <div className='con-in-free'>
                    <div><i className="bi bi-gift"></i>Free games!</div>
                    <button className='btn'>View More</button>
                </div>
                <div className='con-free-main'>
                    <FreeCart />
                    <FreeCart />
                    <FreeCart />
                </div>
            </div>
        </div>
    </>;
}

export function FreeCart() {
    return <>
        <div>
            <div className='img-free-inner'>
                <div className='img-free'></div>
                <div className='inscription-free'>FREE NOW</div>
            </div>
            <div className='name-free'>Name</div>
            <div className='data-free'>Free Now - Data at Data</div>
        </div>
    </>;
}
import './ContentBlock.css'

export default function ContentBlock() {
    return <>
      <div className='content-div'>
        <div className='category'>Category</div>  {/*категория*/}
        <div className='cards'>
            <Con />
            <Con />
            <Con />
            <Con />
            <Con />
            <Con />
        </div>
      </div>
    </>;
}

export function Con() {
    return <>
        <div className='card'>
            <div className='card-img'></div> {/* изображение */}
            <div className='card-subtitle'>Base Game</div>
            <div className='card-title'>Name</div> {/* название */}
            <div className='card-price'>Price</div> {/* цена */}
        </div>
    </>;
}
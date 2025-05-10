import './index.css'

export const Card = ({brandName, stars, reviews, distance, foodName, price, img})=> {

return (
    <div className='card'>
<img src={img} style={{
    height: "180px",
    alignSelf: "center",
}} alt="" />
<div className="brandName">{brandName}</div>
<div className="foodReviews">
    <div className="stars"><img src="/star.png" style={{
    height: "13px",
}} alt="" />{stars}</div>
    <div className="reviews">{reviews} Reviews</div>
    <div className='distance'>{distance}/km</div>
</div>
<div className="line"></div>
<div className="flex">
<div>
<div className="foodName">{foodName}</div>
<div className="price">5.00</div>
</div>
<div className="add">+</div>
</div>
    </div>
)

}
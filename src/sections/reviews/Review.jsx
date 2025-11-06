import Card from '../../components/Card'

const Review = ({review}) => {
  return (
    <Card className="light">
        <p>{review.review}</p>
        <div className="review__user">
            <div className="review__user-avatar">
                <img src={review.avatar} alt="User Avatar" />
            </div>
            <div className="review__user-details">
                <h6>{review.name}</h6>
                <small>{review.location}</small>
            </div>
        </div>
    </Card>
  )
}

export default Review
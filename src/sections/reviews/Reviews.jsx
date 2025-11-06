import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import data from './data'
import './reviews.css'
import Review from './Review'


const Reviews = () => {
  return (
    <section id="reviews">
        <h2>What Our Users Say</h2>
        <p>Here are some of our users reviews!</p>
        <div className="container">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            data.map(review => (
                <SwiperSlide key={review.id}>
                    <Review  review={review} />
                </SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    </section>
  )
}

export default Reviews
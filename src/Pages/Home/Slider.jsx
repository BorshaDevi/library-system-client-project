import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='mx-auto max-w-6xl'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/B6y51dT/books-imagination-still-life.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/RCBbLWH/numerology-concept-composition.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/HNLm29r/open-book-with-fairytale-scene.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/bNqdLFg/books-imagination-still-life-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/bvjyZrb/18701628-pd109-pdobj00657a-image.jpg" alt="" /></SwiperSlide>
        
      </Swiper> 
        </div>
    );
};

export default Slider;
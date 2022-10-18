import { useSwiper } from 'swiper/react';
import { Icon } from '@iconify/react';
export default function SwiperButtonPrev() {
  const swiper = useSwiper();
  return (
    <button
      className="hidden md:block absolute left-10 top-1/2 z-10 text-5xl text-white hover:text-lightGreen transition-all duration-300"
      onClick={() => swiper.slidePrev()}
    >
      <Icon icon="bi:arrow-left-circle" />
    </button>
  );
}

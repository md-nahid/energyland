import { useSwiper } from 'swiper/react';
import { Icon } from '@iconify/react';
export default function SwiperButtonNext() {
  const swiper = useSwiper();
  return (
    <button
      className="hidden md:block absolute right-10 top-1/2 z-10 text-5xl text-white hover:text-lightGreen transition-all duration-300"
      onClick={() => swiper.slideNext()}
    >
      <Icon icon="bi:arrow-right-circle" />
    </button>
  );
}

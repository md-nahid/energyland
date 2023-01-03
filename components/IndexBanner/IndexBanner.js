import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from '../Container';
import SwiperButtonNext from './SwiperButtons/SwiperButtonNext';
import SwiperButtonPrev from './SwiperButtons/SwiperButtonPrev';
import LinkButton from '../Common/LinkButton';
import LinkButtonTwo from '../Common/LinkButtonTwo';
import { BannerData } from '../../cms/IndexPage/index.data';

export default function IndexBanner() {
  return (
    <div className="h-full">
      <Swiper
        loop={true}
        slidesPerView={1}
        speed={2000}
        className="relative h-[640px] md:h-[764px]"
        autoplay={true}
      >
        {BannerData.map((b) => (
          <SwiperSlide
            key={b.id}
            className="bg-black"
          >
            <Image
              priority
              src={b.imageSrc}
              alt={b.imageAlt}
              layout="fill"
              className="object-cover absolute opacity-60"
            />
            <Container className="relative top-1/2 -translate-y-1/2 z-10 text-center">
              <div className="capitalize tracking-widest text-2xl xs:text-3xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-bold">
                <h2>{b.title}</h2>
                <h2>
                  {b.titleTwo} <span className="text-green-400 underline">{b.titleThree}</span>
                </h2>
              </div>
              <div className="mt-5 md:mt-10 text-sm md:text-lg text-white">
                <p>{b.subtitleTwo}</p>
              </div>
              <div className="grid grid-cols-1 gap-5 mt-5 md:mt-10 px-5 xsm:flex xsm:max-w-lg xsm:m-auto xl:max-w-2xl xsm:mt-5">
                <LinkButton
                  href={b.linkOne}
                  label={b.linkOneLabel}
                />
                <LinkButtonTwo
                  href={b.linkTwo}
                  label={b.linkTwoLabel}
                />
              </div>
            </Container>
          </SwiperSlide>
        ))}
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </Swiper>
    </div>
  );
}

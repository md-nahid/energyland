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
            <Container className="relative top-1/2 -translate-y-1/2 z-10">
              <div className="capitalize tracking-widest text-3xl xsm:text-4xl sm:text-5xl md:text-6xl text-white font-bold">
                <h2>{b.title}</h2>
                <h2>
                  {b.titleTwo} <span className="text-green-400 underline">{b.titleThree}</span>
                </h2>
              </div>
              <div className="mt-4 text-sm text-white">
                <p>{b.subtitle}</p>
                <p>{b.subtitleTwo}</p>
              </div>
              <div className="mt-10 sm:flex flex-col sm:flex-row items-center">
                <LinkButton
                  href={b.linkOne}
                  label={b.linkOneLabel}
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 sm:max-w-xs">
                  <LinkButtonTwo
                    href={b.linkTwo}
                    label={b.linkTwoLabel}
                  />
                </div>
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

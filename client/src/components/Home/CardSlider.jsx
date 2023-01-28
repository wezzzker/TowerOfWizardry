import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../index.scss';

const cardSlide = [
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/1TapjGKU6OhXbUnMYe5xo1/0c43f3713bd4f7d4d0115d4cb8337b21/ru_rHwWRSZRvL.png?fm=webp',
    text: 'Узнайте, что скрывает вечная ночь Иннистрада',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/6INGY5n2kCfJoIViY2U61r/c553311e065597b8b26a210033d37e13/afpoukF0051_548x432_EN.png?fm=webp',
    text: 'НИКАКОЙ ГРАВИТАЦИИ. ТОЛЬКО ВЕСЕЛЬЕ.',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/6YCpuyQvWWpEcgyEKRnFX3/a4a2250f83ba508ef569e9d8240fb086/en_cGXpOKrPbOKklzi.png?fm=webp',
    text: 'ГРАНДИОЗНАЯ СИЛА. ОСЛЕПИТЕЛЬНЫЙ БЛЕСК.',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/1eF61M1xrrZL5tJRWBZvgg/d53f20421ca4f799c6c1c3f62183c7b9/O0jTISSuEq_RU.png?fm=webp',
    text: 'СОБЕРИТЕ ОТРЯД. СОЗДАЙТЕ СВОЮ ЛЕГЕНДУ.',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/7efA0jTDL5mmVDqOyoqQVH/7e0e74b73b35e4548e2b1e3f758e570d/ru_Jl6dXhowVi.png?fm=webp',
    text: 'ВАС ЖДУТ ВЫДАЮЩИЕСЯ УСПЕХИ',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/2EnPiHMKRXHC7cfmFEpN7s/6508772c896a2cc933f8867bad7a7bd4/ru_dWWifpqUvU.png?fm=webp',
    text: ' Покажите, на что вы способны, и спасите Мировое Древо от хаоса.',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/2aSV5D7kwcaJr6KECqvOXj/7e82675a2adcbbcc2659b33f8ef9529b/MTGZNR_CltrBstrDsp_EN_01_03.png?fm=webp',
    text: 'Здесь за каждым камнем таится смерть',
  },
];
const data = JSON.stringify(cardSlide);
console.log(data);

const CardSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={20}
      slidesPerGroup={1}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-full flex justify-center">
      {cardSlide.map(({ url, text }, id) => (
        <SwiperSlide
          key={id}
          className="max-w-[250px] h-[350px] bg-inherit rounded shadow-lg gap-5 cursor-pointer">
          <img src={url} alt="" className="w-full mx-auto max-h-[250px] p-3" />
          <p className="text-center font-semibold text-xl uppercase p-3">{text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;

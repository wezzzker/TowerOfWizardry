const slide = [
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/6CD1NIljkydWyaviTmJ616/26610f46dfa9f43123d355f503528aaa/d3jaJtb4gJk-1920x700.jpg?q=80&w=1920&h=700&fit=crop&f=center&fm=webp',
    titleImage:
      'https://images.ctfassets.net/s5n2t79q9icq/4SrhspyMTflwRuamZyMuCo/2ec2cea5ecba9550a15813ed535ae997/kjbrvPh1ku4as-EN-660x320.png?w=660',
    titleText:
      'Сила приходит вместе с совершенством. Взгляните на выпуск Phyrexia: All Will Be One уже сегодня! ',
    color: 'bg-[#642A2A]',
    Bcolor: 'hover:border-[#642A2A]',
  },

  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/66EtzNi9GUPoPBWqRP9O5U/d554f20a15b5db8c4e32212347bc5e32/afr-bg.jpg?q=80&w=1920&h=700&fit=crop&f=center&fm=webp',
    titleImage:
      'https://images.ctfassets.net/s5n2t79q9icq/4KmtM28OT6DIcba5ZqhyyW/02589e2f6a3875f21356d184383dee1b/RU_asdasqweasjd.png',
    titleText: 'Dungeons & Dragons встречается с Magic в Забытых Королевствах!',
    color: 'bg-[#302B85]',
    Bcolor: 'hover:border-[#302B85]',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/6fWi3fudqsRCsU8nbqSg9t/7b65de31484336b0434ea1d71d0541b2/81sMYohEcw_1920x700.jpg?q=80&w=1920&h=700&fit=crop&f=center&fm=webp',
    titleImage: 'https://mtgpics.com/graph/sets/logos_big/vow.png',
    titleText:
      'Иннистрад возвращается во всем своем жутком готическом великолепии с двумя новыми полноценными релизами.',
    color: 'bg-[#CA2C2D]',
    Bcolor: 'hover:border-[#CA2C2D]',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/2Rh5hQJ0cPXzJh2zolcIaV/046f4cd239d52888c15c76febb13b24e/1wuOyUzDAe_1920x700_v2.jpg?q=80&w=1920&h=700&fit=crop&f=center&fm=avif',
    titleImage:
      'https://images.ctfassets.net/s5n2t79q9icq/6hW4MvO1HovhwTcBYWNxei/fff74c7ab27e38a0b8262d990f46c4f9/PvpSsCUc_660x251_EN.png?w=660',
    titleText: 'ГРАНДИОЗНАЯ СИЛА. ОСЛЕПИТЕЛЬНЫЙ БЛЕСК.',
    color: 'bg-[#471D3C]',
    Bcolor: 'hover:border-[#471D3C]',
  },
  {
    url: 'https://images.ctfassets.net/s5n2t79q9icq/1s0QTPSnQKXw4RNMgfaPNm/39453fca367c854fceabc04184962577/tczyDNahXm_Desktop_1920.jpg?q=80&w=1920&h=700&fit=crop&f=center&fm=avif',
    titleImage:
      'https://images.ctfassets.net/s5n2t79q9icq/3aUXNF0UFZc0KMGtGLCIkJ/9a502ae57a643161d421fe1dd7201ea3/7chMElBAr2T_586x291.png?w=660&fm=webp',
    titleText:
      'Никакой гравитации. Только веселье. Отправляйтесь в новейший «Un-выпуск» Magic уже сегодня. Уже в продаже по всему миру!',
    color: 'bg-[#673483]',
    Bcolor: 'hover:border-[#673483]',
  },
];

import React, { useRef } from 'react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';
import '../../index.scss';

const Banner = () => {
  return (
    <section className="h-[500px] sm:h-[600px] lg:h-[750px]">
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        autoplay={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop
        className="h-full w-full max-w-[1920px] banner">
        {slide.map(({ url, titleImage, titleText, color, Bcolor }) => (
          <SwiperSlide className="bg-black" key={url}>
            <div
              className="w-full h-full bg-cover bg-center "
              style={{ backgroundImage: `url(${url})` }}>
              <div className="h-full  xl:justify-start px-8 flex items-end justify-center md:justify-center bg-black/30 ">
                <div className="text-center max-w-[650px] mb-14">
                  <img width={650} src={titleImage} alt="" />
                  <p className="title text-2xl py-3 font-medium lg:text-4xl">{titleText}</p>
                  <button
                    className={`py-3 ${color} px-8 rounded-md md:font-bold md:text-2xl mt-4 border-2 border-transparent ${Bcolor} hover:bg-zinc-900 transition-all`}>
                    Сделайте предзаказ сейчас
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;

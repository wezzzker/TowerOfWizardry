import React from 'react';

const bg =
  'https://images.ctfassets.net/s5n2t79q9icq/684AfTBXMgTnyfifLHcUzv/de7ea09847a02b8dfec7cf6174446dad/bg-latest-product.jpg?q=80&w=1920&h=938&fit=crop&f=center&fm=avif';

const cardData = [
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/5WXHrWKQ5DdhyAsWwDIKMt/7ff2cff9eddc8aa93052ac707798e9d6/5i3TtsHjEo_BG_1080x395.jpg?q=70&w=420&h=720&fit=thumb&fm=avif',
    title: 'Phyrexia: All Will Be One',
    card: 'https://images.ctfassets.net/s5n2t79q9icq/1SmhfSYc9rNAYmDKnmTtX7/ce40f9340a13746acd6ae22e017ec4de/S5t1lioh00_EN.png',
    text: 'Совершенство грядет! Совершенство и великолепие несет в Мультивселенную легион биомеханических приспешников под началом одного из величайших антагонистов в истории Magic — Элиш Норн. Преклоните колени и примите могущество Фирексии окончательно и бесповоротно.',
    date: 'Февраль 10, 2023',
  },
  {
    img: 'https://images.ctfassets.net/0piqveu8x9oj/3BvtMxJYDrO1WRzRqdWlGq/c3c9e6c4354d6aa3ef3126cfe322c152/articles_header_image_w20_1.jpg',
    title: "Приключения в 'Забытых королевствах'",
    card: 'https://images.ctfassets.net/s5n2t79q9icq/4y0lCcnnTwVQKk7L2JO9HZ/c1eb2f46bbc91545a82a9dabb9636d30/en_OCqznN9kWV.png?fm=webp',
    text: 'Dungeons & Dragons встречается с Magic в Забытых Королевствах! Играйте картами с изображениями любимых персонажей и сражайтесь с легендарными монстрами — Злобоглазами, Подражателями, Свежевателями Разума и, конечно же, драконами!',
    date: 'Ноябрь 18, 2022',
  },
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/9OgN5KPAlCLp5mlw84jzP/79c5f9c80d179499cb01f058c3fc86fb/BzZnlXTCzG_Tablet.jpg?q=80&w=767&h=1050&fit=crop&f=center',
    title: 'Unfinity',
    card: 'https://images.ctfassets.net/s5n2t79q9icq/6Uu0NYjvNrHnuGtTVUaxQj/ebd9f6953f319c2e5989f49061515daa/kjdnsfF0051_548x432_EN.png?fm=webp',
    text: 'Никакой гравитации. Только веселье. Предъявите ваш билет на космический карнавал, слишком уморительный для этого мира… С веселой механикой, наклейками и аттракционами!',
    date: 'Октябрь 7, 2022',
  },
  {
    img: 'https://sun9-61.userapi.com/impg/HY2mbINJghxZDWC8V5PbdjJP2tZyRQ0BJ8rSrA/vF6s7zS7gB4.jpg?size=604x347&quality=96&sign=27970d66c0a133230ec025531c30280c&type=album',
    title: 'Иннистрад: багровая клятва',
    card: 'https://images.ctfassets.net/s5n2t79q9icq/mSY4kFkyGwJNsykvRfWnn/75976c272894eb13f89ccad0c951825a/jI6xHGVhuF-en.png?fm=webp',
    text: 'Иннистрад возвращается во всем своем жутком готическом великолепии с двумя новыми полноценными релизами. Вы уже поучаствовали в празднике Седмицы Жатвы во время «Полночной Охоты». Теперь «Багровая Клятва» приглашает вас на роскошную свадьбу вампиров, но гость вы или подарок — вот в чем вопрос!',
    date: 'Сентября 9, 2022',
  },
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/1kaUzJPNrKO5iy7x7KndBh/7ff9e1d62697a11ddb16d215c8666220/OpmFN2D0iA.jpg?q=80&w=767&h=757&fit=crop&f=center&fm=webp',
    title: 'DOUBLE MASTERS 2022',
    card: 'https://images.ctfassets.net/s5n2t79q9icq/GMQMtNVKNT1hI5C63hLuP/6a2470f1d29e94b18972ec4a11afe40f/en_Le0idsgAsfTHRAh.png?fm=webp',
    text: 'Совершенство грядет! Совершенство и великолепие несет в Мультивселенную легион биомеханических приспешников под началом одного из величайших антагонистов в истории Magic — Элиш Норн. Преклоните колени и примите могущество Фирексии окончательно и бесповоротно.',
    date: 'Июль 8, 2022',
  },
];
const Products = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="max-w-[1920px] mx-auto py-10 bg-cover">
      <h2 className="text-center py-10 text-5xl font-bold">НОВЕЙШАЯ ПРОДУЦИЯ</h2>
      <div className="flex justify-center relative pb-10 flex-wrap">
        {cardData.map(({ img, card, title, text, date }, id) => (
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="w-1/5 h-[660px] bg-cover relative group hover:shadow-xl hover:shadow-black">
            <div className="card relative w-full h-full overflow-hidden">
              <div className="img absolute top-[50%] translate-y-[-50%] w-full h-[220px] transition-all duration-1000 group-hover:top-[1%] group-hover:translate-y-[0%]">
                <img src={card} alt="" />
              </div>
              <div className="content absolute bottom-0 w-full h-[100px] group-hover:h-[300px] p-3 transition-all duration-1000">
                <p className="text-center">{date}</p>
                <h2 className="text-xl text-center group-hover:block font-black uppercase">
                  {title}
                </h2>
                <p className="text-sm group-hover:block hidden py-3 opacity-0 group-hover:opacity-100 duration-1000 transition-opacity">
                  {text}
                </p>
                <button className=" mt-4  px-12 hidden rounded-lg group-hover:block  mx-auto bg-white py-2 text-black uppercase">
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

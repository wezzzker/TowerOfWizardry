import React from 'react';
import { FaAngleRight, FaInstagram, FaTwitch, FaTwitter, FaVk, FaYoutube } from 'react-icons/fa';
const bg =
  'https://images.ctfassets.net/s5n2t79q9icq/3KH6X7976LEXbIlJdUPrmb/e0a3a93d8c789d5a100f4f1ec80499ef/our-games-bg.jpg?q=80&w=1920&h=893&fit=crop&f=center&fm=avif';

const data = [
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/2IhViaXxBNa2EgOUyg7W0T/6d4e335b68c453f1525c0cbcc35989b1/waystoplay-arena_0.jpg?w=500',
    title: 'MTG ARENA',
    text: 'Планируйте. Действуйте. MTG Arena — это легендарная стратегическая карточная игра для ПК, Mac, Android и iOS.',
  },
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/2QtWA7cPu45QY2uuS3OgQS/72d17345efbc3c2f83706ef6bd040e23/waystoplay-facetoface.jpg?w=500&fm=webp',
    title: 'НАСТОЛЬНАЯ',
    text: 'Главное в Magic — это сообщество. Собирайтесь вместе и играйте дома, в гостях у друзей или в местном игровом магазине!',
  },
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/6Ia0WCSkLBuOuMk0ay9Wro/289063c1405e1568e17388cb86706c1f/waystoplay-mtgo.jpg?w=500&fm=webp',
    title: 'MAGIC ONLINE',
    text: 'Оригинальная электронная площадка для поклонников «Наследия», «Модерна» и других классических форматов Magic. Игра доступна на ПК!',
  },
  {
    img: 'https://images.ctfassets.net/s5n2t79q9icq/MfT4gZj9jDmf30bLyTEGH/a9379d8d6e1ebb2eea6da5cae45de54a/waystoplay-competitiveplay.jpg?w=500&fm=webp',
    title: 'СОРЕВНОВАТЕЛЬНАЯ',
    text: 'Следите за Magic Pro League и сражайтесь в турнирах на компьютере и в реальной жизни!',
  },
];

const Games = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="max-w-[1920px] mx-auto bg-cover bg-no-repeat py-4">
      <h3 className="text-4xl font-bold text-black py-5 text-center">НАШИ ИГРЫ</h3>
      <div className="max-w-[1480px] w-full mx-auto flex gap-8 px-6">
        {data.map(({ img, title, text }, id) => (
          <div key={id} className="w-1/4 bg-white text-black h-[400px]">
            <img className="w-full" src={img} alt="" />
            <div className="flex flex-col h-1/2 justify-between mt-3 text-center">
              <h4 className="text-lg font-black">{title}</h4>
              <p className="font-light">{text}</p>
              <span className="text-orange-500 flex justify-center items-center cursor-pointer hover:text-red-600 transition-colors">
                LINK <FaAngleRight size={15} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto text-black text-center py-20">
        <h5 className="text-lg font-medium uppercase tracking-[.4em]">Связаться с нами</h5>
        <div className="flex justify-center gap-8 mt-3  items-center">
          <FaTwitter className="cursor-pointer hover:text-rose-600 transition-colors" size={30} />
          <FaVk className="cursor-pointer hover:text-rose-600 transition-colors" size={30} />
          <FaInstagram className="cursor-pointer hover:text-rose-600 transition-colors" size={30} />
          <FaYoutube className="cursor-pointer hover:text-rose-600 transition-colors" size={30} />
          <FaTwitch className="cursor-pointer hover:text-rose-600 transition-colors" size={30} />
        </div>
      </div>
    </section>
  );
};

export default Games;

import React from 'react';
import CardSlider from './CardSlider';

const Card = () => {
  return (
    <section className="max-w-[1920px] mx-auto  bg-white">
      <div className="max-w-[1480px] mx-auto flex text-black p-8">
        <div className="max-w-[300px] w-full mx-auto lg:mx-0 pr-8 ">
          <h6 className="text-4xl font-semibold">Secret Lair</h6>
          <p className="text-lg">
            Наборы Secret Lair предлагают все то, что мы любим в игре Magic (а также несколько
            потрясающих совместных проектов)! Вас ждут карты с веселыми и необычными иллюстрациями,
            новые художники, а также оформления, о которых вы и не мечтали. Однако поторопитесь!
            Каждый набор появляется в продаже на очень короткое время. Не успеете — и набора как не
            бывало!
          </p>
          <button className="bg-[#642A2A]  p-2 border-2 border-[#642A2A] hover:bg-zinc-900 transition-colors text-white mt-1 flex text-lg font-bold py-2 px-8 rounded">
            Заказать
          </button>
        </div>
        <CardSlider />
      </div>
    </section>
  );
};

export default Card;

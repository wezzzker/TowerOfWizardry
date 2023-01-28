import React from 'react';

const MobileMenu = () => {
  return (
    <div className="w-full bg-[#232526] bg-opacity-80 absolute top-[64px] left-0 font-semibold flex justify-center z-50">
      <ul className="text-2xl">
        <li className="p-4 active:border-red-900 border-l-4 active:bg-zinc-800 transition-all border-transparent">
          Товары
        </li>
        <li className="p-4 active:border-red-900 border-l-4 active:bg-zinc-800 transition-all border-transparent">
          Коллекция
        </li>
        <li className="p-4 active:border-red-900 border-l-4 active:bg-zinc-800 transition-all border-transparent">
          Ивенты
        </li>
        <li className="p-4 active:border-red-900 border-l-4 active:bg-zinc-800 transition-all border-transparent">
          Контакты
        </li>
        <li className="p-4 active:border-red-900 border-l-4 active:bg-zinc-800 transition-all border-transparent">
          Профиль
        </li>
        <li className="p-4 active:border-red-900 border-l-4 active:bg-zinc-800 transition-all border-transparent">
          Корзина
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

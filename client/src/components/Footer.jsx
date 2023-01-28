import React from 'react';
import { FaTelegramPlane, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="max-w-[1920px] w-full py-5 mx-auto">
      <div className="max-w-[1480px] mx-auto ">
        <div className="flex gap-8 justify-center">
          <div className="">
            <p className="font-semibold text-xl py-5">Социальные сети</p>
            <div className="flex gap-2">
              <div className="bg-slate-900 rounded-xl p-1 cursor-pointer hover:bg-[#ea3601] hover:shadow-[#ea3601] shadow-lg transition-all">
                <FaTelegramPlane size={30} />
              </div>
              <div className="bg-slate-900 rounded-xl p-1 cursor-pointer hover:bg-[#ea3601] hover:shadow-[#ea3601] shadow-lg transition-all">
                <FaInstagram size={30} />
              </div>
              <div className="bg-slate-900 rounded-xl p-1 cursor-pointer hover:bg-[#ea3601] hover:shadow-[#ea3601] shadow-lg transition-all">
                <FaTwitch size={30} />
              </div>
              <div className="bg-slate-900 rounded-xl p-1 cursor-pointer hover:bg-[#ea3601] hover:shadow-[#ea3601] shadow-lg transition-all">
                <FaTwitter size={30} />
              </div>
              <div className="bg-slate-900 rounded-xl p-1 cursor-pointer hover:bg-[#ea3601] hover:shadow-[#ea3601] shadow-lg transition-all">
                <FaYoutube size={30} />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="font-semibold text-xl py-5 flex-col">ПОИСК</p>
            <div>
              <ul>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors ">
                  Статьи
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors ">
                  Форматы
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors ">
                  Правила
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors ">
                  Подкасты
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="font-semibold text-xl py-5">КОМПАНИЯ</p>
            <div>
              <ul className="flex flex-col ">
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  О нас
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  Карьера
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  Поддержка
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  Подкасты
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="">
            <p className="font-semibold text-xl py-5">БРЕНДЫ</p>
            <div>
              <ul className="flex flex-col ">
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  Dungeons & Dragons
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  Duel Masters
                </li>
                <li className="text-lg cursor-pointer hover:text-[#ea3601] transition-colors">
                  Magic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xl py-10">
        Данные материалы не претендуют на какую либо оригинальность и были взяты с сайта
        <a
          href="https://magic.wizards.com/ru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 px-1">
          magic.wizards.com
        </a>
        , сайт сделан в учебых целях, а не для коммерческого использования
      </p>
    </footer>
  );
};

export default Footer;

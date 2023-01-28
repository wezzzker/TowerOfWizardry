import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { HiShoppingBag, HiMenu } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <header className=" mx-auto w-full border-b border-b-slate-900 border-opacity-20 h-16">
      <nav className="max-w-[1480px] px-4 pt-2 mx-auto flex justify-between items-end h-full">
        <div className="flex items-center text-center text-base font-medium gap-8 h-full">
          <Link to="/">
            <img className="cursor-pointer" width={200} src={logo} alt="" />
          </Link>

          <ul className="gap-4 hidden md:flex  h-full">
            <li className="cursor-pointer hover:text-[#ea3601] hover:border-[#ea3601] border-b-2 border-transparent h-full flex items-center transition-all">
              <Link to="/ivents">Ивенты</Link>
            </li>
            <li className="cursor-pointer hover:text-[#ea3601] hover:border-[#ea3601] border-b-2 border-transparent h-full flex items-center transition-all">
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center text-base font-medium h-full">
          <div className="hidden md:flex items-center gap-8 h-full ">
            <Link to="/cart" className="h-full">
              <div className="cursor-pointer relative hover:text-[#ea3601] hover:border-[#ea3601] border-b-2 border-transparent h-full flex items-center justify-center transition-all">
                <span>
                  <HiShoppingBag size={28} />
                </span>
                <span className="absolute top-[-5px] right-[-10px] bg-[#ea3601] text-black w-[27px] h-[27px] text-xl rounded-full flex justify-center items-center">
                  2
                </span>
              </div>
            </Link>
            <button className="font-bold rounded-md bg-[#642A2A] p-2 border-2 border-[#642A2A] hover:bg-zinc-900 mb-2 transition-all">
              LogIn
            </button>
          </div>
          {menu ? (
            <MdClose className="block md:hidden transition-all" size={40} onClick={handleMenu} />
          ) : (
            <HiMenu className="block md:hidden transition-all" size={40} onClick={handleMenu} />
          )}
        </div>
        {/* MobileMenu */}
        {menu && <MobileMenu />}
      </nav>
    </header>
  );
};

export default Header;

import { Disclosure } from "@headlessui/react";
import { INavProps } from "./Nav.iterface";
import Avatar from "../Avatar/Avatar";

import Bulbasaur from "../../assets/bulbasaur.png";

const Nav: React.FC<INavProps> = ({ navItems }) => {
  return (
    <Disclosure as="nav" className="rounded-t-lg bg-teal-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img className="h-8 w-8" src="/poke.ico" alt="Pokedex" />
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a href={item.link} key={item.link}>
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="/user">
                <Avatar
                  src={Bulbasaur}
                  name="Hi, Bulbasaur!"
                  alt="Bulbasaur pokemon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Nav;

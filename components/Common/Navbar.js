import Image from 'next/image';
import Link from 'next/link';
import { navData } from '../../cms/navbar.data';
import Container from '../Container';
import Navlink from './Navlink';
import cn from 'classnames';
import { useState } from 'react';

export default function Navbar() {
  const [toogle, setToogle] = useState(false);
  return (
    <Container>
      <nav className="flex items-center px-2 md:px-5 xlg:px-0">
        <div className="py-3 xlg:py-0">
          <Link href="/">
            <a className="block w-52">
              <Image
                priority
                width={200}
                height={50}
                src="/images/logo.svg"
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <NavDrawer navData={navData} />
        <div className="ml-auto flex-shrink-0">
          <div className="hidden xlg:block">
            <Link href="/">
              <a className="capitalize px-4 py-3 text-sm text-white font-medium tracking-wider bg-lightGreen border-[1px] border-lightGreen hover:bg-lightOrange hover:border-lightOrange transition duration-1000 inline-block">
                get a quote
              </a>
            </Link>
          </div>
          <button
            className="block xlg:hidden text-5xl text-lightGreen"
            onClick={() => setToogle(!toogle)}
          >
            <span
              className={cn(
                'block w-8 h-[3px] bg-slate-900 transition-all duration-300',
                toogle && 'translate-y-[220%] rotate-[135deg]'
              )}
            ></span>
            <span
              className={cn(
                'block w-8 h-[3px] bg-slate-900 transition-all duration-300 my-1',
                toogle && 'opacity-0'
              )}
            ></span>
            <span
              className={cn(
                'block w-8 h-[3px] bg-slate-900 transition-all duration-300',
                toogle && 'translate-y-[-250%] rotate-[-135deg]'
              )}
            ></span>
          </button>
        </div>
      </nav>
    </Container>
  );
}

function NavDrawer({ navData }) {
  return (
    <ul className="hidden xlg:flex justify-center items-center capitalize w-full">
      {navData.map((n) => (
        <li
          key={n.label}
          className="relative flex items-center group hover:text-lightGreen"
        >
          <Navlink
            label={n.label}
            href={n.path}
            dropdown={n.dropdown && true}
          />
          {n.dropdown && (
            <ul className="absolute left-0 top-full z-20 text-lightOrange hidden group-hover:block">
              {n.dropdown.map((nd) => (
                <li
                  key={nd.label}
                  className="min-w-[200px]"
                >
                  <Link href={nd.path}>
                    <a className="block bg-white hover:bg-lightGreen px-5 py-5 hover:text-white">
                      {nd.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

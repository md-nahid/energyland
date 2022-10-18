import Image from 'next/image';
import Link from 'next/link';
import { navData } from '../../cms/navbar.data';
import Container from '../Container';
import Navlink from './Navlink';
import { Icon } from '@iconify/react';

export default function Navbar() {
  return (
    <Container>
      <nav className="flex items-center px-5 xlg:px-0">
        <div className="py-3 xlg:py-0">
          <Link href="/">
            <a className="block w-52">
              <Image priority width={200} height={50} src="/images/logo.svg" alt="logo" />
            </a>
          </Link>
        </div>
        <ul className="hidden xlg:flex items-center capitalize">
          {navData.map((n) => (
            <li key={n.label} className="relative flex items-center group hover:text-lightGreen">
              <Navlink label={n.label} href={n.path} dropdown={n.dropdown && true} />
              {n.dropdown && (
                <ul className="absolute left-0 top-full z-20 text-lightOrange hidden group-hover:block">
                  {n.dropdown.map((nd) => (
                    <li key={nd.label} className="min-w-[200px]">
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
        <div className="ml-auto">
          <div className="hidden xlg:block">
            <Link href="/">
              <a className="capitalize px-4 py-3 text-sm text-white font-medium tracking-wider bg-lightGreen border-[1px] border-lightGreen hover:bg-lightOrange hover:border-lightOrange transition duration-1000 inline-block">
                get a quote
              </a>
            </Link>
          </div>
          <button className="block xlg:hidden text-5xl text-lightGreen">
            <Icon icon="heroicons:bars-3-solid" />
          </button>
        </div>
      </nav>
    </Container>
  );
}

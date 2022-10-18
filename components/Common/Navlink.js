import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '@iconify/react';

export default function Navlink({ href, label, dropdown }) {
  const router = useRouter();
  const [activeClass, setActiveClass] = useState('');
  useEffect(() => {
    if (router.asPath === href) {
      setActiveClass('text-lightGreen');
    } else {
      setActiveClass('');
    }
  }, [router.asPath, href]);
  return (
    <Link href={href}>
      <a className={cn('px-5 py-10 flex items-center', activeClass && activeClass)}>
        {label}
        {dropdown && (
          <span className="pl-1">
            <Icon icon="akar-icons:chevron-down" />
          </span>
        )}
      </a>
    </Link>
  );
}

Navlink.propTypes = {
  href: PropTypes.string.isRequired,
};

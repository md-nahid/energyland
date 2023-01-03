import Link from 'next/link';

export default function LinkButtonTwo({ href, label }) {
  return (
    <Link href={href}>
      <a className="px-3 py-3 md:py-5 md:px-8 text-sm text-white font-medium tracking-wider bg-transparent border-[1px] border-white hover:bg-white transition duration-300 hover:text-lightOrange block w-full text-center">
        {label}
      </a>
    </Link>
  );
}

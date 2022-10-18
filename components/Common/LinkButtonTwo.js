import Link from 'next/link';

export default function LinkButtonTwo({ href, label }) {
  return (
    <Link href={href}>
      <a className="px-8 py-5 text-lg text-white font-medium tracking-wider bg-transparent border-[1px] border-white hover:bg-white transition duration-1000 hover:text-lightOrange block w-full text-center">
        {label}
      </a>
    </Link>
  );
}

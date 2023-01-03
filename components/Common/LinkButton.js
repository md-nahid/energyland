import Link from 'next/link';

export default function LinkButton({ href, label }) {
  return (
    <Link href={href}>
      <a className="capitalize px-3 py-3 md:py-5 md:px-10 text-sm text-white font-medium tracking-wider bg-lightGreen border-[1px] border-lightGreen hover:bg-lightOrange hover:border-lightOrange transition duration-300 inline-block w-full text-center">
        {label}
      </a>
    </Link>
  );
}

import Link from 'next/link';
export default function LinkButton({ href, label }) {
  return (
    <Link href={href}>
      <a className="capitalize px-8 py-5 text-lg text-white font-medium tracking-wider bg-lightGreen border-[1px] border-lightGreen hover:bg-lightOrange hover:border-lightOrange transition duration-1000 inline-block w-full sm:max-w-xs text-center">
        {label}
      </a>
    </Link>
  );
}

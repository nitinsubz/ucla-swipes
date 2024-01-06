import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <main className='flex items-center justify-between bg-indigo-400 py-5 lg:px-6'>
      <div className='pl-5 text-xl text-white'>UCLA Swipes</div>
      <div className='flex items-center pr-5 text-xl'>
        <span className='hidden pr-4 text-white md:flex'>Presented by</span>
        <Link href='https://www.uclabv.com' target='_blank'>
          <Image
            src='/BVSticker.png'
            width={120}
            height={0}
            alt='Bruin Ventures'
            className='rounded-md bg-white p-3'
          ></Image>
        </Link>
      </div>
    </main>
  );
};

export default Navbar;

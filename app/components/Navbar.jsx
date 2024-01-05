import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <main className='flex items-center justify-between rounded-lg bg-gradient-to-r from-indigo-500 px-20 py-5'>
      <div className='pl-5 text-xl text-white'>UCLA Swipes</div>
      <div className='flex items-center pr-5 text-xl'>
        <span className='pr-4 text-black'>Presented by</span>
        <Link href='https://www.uclabv.com' target='_blank'>
          <Image
            src='/BVSticker.png'
            width={100}
            height={0}
            alt='Bruin Ventures'
          ></Image>
        </Link>
      </div>
    </main>
  );
};

export default Navbar;

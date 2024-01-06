const Swiper = ({ Category, swipes, exception }) => {
  return (
    <div className='my-5 w-96 rounded-xl bg-white shadow-md'>
      <div className='md:flex'>
        <div className='p-8'>
          <div className='text-lg font-semibold uppercase tracking-wide text-indigo-500'>
            {Category}
          </div>
          <a className='mb-10 mt-1 block text-4xl font-medium leading-tight text-black'>
            {swipes} SWIPES
          </a>
          {exception !== '' && (
            <p className='mt-3 rounded-lg bg-red-100 p-3 text-gray-500'>
              {' '}
              {exception}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Swiper;

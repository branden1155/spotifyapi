const Albums = ({ search }) => {
    return (
      //Albums
      <div className="">
        <div className='mx-4 shadow-lg hover:opacity-70'>
          <div className="max-w-xs hover:max-w-sm max-h-70 my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500 ease-in-out">
            <a href={search.albumUrl}>
              <img className="rounded-t-lg" src={search.albumImage} alt="" />
            </a>
            <div className="flex justify-center break-words overflow-hidden items-center bg-[#191414] rounded-sm p-2 h-40">
              <a href={search.albumUrl}>
                <h5 className="inline-flex mb-2 p-2 text-xl font-bold tracking-tight text-[#1db954] uppercase dark:text-white">{search.album}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Albums;
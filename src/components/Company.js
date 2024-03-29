const Company = () => {
  return (
    <div className="w-[100%] max-w-[1368px] py-14 px-8">
      <h2 className="text-rose-600 text-3xl font-light lg:pb-3">Company</h2>
      <div className="flex flex-col justify-center gap-12 lg:flex-row">
        <div className="flex flex-col gap-12 lg:w-6/12 lg:pr-24">
          <div>
            <h1 className="text-black text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-1 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full">
              <p>Get to know us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-6/12">
          <p className="text-black font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque dignissim enim sit amet. Ultrices in iaculis nunc sed
            augue lacus viverra. Dignissim convallis aenean et tortor at risus
            viverra adipiscing. Metus dictum at tempor commodo. Feugiat nibh sed
            pulvinar proin gravida hendrerit lectus a. Lorem donec massa sapien
            faucibus et molestie. Sit amet purus gravida quis blandit turpis.
            Tortor aliquam nulla facilisi cras fermentum odio eu feugiat
            pretium. Risus viverra adipiscing at in tellus integer feugiat
            scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;

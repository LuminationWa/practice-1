const Main = () => {
  return (
    <main className="h-screen bg-gray-900 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="color-white text-5xl text-center font-bold">
          Elephant of Alabama <br />
          Cat
        </h1>
        <div className="flex justify-center">
          <button className="flex items-center gap-1 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full">
            <p>All the services</p>
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
    </main>
  );
};

export default Main;

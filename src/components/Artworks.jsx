import ethlogo from "../assets/ethlogo.png";
const Artworks = () => {
  const BASE_URI = `https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg`;
  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient font-bold uppercase text-2xl">Artworks</h4>
        <div className="flex flex-wrap justify-start item-center mt-4">
          {Array(6)
            .fill()
            .map((nft, index) => (
              <div
                key={index}
                className={`relative shadow-xl shadow-black p3 bg-white rounded-lg 
                  w-64 h-64 object-contain bg-no-repeat bg-cover 
                  overflow-hidden mr-2 mb-2 cursor-pointer transition-all duration-75 
                  delay-100 hover:shadow-[#bd255f]`}
                style={{ backgroundImage: `url(${BASE_URI})` }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 flex : ;
                    justify-between items-center label-gradient p-2 w-full
                  text-white text-sm"
                >
                  <p>NFT #1</p>
                  <div className="flex justify-center items-center space-x-2">
                    <img
                      className="w-5 cursor-pointer"
                      src={ethlogo}
                      alt=""
                      srcset=""
                    />
                    3.4 ETH
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center mx-auto mt-4">
          <button className="shadow-lg text-white shadow-black bg-[#e32970] hover:bg-[#bd255f] rounded-full cursos-pointer p-2 my-4">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artworks;

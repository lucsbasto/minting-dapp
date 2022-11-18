import github_icon from "../assets/github_icon.png";
import facebook_icon from "../assets/facebook_icon.png";
import linkedin_icon from "../assets/linkedIn_icon.png";
import twitter_icon from "../assets/twitter_icon.png";

const Hero = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center mx-=auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          Minting Dapp <br />
          <span className="text-gradient">NFTs</span> Collection
        </h1>

        <p className="text-white font-semibold text-sm mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <button
          className="shadow-xl shadow-black text-white 
          bg-[#e32970] hover:bg-[#bd255f] p-3 rounded-full my-4"
        >
          Mint Now
        </button>

        <a
          className="flex justify-center space-x-2 items-center text-white
          bg-[#000000ad] rounded-full my-4 p-3"
          href="https://github.com/lucsbasto/minting-dapp"
          target="_blank"
        >
          <img
            src="https://avatars.githubusercontent.com/u/25485855?v=4"
            alt="github"
            className="h-12 w-12 object-contain rounded-full"
          />
          <div className="flex flex-col font-semibold text-white text-sm p-1">
            <span>0x0e7...8483</span>
            <span className="text-[#e32970]">Lucas Bastos</span>
          </div>
        </a>

        <p className="text-white text-sm font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Eum eos labore omnis assumenda iusto facere, accusantium voluptate
          officiis reprehenderit? <br />
          Recusandae non aperiam quisquam molestiae incidunt porro dignissimos?
        </p>
        <ul className="flex flex-row justify-center space-x-4 items-center  my-10">
          <a
            className="bg-white hover:scale-150 hover:bg-[#bd255f]  transition-all duration-75 delay-75 rounded-full mx-2"
            href="#"
            target="_blank"
          >
            <img className="w-10 h-10 m-0.5" src={github_icon} alt="GitHub" />
          </a>
          <a
            className="bg-white hover:scale-150 hover:bg-[#bd255f]  transition-all duration-75 delay-75 rounded-full mx-2"
            href="#"
            target="_blank"
          >
            <img className="w-10 h-10" src={facebook_icon} alt="Facebook" />
          </a>
          <a
            className="bg-white hover:scale-150 hover:bg-[#bd255f]  transition-all duration-75 delay-75 rounded-full mx-2"
            href="#"
            target="_blank"
          >
            <img className="w-10 h-10 m-0.5" src={twitter_icon} alt="Twitter" />
          </a>
          <a
            className="bg-white hover:scale-150 hover:bg-[#bd255f]  transition-all duration-75 delay-75 rounded-full mx-2"
            href="#"
            target="_blank"
          >
            <img
              className="w-10 h-10 m-0.5"
              src={linkedin_icon}
              alt="LinkedIn"
            />
          </a>
        </ul>
        <div
          className="shadow-xl shadow-black flex w-20 h-20 justify-center 
            items-center rounded-full bg-white cursor-pointer p-2 hover:bg-[#bd255f]
            hover:text-white ml-2 text-black font-bold"
        >
          <span className="font-bold text-xl">99</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

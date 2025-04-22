const Header = () => {
  return (
    <div className="absolute h-[68px] w-full flex gap items-center gap-8 px-2 py-1 bg-gradient-to-b from-black">
      <img
        className=" h-full"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {/* <ul className="flex p-0 m-0 gap-4 flex gap items-center">
        <li>Home</li>
        <li>netflixGPT</li>
      </ul> */}
    </div>
  );
};

export default Header;

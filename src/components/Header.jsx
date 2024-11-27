import logo from '../assets/logo.png';
const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-2 py-3">
      <div>
        <img className="w-80" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
    </div>
  );
};

export default Header;
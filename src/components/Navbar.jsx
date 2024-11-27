import { Link } from 'react-router-dom';
import user from '../assets/user.png';
const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-bold">
      <div></div>
      <div className="space-x-6 text-gray-600">
        <Link to={'/'}>Home</Link>
        <Link to={'/career'}>Career</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <div className="flex items-center gap-3">
        <img src={user} alt="" />
        <button className="px-4 py-1 text-white bg-slate-900">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

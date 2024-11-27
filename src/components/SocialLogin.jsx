import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="space-y-2">
        <button className="btn w-full">
          <FaGoogle /> Login with google
        </button>
        <button className="btn w-full">
          <FaGithub /> Login with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

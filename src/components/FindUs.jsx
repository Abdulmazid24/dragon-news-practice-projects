import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find us</h2>
      <div>
        <div className="join join-vertical w-full  *:bg-base-100 ">
          <button className="btn join-item justify-start">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn join-item justify-start">
            <FaTwitter />
            Twitter
          </button>
          <button className="btn join-item justify-start">
            <FaInstagram />
            instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

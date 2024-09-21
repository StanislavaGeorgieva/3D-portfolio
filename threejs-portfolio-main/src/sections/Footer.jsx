import React from 'react';

const Footer = () => {
  return (
    <footer className="c-space pt-3 pb-2 border-t border-black-300 flex justify-center items-center bg-black">
      <div className="text-white-500 flex gap-4"> {/* Adjusted gap for better spacing */}
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
        </div>
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

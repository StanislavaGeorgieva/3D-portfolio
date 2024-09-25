import React from 'react';


const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="inline-block neon-arrow">
    <path d="M12 2l-1.41 1.41L16.17 8H2v2h14.17l-5.58 5.59L12 22l10-10z" fill="currentColor" />
  </svg>
);
const Contact = () => {
  return (
    <section id="contact" className='c-space my-20'>
      <div className="flex flex-col sm:flex-row gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 border border-black-300 bg-black-200 rounded-lg">
        <div className='contact-container p-5 sm:w-1/2 flex flex-col'>
          <h3 className='head-text text-white'>Let's talk</h3>
          <p className='text-lg text-white-600 mt-3'>
            I'm always open to new projects, collaborations, or employment opportunities. Let's connect!
          </p>
          <div className="mt-8 space-y-4 flex flex-col">
            <p className="text-white-600 flex items-center">
              <ArrowIcon />
              If you want to reach me, here's my 
              <a href="https://www.linkedin.com/in/stanislava-georgieva-71686128a/" target="_blank" rel="noopener noreferrer" className="link-linkedin ml-1">LinkedIn</a>.
            </p>
            <p className="text-white-600 flex items-center">
              <ArrowIcon />
              If you’d like to see my code, check out my
              <a href="https://github.com/StanislavaGeorgieva" target="_blank" rel="noopener noreferrer" className="link-github ml-1">GitHub</a>.
            </p>
            <p className="text-white-600 flex items-center">
              <ArrowIcon />
              If you’d like to take a look at my resume, you can
              <a href="/assets/my-cv.pdf" download className="link-download ml-1">download it here</a>.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
  <a href="mailto:miss_stanislava@yahoo.com">
    <img 
      src="assets/white-icon.png" 
      alt="icon" 
      className="w-full h-[150px] sm:h-[276px] object-contain rounded-full"
    />
  </a>
</div>
      </div>
    </section>
  );
};

export default Contact;



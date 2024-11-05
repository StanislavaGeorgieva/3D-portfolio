import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [morphed, setMorphed] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText('miss_stanislava@yahoo.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphed(prev => !prev); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text text-center">About Me:</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={morphed ? "assets/space1.jpg" : "assets/pic0.jpg"}
              alt="grid-20"
              className={`w-full sm:h-[276px] h-fit object-contain transition-all duration-1000 ${morphed ? 'morphing-img' : ''}`} 
            />
            <div>
              <p className="grid-headtext">Hi, I’m Stanislava</p>
              <p className="grid-subtext">
                I'm a Front-End Developer with a passion for creating beautiful and functional user experiences — basically, making the internet look good while keeping it useful! I'm constantly learning and leveling up my skills to stay on top of the latest tech trends, because who wants to fall behind in the race of shiny new frameworks?
              </p>
            </div>
          </div>
        </div>
      

        {/* Other sections remain the same */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techstack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, and more — basically, if it's got a tag or a bracket, I've probably tangled with it. I'm always excited to learn new things and expand my skill set, because who doesn't love adding more acronyms to their résumé?
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl={'//unpkg.com/three-globe/example/img/night-sky.png'}
                labelsData={[
                  { lat: 42.4975, lng: 27.4746, text: 'Burgas, Bulgaria', color: 'white', size: 15 }
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Burgas, Bulgaria (yes, that's a real place!), and I'm open to remote work worldwide. Go ahead, take a peek at the globe — my hometown's chilling by the Black Sea, probably sunbathing!</p>
              <a href="#contact" className="w-fit">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Passion for Coding Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/hacker.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn’t just my profession—it’s my passion (and maybe a borderline obsession). I enjoy exploring new technologies and constantly leveling up my skills, because there’s always another bug waiting to be squashed or a shiny new tool to try.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/contact.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me at</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">miss_stanislava@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

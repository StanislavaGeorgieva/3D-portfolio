import React from 'react'
import Globe from 'react-globe.gl'



const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid20.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className='grid-headtext'>Hi , I'm Stanislava</p>
              <p className='grid-subtext'>Passionate and detail-oriented Junior Front-End Developer with a strong foundation in building responsive and dynamic web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js.  </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'><div className='grid-container'><div className='rouded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
          <Globe
          height={326}
          width={326}
          backgroundColor='rgba(0,0,0,0)'
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl={'//unpkg.com/three-globe/example/img/earth-topology.png'}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelsData={[{ lat: 42.5048, lng: 27.4626, label: 'Burgas, Bulgaria' , text: 'My hometown' , color: 'white' , size: 20}]}
          />
          </div>
          <div>
            <p className='grid-headtext'>I work remotely across most timezones.</p>
            <p className='grid-subtext'>I'm based in Bulgaria , with remote work available </p>
          </div>
          </div></div>
      </div>

    </section>
  )
}

export default About

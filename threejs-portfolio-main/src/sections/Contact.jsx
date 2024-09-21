import React from 'react'

const Contact = () => {
  
  return (
    <section className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal-bg' className='absolute inset-0 min-h-screen'/>
        <div className='contact-container'>
        <h3 className='head-text'>Let's talk</h3>
        <p className='text-lg text-white-600 mt-3'>
                    I'm always open to new projects, collaborations or employment opportunities. Let's connect!
        </p>
        </div>
      </div>
      
    </section>
  )
}

export default Contact

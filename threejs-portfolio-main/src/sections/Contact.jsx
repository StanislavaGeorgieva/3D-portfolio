import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        'service_oo6rnki',
        'template_ly9r26n',
        {
          from_name: form.name,
          to_name: 'Sunny',
          from_email: form.email,
          to_email: 'stanislavageorgieva1983@gmail.com',
          message: form.message
        },
        'kYntOaWz6SG3aCstk' 
      );

      setForm({ 
        name: '',
         email: '', 
         message: '' });

      setLoading(false);
      alert('Message sent successfully!');
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('An error occurred. Please try again later.');
    }
  }; 

  return (
    <section className='c-space my-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/assets/terminal.png' alt='terminal-bg' className='absolute inset-0 min-h-screen' />
        <div className='contact-container'>
          <h3 className='head-text'>Let's talk</h3>
          <p className='text-lg text-white-600 mt-3'>
            I'm always open to new projects, collaborations, or employment opportunities. Let's connect!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your full name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your email"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi Sunny, I would like to connect with you..."
              />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

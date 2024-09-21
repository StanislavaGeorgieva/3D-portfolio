import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import Navbar from './sections/Navbar.jsx';
import Project from './sections/Project.jsx';


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Project />
      
      <Contact />
    </main>
  );
};

export default App;

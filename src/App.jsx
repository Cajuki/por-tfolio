import Nav        from './components/Nav.jsx';
import Hero       from './components/Hero.jsx';
import Projects   from './components/Projects.jsx';
import About      from './components/About.jsx';
import Skills     from './components/Skills.jsx';
import Journey    from './components/Journey.jsx';
import Services   from './components/Services.jsx';
import Contact    from './components/Contact.jsx';
import Footer     from './components/Footer.jsx';

export default function App() {
  return (
    <div
      style={{
        background:
          'radial-gradient(circle at top left, rgba(16,185,129,0.14), transparent 30%), linear-gradient(180deg, #171B1E 0%, #1A1E22 100%)',
        minHeight: '100vh',
      }}
    >
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

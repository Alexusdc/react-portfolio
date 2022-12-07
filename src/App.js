import React from 'react';
import Nav from './components/nav';
import About from './components/about';
import Project from './components/project';
import Footer from './components/footer';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />       
          <Project /> 
          <Footer />
      </main>
    </div>
  );
}

export default App;
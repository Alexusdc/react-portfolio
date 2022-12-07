import React from 'react';
import Nav from './src/components/nav';
import About from './src/components/about';
import Project from './src/components/project';
import Footer from './src/components/footer';

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
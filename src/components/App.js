function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;

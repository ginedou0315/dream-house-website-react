import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;

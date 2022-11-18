import { Header, Hero, Artworks } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
    </div>
  );
};

export default App;

import { Header, Hero, Artworks, Footer } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Footer />
    </div>
  );
};

export default App;

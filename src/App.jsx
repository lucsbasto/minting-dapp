import { Header, Hero, Artworks, Footer, Alert } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Footer />
      <Alert />
    </div>
  );
};

export default App;

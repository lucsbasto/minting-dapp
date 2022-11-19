import { Header, Hero, Artworks, Footer, Alert } from "./components";
import Loading from "./components/Loading";

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
      <Loading />
    </div>
  );
};

export default App;

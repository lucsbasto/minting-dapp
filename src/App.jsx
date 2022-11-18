import { Header, Hero } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;

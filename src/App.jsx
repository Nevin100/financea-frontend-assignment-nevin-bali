import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Banner.jsx";
import Finances from "./Components/Finances.jsx";

const App = () => {
  return (
    <div className="md:mx-30  mb-1 px-4 md:px-10">
      <Navbar />
      <Banner />
      <Finances />
    </div>
  );
};

export default App;

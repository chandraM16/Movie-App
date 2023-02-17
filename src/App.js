import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Movie from "./Components/Movies/Movie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Movie />
    </div>
  );
}

export default App;

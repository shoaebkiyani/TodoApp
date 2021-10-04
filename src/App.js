import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header title={"Todos App"} />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;

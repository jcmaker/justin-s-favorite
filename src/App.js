import "./App.css";
import YearRow from "./screens/YearRow";
import Footer from "./screens/Footer";
import favoriteData from "./data/favoriteData.json";

function App() {
  return (
    <div className="App">
      <YearRow data={favoriteData.main} />
      <Footer />
    </div>
  );
}

export default App;

import Clock from "./components/Clock.js";
import "./styles/index.scss";

const cities = [
  {
    region: "Australia",
    city: "Sydney",
  },
  {
    region: "Asia",
    city: "Tokyo",
  },
  {
    region: "Europe",
    city: "London",
  },
  {
    region: "America",
    city: "New_York",
  },
];

function App() {
  return (
    <div className="App">
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <Clock region={city.region} city={city.city} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

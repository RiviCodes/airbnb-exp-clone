import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import peopleData from "./peopleData";

function App() {
  const cards = peopleData.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        /* {...item} Destructuring the object works too, but it's a bit obscure */
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </>
  );
}

export default App;

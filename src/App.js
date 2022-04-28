import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import peopleData from "./peopleData";

function App() {
  const cards = peopleData.map((item) => {
    return (
      <Card
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
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

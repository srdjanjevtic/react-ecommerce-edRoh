import MainCarousel from "../components/MainCarousel";
import Subscribe from "../components/Subscribe";
import ShoppingList from "./ShoppingList";

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;

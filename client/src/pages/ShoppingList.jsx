import { Tabs, useMediaQuery } from "@mui/material";
// import Tab from "@mui/material";
// import Item from "../components/Item";
import { setItems } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleChange = (event, newValue) => setValue(newValue);

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?popultate=image",
      {
        method: "GET",
      }
    );
    const data = await items.json();
    dispatch(setItems(data.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  return <div>shopping list</div>;
};

export default ShoppingList;

import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import Item from "../components/Item";
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
      "http://localhost:1337/api/items?populate=image",
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

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <strong>Products</strong>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{ m: "25px", "& .MuiTabs-flexContainer": { flexWrap: "wrap" } }}
      >
        <Tab label="ALL" value="all"></Tab>
        <Tab label="NEW ARRIVALS" value="newArrivals"></Tab>
        <Tab label="TOP RATED" value="topRated"></Tab>
        <Tab label="BEST SELLERS" value="bestSellers"></Tab>
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 275px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}></Item>
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;

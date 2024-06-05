import { Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Item List
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e?.target?.value)}
      />
    <Grid container spacing={3}>
      {filteredItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <ListCard
            title={item.title}
            description={item.body}
          />
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default ItemList;

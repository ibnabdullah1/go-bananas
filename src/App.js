import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            GoBananas App
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<ItemList />} />
      </Routes>
    </Router>
  );
};

export default App;

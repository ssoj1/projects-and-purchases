// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import ItemList from './ItemList';
import ItemDetail from "./ItemDetail";
import AddForm from "./AddForm";
import { fetchItems, addItem as addItemApi } from "./Api";
import { Route, Routes } from "react-router-dom";
// Switch is now called ROUTES
import slugify from "slugify";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allItems, setAllItems] = useState({
    projects: [],
    purchases: []
  });

  console.log("*App ", {allItems})

  /** Load data from backend. */

  useEffect(function() {
    async function getAllItems() {
      const projects = await fetchItems("projects");
      const purchases = await fetchItems("purchases");
      setAllItems({ projects, purchases });
      setIsLoading(false);
    }

    getAllItems();
  }, []);

    /** Call API to add item of type "projects" or "purchases"; update state */

    async function addItem(type, { title, details, image_url }) {
      let id = slugify(title, { lower: true });
      let objData = { id, title, details, image_url };
      await addItemApi(type, objData);
      setAllItems(m => ({
        ...m,
        [type]: [...m[type], objData]
      }));
    }


  return (
    <div className="App">
      <NavBar /> 
      <main> 
        <Routes> 
          <Route exact path='/' element={<Home />} />

          <Route exact path="/projects" element={<ItemList items={allItems.projects} title="Projects" />} />

          <Route exact path="/purchases" element={<ItemList items={allItems.purchases} title="Purchases" />} />

          <Route path="/projects/:id" element={<ItemDetail items={allItems.projects} cantFind="/projects" />} />

          <Route path="/purchases/:id" element={<ItemDetail items={allItems.purchases} cantFind="/purchases" />} />

          <Route path="/add" element={<AddForm addItem={addItem} />} />

          {/* <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
          </Route> */}

        </Routes>
      </main> 
    </div>
  );
}

export default App;

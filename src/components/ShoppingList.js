import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items ,setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchKey, setSearchKey] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchKey=== "") return true;
    if (selectedCategory === "All" && searchKey !== "") return item.name.match(searchKey)
    if(item.category === selectedCategory && searchKey=== "") return item.category === selectedCategory;
  
    return item.category === selectedCategory && item.name.match(searchKey);
  });

  const handleSearch=(e)=>{
    setSearchKey(e.target.value);
  }

  const onItemFormSubmit=(item)=>{
    
    setItems(prev => [...prev,item]);

  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={searchKey}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

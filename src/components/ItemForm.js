import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName , setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const handleCategory =(e)=>{
    setItemCategory(e.target.value);
  }
  return (
    <form className="NewItem" onSubmit={(e)=>{ e.preventDefault(); onItemFormSubmit({
      id: uuid(),
    name: itemName,
    category: itemCategory,
    })}}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e)=>setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

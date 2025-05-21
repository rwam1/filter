import React, { useState } from "react";

const App = () => {
  const productData = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Shirt", category: "Clothing", price: 29 },
    { id: 3, name: "Phone", category: "Electronics", price: 699 },
    { id: 4, name: "Book", category: "Stationery", price: 15 },
    { id: 5, name: "Jeans", category: "Clothing", price: 45 },
  ];
  const [text, setText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [order, setOrder] =useState('asc')
  const filterProduct = productData
    .filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    )
    .filter((product) =>
      categoryFilter === "all" ? true : product.category === categoryFilter
    )
    .sort((a,b)=>  order ==='asc'? a.price -b.price: b.price-a.price )


  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        name=""
        id=""
      >
        <option value="all">all</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Stationery">Stationery</option>
      </select>
      <br />

      <select value={order} onChange={ (e)=>setOrder(e.target.value)} name="" id="">
        <option value="asc">low to high</option>
        <option value="dsc"> high to low</option>
      </select>
      <ul>
        {filterProduct.length > 0
          ? filterProduct.map((item) => {
              return (
                <li>{`${item.name}  - ${item.category} -${item.price}`}</li>
              );
            })
          : "no data"}
      </ul>
    </div>
  );
};

export default App;

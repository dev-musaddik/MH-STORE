import './App.css';
import Card from './Component/Card/Card';
import Navbar from './Component/Navbar/Navbar';
import Books from "./Component/BooksApi.js";

import { useState } from 'react';
function App() {
  let updateList = [...new Set(Books.map((e) => e.category)), "All"]; ///// "..." spread operator


  const [api, setApi] = useState(Books);
  const [list, setList] = useState(updateList);


  const filterMy = (category) => {
    if (category === "All") {
      setApi(Books)
      return
    }
    let newList = Books.filter((ele) => {


      return ele.category === category;

    });
    setApi(newList);


  }


  return (
    <>
    
      

      <Navbar datas={updateList} filterFunction={filterMy} ></Navbar>
      
      <Card Data={api}></Card>

      


    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Fetchdata() {
  const [data, setData] = useState([]);
  //   useEffect(() => {
    //fetch("https://openlibrary.org/search.json?q=javascript")
    // .then(res=>res.json())
    //.then(data=>setData(data))
    //.catch(err=>console.log(err));

  useEffect(() => {
    axios.get("https://openlibrary.org/search.json?q=javascript")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
      <h2>All Books</h2>
    </div>
  );
}
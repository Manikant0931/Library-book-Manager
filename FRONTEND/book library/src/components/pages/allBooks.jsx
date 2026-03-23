import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookCard from './BookCard';

export default function AllBooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://openlibrary.org/search.json?q=javascript")
      .then((res) => {
        setData(res.data.docs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Books</h2>
      <div className="row">
        {data.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

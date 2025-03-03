import React, { useState, useEffect } from 'react';
import'./App.css'

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('./assets/Json/data.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setBooks(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData();
    }, []);

  return (
    <div className="App">
      <header>
        <table class="book-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
          {books.map((books, index) => (
            <tr key={index}>
              <td>{books.id}</td>
              <td>{books.title}</td>
              <td>{books.author}</td>
              <td>{books.year}</td>
              <td>{books.genre}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
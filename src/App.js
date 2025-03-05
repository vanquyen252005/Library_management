import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    id: '',
    title: '',
    author: '',
    year: '',
    genre: ''
  });
  const [showForm, setShowForm] = useState(false); // State để kiểm soát hiển thị form

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

  // Hàm xử lý khi nhập dữ liệu vào form
  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  // Hàm thêm sách mới
  const addBook = () => {
    if (!newBook.id || !newBook.title || !newBook.author || !newBook.year || !newBook.genre) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setBooks([...books, newBook]); // Thêm sách vào danh sách
    setNewBook({ id: '', title: '', author: '', year: '', genre: '' }); // Reset form
    setShowForm(false); // Ẩn form sau khi thêm sách
  };

  return (
    <div className="App">
      <header>
        <h2>Book List</h2>
        <table className="book-table">
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
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Nút mở form */}
        <button className="open-form-btn" onClick={() => setShowForm(true)}>Add Book</button>

        {/* Form nhập liệu, chỉ hiển thị khi showForm === true */}
        {showForm && (
          <div className="add-book-form">
            <h3>Add a New Book</h3>
            <input type="text" name="id" placeholder="ID" value={newBook.id} onChange={handleInputChange} />
            <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleInputChange} />
            <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleInputChange} />
            <input type="text" name="year" placeholder="Year" value={newBook.year} onChange={handleInputChange} />
            <input type="text" name="genre" placeholder="Genre" value={newBook.genre} onChange={handleInputChange} />
            <div className="form-buttons">
              <button onClick={addBook}>Save</button>
              <button className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

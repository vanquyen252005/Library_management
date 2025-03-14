import { useState, useEffect } from "react";
import '../../App.css'
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/assets/Json/user.json") // Đường dẫn đến file JSON trong public/
      .then((response) => response.json())
      .then((data) => setUsers(data.borrowers)) // Lấy danh sách người mượn
      .catch((error) => console.error("Lỗi tải dữ liệu:", error));
  }, []);

  return (
    <div>
      <h1>Danh sách người mượn sách</h1>
      <table className="UserTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Sách đã mượn</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <ul>
                  {user.booksBorrowed.map((book, index) => (
                    <li key={index}>
                      {book.title} (Mượn: {book.borrowDate} - Trả: {book.returnDate})
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;

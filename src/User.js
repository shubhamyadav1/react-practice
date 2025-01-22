import { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setUsers(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        {users.map((user) => {
          return <h3>{user.name}</h3>;
        })}
      </div>
    </div>
  );
};

export default User;

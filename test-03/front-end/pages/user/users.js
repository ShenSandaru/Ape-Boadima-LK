import { useState, useEffect } from 'react';
import { getAllUsers } from '../../lib/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users. Please try again later.');
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

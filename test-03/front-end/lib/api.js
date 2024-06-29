const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllUsers() {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function createUser(userData) {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
}

// Add other API functions as needed

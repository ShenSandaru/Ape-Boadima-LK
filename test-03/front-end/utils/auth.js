// utils/auth.js

export async function loginUser({ email, password }) {
    // Implement your login logic here
    // This is a placeholder implementation
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ success: true, user: { email } });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  }
  
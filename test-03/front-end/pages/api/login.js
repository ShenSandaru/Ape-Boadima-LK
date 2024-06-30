export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Implement your login logic here
        // For example, check if the email and password are valid
        const { email, password } = req.body;
        if (email === 'admin@example.com' && password === 'password') {
          // If login is successful, return a success response
          res.status(200).json({ success: true });
        } else {
          // If login fails, return an error response
          res.status(401).json({ success: false, error: 'Invalid email or password' });
        }
      } catch (error) {
        res.status(500).json({ success: false, error: 'Internal server error' });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed' });
    }
  }
  
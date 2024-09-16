const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Registration successful', data);
          // Handle successful registration (e.g., redirect or show a message)
        } else {
          const errorData = await response.json();
          setErrors({ ...errors, server: errorData.message });
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      setErrors(validationErrors);
      if (onError) {
        onError(validationErrors);
      }
    }
  };
  
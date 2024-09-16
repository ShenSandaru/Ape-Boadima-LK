const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = new FormData();
    formData.append('title', adData.title);
    formData.append('description', adData.description);
    formData.append('price', adData.price);
    formData.append('category', adData.category);
    formData.append('location', adData.location);
    formData.append('contactInfo', adData.contactInfo);
    formData.append('bedrooms', adData.bedrooms);
    formData.append('bathrooms', adData.bathrooms);
    formData.append('area', adData.area);
    formData.append('amenities', adData.amenities.join(','));
    formData.append('available', adData.available);
    formData.append('photos', adData.photos);
    formData.append('featured', adData.featured);
  
    try {
      const response = await fetch('/ads', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setIsSubmitting(false);
        setShowConfirmation(true);
        setTimeout(() => {
          router.push('/ads');
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert('Error creating ad');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Error creating ad');
    }
  };
  
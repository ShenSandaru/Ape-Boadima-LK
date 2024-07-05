import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/pages/postAd.module.css';

const PostAdPage = () => {
  const router = useRouter();
  const [adData, setAdData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: '',
    contactInfo: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    amenities: [],
    available: '',
    photos: null,
    featured: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      if (name === 'featured') {
        setAdData(prevState => ({ ...prevState, [name]: checked }));
      } else {
        // For amenities
        setAdData(prevState => ({
          ...prevState,
          amenities: checked
            ? [...prevState.amenities, value]
            : prevState.amenities.filter(item => item !== value)
        }));
      }
    } else if (type === 'file') {
      setAdData(prevState => ({ ...prevState, [name]: files[0] }));
    } else {
      setAdData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      // Redirect after 3 seconds
      setTimeout(() => {
        router.push('/ads');  // Redirect to ads listing page
      }, 3000);
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <div className={`${styles.container} max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg`}>
        <h1 className={`${styles.title} text-4xl font-bold text-center text-green-600 mb-10`}>Ad Posted Successfully!</h1>
        <p className="text-center text-lg">Your ad has been submitted and will be reviewed shortly.</p>
        <p className="text-center mt-4">Redirecting to ads page...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Post an Ad | Apebodima</title>
        <meta name="description" content="Post your accommodation ad on Apebodima - Find your perfect place" />
      </Head>
      <div className={`${styles.container} max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg`}>
        <h1 className={`${styles.title} text-4xl font-bold text-center text-gray-800 mb-10`}>Post Your Ad</h1>
        <form onSubmit={handleSubmit} className={`${styles.form} space-y-8`} encType="multipart/form-data">
          <div className={styles.formGroup}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={adData.title}
              onChange={handleChange}
              required
              className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              placeholder="Enter a catchy title for your ad"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={adData.description}
              onChange={handleChange}
              required
              rows="4"
              className={`${styles.textarea} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              placeholder="Describe your accommodation in detail"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={styles.formGroup}>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price (LKR)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={adData.price}
                onChange={handleChange}
                required
                className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
                placeholder="Enter price"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                id="category"
                name="category"
                value={adData.category}
                onChange={handleChange}
                required
                className={`${styles.select} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              >
                <option value="">Select a category</option>
                <option value="Boys">Boys</option>
                <option value="Girls">Girls</option>
                <option value="other">Boys or Girls</option>
              </select>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={adData.location}
              onChange={handleChange}
              required
              className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              placeholder="Enter the location"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={styles.formGroup}>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={adData.bedrooms}
                onChange={handleChange}
                required
                min="0"
                className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={adData.bathrooms}
                onChange={handleChange}
                required
                min="0"
                className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
              <input
                type="number"
                id="area"
                name="area"
                value={adData.area}
                onChange={handleChange}
                required
                min="0"
                className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Wi-Fi', 'Air Conditioning', 'Gym Access', 'Parking', 'Laundry', 'Security'].map((amenity) => (
                <label key={amenity} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    checked={adData.amenities.includes(amenity)}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="available" className="block text-sm font-medium text-gray-700 mb-2">Available From</label>
            <input
              type="date"
              id="available"
              name="available"
              value={adData.available}
              onChange={handleChange}
              required
              className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={adData.contactInfo}
              onChange={handleChange}
              required
              className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
              placeholder="Enter your contact information"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-2">Photos</label>
            <input
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              onChange={handleChange}
              required
              className={`${styles.input} w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200`}
            />
          </div>
          <div className={styles.formGroup}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={adData.featured}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Feature this ad</span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitButton} w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Post Your Ad'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostAdPage;

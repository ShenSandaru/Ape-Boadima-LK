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
    contactInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit ad');
      }

      const result = await response.json();
      console.log('Ad submitted:', result);
      
      // Redirect to the ad page or a success page
      router.push(`/ads/${result.id}`);
    } catch (err) {
      console.error('Error submitting ad:', err);
      setError('Failed to submit ad. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Post an Ad</title>
        <meta name="description" content="Post your ad on our platform" />
      </Head>
      <div className={`${styles.container} max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md`}>
        <h1 className={`${styles.title} text-3xl font-bold text-center text-gray-800 mb-8`}>Post an Ad</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className={`${styles.form} space-y-6`}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={adData.title}
              onChange={handleChange}
              required
              className={`${styles.input} mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={adData.description}
              onChange={handleChange}
              required
              rows="4"
              className={`${styles.textarea} mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={adData.price}
              onChange={handleChange}
              required
              className={`${styles.input} mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={adData.category}
              onChange={handleChange}
              required
              className={`${styles.select} mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            >
              <option value="">Select a category</option>
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={adData.location}
              onChange={handleChange}
              required
              className={`${styles.input} mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Contact Information</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={adData.contactInfo}
              onChange={handleChange}
              required
              className={`${styles.input} mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${styles.submitButton} w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Post Ad'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostAdPage;

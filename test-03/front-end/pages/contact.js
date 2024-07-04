import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/pages/contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setSubmitMessage('Thank you for your message. We will get back to you soon!');
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Apebodima</title>
        <meta name="description" content="Get in touch with Apebodima - We're here to help!" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        {submitMessage && (
          <div className={styles.successMessage}>
            {submitMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Your full name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="your@email.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              placeholder="How can we help you?"
              rows="5"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;

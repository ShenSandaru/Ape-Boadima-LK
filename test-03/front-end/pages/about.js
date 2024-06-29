import React from 'react';
import Head from 'next/head';
import styles from '../styles/pages/about.module.css';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Company Name</title>
        <meta name="description" content="Learn more about our company and our mission." />
      </Head>
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>About Us</h1>
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            At [Your Company Name], we are dedicated to connecting people through a seamless online marketplace experience. Our goal is to create a trusted platform where users can easily buy, sell, and discover unique items within their local communities.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Our Story</h2>
          <p>
            Founded in [year], [Your Company Name] began with a vision to revolutionize the way people engage in local commerce. What started as a small project has grown into a thriving online community, serving thousands of users across [your region/country].
          </p>
        </section>
        <section className={styles.section}>
          <h2>Our Values</h2>
          <ul className={styles.valuesList}>
            <li>Trust and Safety</li>
            <li>Community Engagement</li>
            <li>Sustainability</li>
            <li>Innovation</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutPage;

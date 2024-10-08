import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // Import Image component from next/image
import styles from '../styles/pages/about.module.css';
import missionImage from '../public/mission.jpg'; // Import the mission image

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
          <h4> Welcome to our website, where we connect people with the perfect boarding houses to suit their needs. </h4>
        </section>
        <section className={`${styles.section} ${styles.flexSection}`}> {/* Add flexSection class */}
          <div className={styles.imageContainer}>
            <Image src={missionImage} alt="Our Mission" className={styles.image} /> {/* Wrap Image in a div */}
          </div>
          <div className={styles.textContainer}>
            <h2>Our Mission</h2>
            <p>
              At apebodima.lk, our mission is to revolutionize the way people find and secure boarding accommodations. We believe that everyone deserves access to safe, comfortable, and affordable housing options, whether you&apos;re a student, a young professional, or simply in need of temporary lodging.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Our Story</h2>
          <p>
            We recognized the need for a user-friendly platform that could simplify the process of finding reliable boarding houses, and we&apos;ve dedicated ourselves to creating a trusted network of properties across the country.
          </p>
        </section>
        <section className={styles.section}>
          <h4>Thank you for choosing our website to find your next boarding house. We look forward to helping you on your journey.</h4>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
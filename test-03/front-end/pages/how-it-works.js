// pages/how-it-works.js
import Head from 'next/head';
import styles from '../styles/pages/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    { title: "Create an Account", description: "Sign up for free and set up your profile to start using AdPost." },
    { title: "submit an Ad", description: " After creating an account, users can navigate to the Ad Post section, fill out the provided form, and submit their ad." },
    { title: "Ad approval", description: "Our team will review the submitted ad and, once approved, we will post it on our site, informing the user about the status via email." },
    { title: "Update your ad", description: "Ad owners can update their posted ads at any time to keep the information current and relevant" }
  ];

 

  return (
    <div className={styles.container}>
      <Head>
        <title>How It Works - AdPost</title>
        <meta name="description" content="Learn how AdPost works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>How AdPost Works</h1>

        <div className={styles.gridContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardNumber}>{index + 1}</div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

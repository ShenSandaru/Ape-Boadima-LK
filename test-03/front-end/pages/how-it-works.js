// pages/how-it-works.js
import Head from 'next/head';
import styles from '../styles/pages/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    { title: "Create an Account", description: "Sign up for free and set up your profile to start using AdPost." },
    { title: "Post Your Ad", description: "Create a detailed listing for your item or service with photos and description." },
    { title: "Connect with Buyers", description: "Receive inquiries and communicate with potential buyers through our platform." },
    { title: "Complete the Transaction", description: "Finalize the sale and arrange for payment and delivery or pickup." }
  ];

  const faqs = [
    { question: "Is it free to post an ad?", answer: "Yes, basic ad posting is free. We also offer premium options for better visibility." },
    { question: "How long will my ad stay active?", answer: "Ads typically remain active for 30 days, but you can renew or remove them at any time." },
    { question: "Is my personal information safe?", answer: "We take privacy seriously and use industry-standard security measures to protect your data." }
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

        <section className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

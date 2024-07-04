// pages/user/signup.js
import { useState } from 'react';
import Head from 'next/head';
import RegistrationForm from '../../components/user/RegistraionForm';
import styles from '../../styles/pages/signup.module.css';
import Link from 'next/link';

export default function Signup() {
  const [error, setError] = useState('');

  const handleRegistrationError = (error) => {
    console.error('Registration error:', error);
    setError(error.message || 'An error occurred during registration');
  };

  return (
    <>
      <Head>
        <title>Sign Up - AdPost</title>
        <meta name="description" content="Create an account on AdPost" />
      </Head>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.formCard}>
          <div className={styles.logoname}>
            <p>Apebodima.lk</p>
          </div>

            <h1 className={styles.title}>Create an Account</h1>
            {error && <div className={styles.errorMessage} role="alert">{error}</div>}
            <RegistrationForm onError={handleRegistrationError} />
            <div className={styles.divider}>
              <div className={styles.dividerLine}>
                <div className={styles.dividerLineInner}></div>
              </div>
              <div className={styles.dividerText}>
                <span className={styles.dividerTextInner}>
                  Already have an account?
                </span>
              </div>
            </div>
            <div className={styles.loginLink}>
              <Link href="/user/login" className={styles.loginButton}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

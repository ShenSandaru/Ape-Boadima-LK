// pages/user/signup.js
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import RegistrationForm from '../../components/user/RegistraionForm';
import styles from '../../styles/pages/signup.module.css';

export default function Signup() {
  const handleRegistrationError = (error) => {
    console.error('Registration error:', error);
    // You can add more error handling here, like showing a notification to the user
  };

  return (
    <Layout>
      <Head>
        <title>Sign Up - AdPost</title>
        <meta name="description" content="Create an account on AdPost" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Create an Account</h1>
        <RegistrationForm onError={handleRegistrationError} />
      </div>
    </Layout>
  );
}

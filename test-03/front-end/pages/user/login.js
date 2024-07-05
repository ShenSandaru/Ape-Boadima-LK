import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { loginUser } from '../../utils/auth';
import styles from '../../styles/pages/loginPage.module.css';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await loginUser({ email, password });
      if (router.pathname !== '/user/login') {
        await router.push('/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to your account" />
      </Head>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          
          <div className={styles.formCard}>
            <h2 className={styles.title}>Sign in to your account</h2>
            {error && (
              <div className={styles.errorMessage}>
                <span>{error}</span>
              </div>
            )}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className={styles.label}>
                  Email address
                </label>
                <div className={styles.formGroup}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <div className={styles.formGroup}>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${styles.button} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <div className={styles.divider}>
              <div className={styles.dividerLine}>
                <div className={styles.dividerLineInner}></div>
              </div>
              <div className={styles.dividerText}>
                <span className={styles.dividerTextInner}>
                  Don't have an account?
                </span>
              </div>
            </div>

            <div className={styles.signupLink}>
              <Link href="/user/signup" className={styles.signupButton}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

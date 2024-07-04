// components/layout/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from '../../contexts/ThemeContext';
import styles from '../../styles/components/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/tt-high-resolution-logo.jpeg"
            alt="TT Logo"
            width={60}
            height={30}
            className={styles.logoImage}
          />
        </Link>
        <div className={styles.logoname}>
           <p>apebodima.Lk</p>

        </div>
        
        <div className={styles.desktopMenu}>
          <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
          <Link href="/ads" className={`${styles.navLink} ${isActive('/ads') ? styles.active : ''}`}>Browse Ads</Link>
          <Link href="/post-ad" className={`${styles.navLink} ${isActive('/post-ad') ? styles.active : ''}`}>Post Ad</Link>
          <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>About</Link>
          <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
        </div>
        <div className={styles.authButtons}>
          <Link href="/user/login" className={styles.loginButton}>Login</Link>
          <Link href="/user/signup" className={styles.signUpButton}>Sign Up</Link>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.mobileMenuButton}
        >
          <span className={styles.menuIcon}></span>
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.mobileNavLink}>Home</Link>
        <Link href="/ads" className={styles.mobileNavLink}>Browse Ads</Link>
        <Link href="/post-ad" className={styles.mobileNavLink}>Post Ad</Link>
        <Link href="/about" className={styles.mobileNavLink}>About</Link>
        <Link href="/contact" className={styles.mobileNavLink}>Contact</Link>
        <div className={styles.mobileAuthButtons}>
          <Link href="/user/login" className={styles.mobileLoginButton}>Login</Link>
          <Link href="/user/signup" className={styles.mobileSignUpButton}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

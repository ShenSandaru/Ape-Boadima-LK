// components/layout/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/components/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  // Close the menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Prevent scrolling when menu is open
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
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className="flex items-center">
              <Link href="/" className={styles.logo}>
                <Image
                  src="/tt-high-resolution-logo.jpeg"
                  alt="TT Logo"
                  width={100} // Adjust this value as needed
                  height={40} // Adjust this value as needed
                  className={styles.logoImage}
                />
              </Link>
              <div className={styles.desktopMenu}>
                <div className={styles.desktopLinks}>
                  <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
                  <Link href="/ads" className={`${styles.navLink} ${isActive('/ads') ? styles.active : ''}`}>Browse Ads</Link>
                  <Link href="/post-ad" className={`${styles.navLink} ${isActive('/post-ad') ? styles.active : ''}`}>Post Ad</Link>
                  <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>About</Link>
                  <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
                </div>
              </div>
            </div>
            <div className={styles.authButtons}>
              <div className={styles.authButtonsContainer}>
                <Link href="/user/login" className={styles.navButton}>Login</Link>
                <Link href="/user/signup" className={`${styles.navButton} ${styles.signUpButton}`}>Sign Up</Link>
              </div>
            </div>
            <div className={styles.mobileMenuButton}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.mobileMenuIcon}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Side Menu */}
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.sideMenuOpen : ''}`}>
        <div className={styles.sideMenuContent}>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={styles.closeButton}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className={styles.sideMenuLinks}>
            <Link href="/" className={`${styles.sideMenuNavLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
            <Link href="/ads" className={`${styles.sideMenuNavLink} ${isActive('/ads') ? styles.active : ''}`}>Browse Ads</Link>
            <Link href="/post-ad" className={`${styles.sideMenuNavLink} ${isActive('/post-ad') ? styles.active : ''}`}>Post Ad</Link>
            <Link href="/about" className={`${styles.sideMenuNavLink} ${isActive('/about') ? styles.active : ''}`}>About</Link>
            <Link href="/contact" className={`${styles.sideMenuNavLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
          </div>
          <div className={styles.sideMenuAuthButtons}>
            <div className={styles.sideMenuAuthButtonsContainer}>
              <Link href="/user/login" className={styles.sideMenuNavButton}>Login</Link>
              <Link href="/user/signup" className={`${styles.sideMenuNavButton} ${styles.sideMenuSignUpButton}`}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// components/layout/Footer.js
import Link from 'next/link';
import styles from '../../styles/components/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <Link href="/terms" className={styles.link}>Terms & Conditions</Link>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
          </div>
          <div className={styles.copyright}>
            <p>Copyright © {new Date().getFullYear()} Your Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

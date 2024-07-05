// components/layout/Footer.js
import Link from 'next/link';
import styles from '../../styles/components/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>           
           <Link href="/terms" className={styles.link}>
            © 2024. All rights reserved. Tech Titans Technologies
            </Link>
            <Link href="/terms" className={styles.link}>
              Terms of Service
            </Link>
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
          </div>
          <div><Link href="/about" className={styles.copyright}>
            <p>Apebodima.lk</p></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

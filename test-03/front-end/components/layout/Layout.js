// components/layout/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../styles/components/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

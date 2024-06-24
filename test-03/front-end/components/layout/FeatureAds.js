// components/layout/FeaturedAds.js
import Link from 'next/link';
import Image from 'next/image';
import adsData from '../../data/adsData'; // Import the ads data
import styles from '../../styles/components/featuredAds.module.css';

const featuredAds = adsData.slice(0, 5); // Display the first 5 ads as featured ads

const FeaturedAds = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Ads</h2>
      <div className={styles.adsGrid}>
        {featuredAds.map((ad) => (
          <Link key={ad.id} href={`/ads/${ad.id}`}>
            <div className={styles.adCard}>
              <Image
                src={ad.image}
                alt={ad.title}
                width={300}
                height={200}
                className={styles.adImage}
              />
              <h3 className={styles.adTitle}>{ad.title}</h3>
              <p className={styles.adDescription}>{ad.description}</p>
              <p className={styles.adPrice}>{ad.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAds;

// components/layout/FeaturedAds.js
import Link from 'next/link';
import Image from 'next/image';
import { dummyRentalHouses } from '../../data/dummyRentalHouses';
import styles from '../../styles/components/featuredAds.module.css';

const FeaturedAds = () => {
  const featuredHouses = dummyRentalHouses.slice(0, 6);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Rental Houses</h2>
      <div className={styles.adsGrid}>
        {featuredHouses.map((house) => (
          <Link key={house.id} href={`/rentals/${house.id}`} className={styles.adCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={house.image}
                alt={house.title}
                layout="fill"
                objectFit="cover"
                className={styles.adImage}
              />
            </div>
            <div className={styles.adContent}>
              <h3 className={styles.adTitle}>{house.title}</h3>
              <p className={styles.adDescription}>{house.description}</p>
              <p className={styles.adPrice}>Rs. {house.price} per month</p>
              <p className={styles.adLocation}>{house.location}</p>
              
              <div className={styles.adDetails}>
                <span className={styles.adDetail}>{house.bedrooms} beds</span>
                <span className={styles.adDetail}>{house.bathrooms} bath rooms</span>
                
              </div>
              <p className={styles.adAmenities}>
                {house.amenities.slice(0, 3).join(' • ')}
                {house.amenities.length > 3 && ' • ...'}
              </p>
              <p className={styles.adAvailable}>Available: {house.available}</p>
              <p className={styles.adContactNo}>ContactNo: {house.contact}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAds;

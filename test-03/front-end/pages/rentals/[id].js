// pages/rentals/[id].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { dummyRentalHouses } from '../../data/dummyRentalHouses';
import styles from '../../styles/pages/rentalDetails.module.css';

const RentalDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const house = dummyRentalHouses.find(h => h.id === parseInt(id));

  if (!house) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{house.title} | Rental Details</title>
        <meta name="description" content={house.description} />
      </Head>
      <Link href="/" className=  {styles.backLink} >
        &larr; Back to listings
      </Link>
      <h1 className={styles.title}>{house.title}</h1>
      
      <div className={styles.imageContainer}>
        <Image
          src={house.image}
          alt={house.title}
          width={600}
          height={400}
          layout="responsive"
          className={styles.image}
        />
      </div>
      <p className={styles.description}>{house.description}</p>
      <p className={styles.price}>Rs. {house.price.toLocaleString()} per month</p>
      <p className={styles.location}>{house.location}</p>
      <div className={styles.details}>
        <span>{house.bedrooms} bed</span>
        <span>{house.bathrooms} bath</span>
        <span>{house.area.toLocaleString()} sqft</span>
      </div>
      <p className={styles.amenities}>
        <strong>Amenities:</strong> {house.amenities.join(', ')}
      </p>
      <p className={styles.available}>
        <strong>Available:</strong> {new Date(house.available).toLocaleDateString()}
      </p>
    </div>
  );
};

export default RentalDetails;

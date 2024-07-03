// pages/ads.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/pages/ads.module.css';
import { dummyRentalHouses } from '../data/dummyRentalHouses';
import SearchBar from '../components/layout/SearchBar' // Import the SearchBar component

const ADS_PER_PAGE = 10;
const TOTAL_PAGES = 3;

const AdsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredAds, setFilteredAds] = useState(dummyRentalHouses);

  const handleSearch = (searchTerm) => {
    const filtered = dummyRentalHouses.filter(ad => 
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAds(filtered);
    setCurrentPage(1);
  };

  const featuredAds = filteredAds.filter(ad => ad.featured);
  const regularAds = filteredAds.filter(ad => !ad.featured);
  const paginatedAds = regularAds.slice(0, TOTAL_PAGES * ADS_PER_PAGE);

  const indexOfLastAd = currentPage * ADS_PER_PAGE;
  const indexOfFirstAd = indexOfLastAd - ADS_PER_PAGE;
  const currentAds = paginatedAds.slice(indexOfFirstAd, indexOfLastAd);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const pageCount = Math.ceil(paginatedAds.length / ADS_PER_PAGE);
    return (
      <div className={styles.pagination}>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`${styles.pageButton} ${currentPage === number ? styles.activePage : ''}`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  const AdCard = ({ ad, isFeatured }) => (
    <div className={`${styles.adCard} ${isFeatured ? styles.featuredCard : ''}`}>
      {isFeatured && <span className={styles.featuredBadge}>Featured</span>}
      <Image
        src={ad.image}
        alt={ad.title}
        width={300}
        height={200}
        className={styles.adImage}
      />
      <div className={styles.adContent}>
        <h3 className={styles.adTitle}>{ad.title}</h3>
        <p className={styles.adDescription}>{ad.description}</p>
        <p className={styles.adPrice}>Rs.{ad.price} per month</p>
        <p className={styles.adLocation}>{ad.location}</p>
        <div className={styles.adDetails}>
          <span className={styles.adDetail}>{ad.bedrooms} bed</span>
          <span className={styles.adDetail}>{ad.bathrooms} bath</span>
          <span className={styles.adDetail}>{ad.area} sqft</span>
        </div>
        <p className={styles.adAmenities}>
          {ad.amenities.slice(0, 3).join(' • ')}
          {ad.amenities.length > 3 && ' • ...'}
        </p>
        <p className={styles.adAvailable}>Available: {ad.available}</p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Browse Rental Houses</title>
        <meta name="description" content="Browse available rental houses" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Browse Rental Houses</h1>
        
        <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component here */}
        
        {featuredAds.length > 0 && (
          <section className={styles.featuredSection}>
            <h2 className={styles.featuredTitle}>Featured Rentals</h2>
            <div className={styles.adsGrid}>
              {featuredAds.map((ad) => (
                <Link key={ad.id} href={`/rentals/${ad.id}`}>
                  <AdCard ad={ad} isFeatured={true} />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className={styles.allAdsSection}>
          <h2 className={styles.allAdsTitle}>All Rental Houses</h2>
          <div className={styles.adsGrid}>
            {currentAds.map((ad) => (
              <Link key={ad.id} href={`/rentals/${ad.id}`}>
                <AdCard ad={ad} isFeatured={false} />
              </Link>
            ))}
          </div>
        </section>

        {renderPaginationButtons()}
        <p className={styles.pageInfo}>
          Page {currentPage} of {Math.ceil(paginatedAds.length / ADS_PER_PAGE)}
        </p>
      </div>
    </>
  );
};

export default AdsPage;

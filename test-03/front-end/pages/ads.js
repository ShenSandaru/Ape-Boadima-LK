// pages/ads.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/pages/ads.module.css';
import adsData from '../data/adsData'; // Import the ads data

const ADS_PER_PAGE = 10;

const AdsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastAd = currentPage * ADS_PER_PAGE;
  const indexOfFirstAd = indexOfLastAd - ADS_PER_PAGE;
  const currentAds = adsData.slice(indexOfFirstAd, indexOfLastAd);

  const totalPages = Math.ceil(adsData.length / ADS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`${styles.pageButton} ${currentPage === i ? styles.activePage : ''}`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className={styles.pagination}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.pageButton} ${currentPage === 1 ? styles.disabledButton : ''}`}
        >
          &lt;
        </button>
        {startPage > 1 && (
          <>
            <button onClick={() => paginate(1)} className={styles.pageButton}>1</button>
            {startPage > 2 && <span className={styles.ellipsis}>...</span>}
          </>
        )}
        {pageNumbers}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className={styles.ellipsis}>...</span>}
            <button onClick={() => paginate(totalPages)} className={styles.pageButton}>{totalPages}</button>
          </>
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabledButton : ''}`}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Browse Ads</title>
        <meta name="description" content="Browse the latest ads" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Browse Ads</h1>
        <div className={styles.adsGrid}>
          {currentAds.map((ad) => (
            <Link key={ad.id} href={`/ads/${ad.id}`}>
              <div className={styles.adCard}>
                <Image
                  src={ad.image}
                  alt={ad.title}
                  width={300}
                  height={200}
                  className={styles.adImage}
                />
                <h2 className={styles.adTitle}>{ad.title}</h2>
                <p className={styles.adDescription}>{ad.description}</p>
                <p className={styles.adPrice}>{ad.price}</p>
              </div>
            </Link>
          ))}
        </div>
        {renderPaginationButtons()}
        <p className={styles.pageInfo}>Page {currentPage} of {totalPages}</p>
      </div>
    </>
  );
};

export default AdsPage;

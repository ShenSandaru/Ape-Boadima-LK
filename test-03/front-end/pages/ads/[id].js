// pages/ads/[id].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/pages/adDetails.module.css';
import adsData from '../../data/adsData'; // Import the ads data

const AdDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const ad = adsData.find((ad) => ad.id === parseInt(id));

  if (!ad) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <Head>
        <title>{ad.title}</title>
        <meta name="description" content={ad.description} />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{ad.title}</h1>
        <Image src={ad.image} alt={ad.title} width={600} height={400} className={styles.adImage} />
        <p className={styles.description}>{ad.description}</p>
        <p className={styles.price}>{ad.price}</p>
      </div>
    </Layout>
  );
};

export default AdDetailsPage;

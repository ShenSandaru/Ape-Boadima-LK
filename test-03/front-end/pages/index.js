import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/components/card.module.css';
import FeaturedAds from '../components/layout/FeatureAds';
// Adjust the path as necessary


/* Assuming you have a CSS file linked to your HTML */

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Ad Posting Site</title>
        <meta name="description" content="Post and find ads easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main className="flex flex-col items-center justify-center min-h-screen py-8">
        <div className="background-image">
        <h1 className="text-5xl font-bold text-center mb-8">
          Welcome to <span className="text-blue-500"> Boarding Perfection</span>
        </h1>

        <p className="text-lg text-center mb-12">
        Discover your perfect home away from home with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link href="/ads" className={`${styles.card} card`}>
            <h2 className="text-2xl font-semibold mb-2">Browse Ads</h2>
            <p>Explore our wide range of listings.</p>
          </Link>

          <Link href="/post-ad" className={`${styles.card} card`}>
            <h2 className="text-2xl font-semibold mb-2">Post an Ad</h2>
            <p>Sell your items or offer services.</p>
          </Link>

          <Link href="/user/signup" className={`${styles.card} card`}>
            <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
            <p>Join our community to get started.</p>
          </Link>

          <Link href="/how-it-works" className={`${styles.card} card`}>
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <p>Learn about our platform.</p>
          </Link>
        </div>
        </div>
      </main>
      
      <FeaturedAds />
    </div>
  );
}

      





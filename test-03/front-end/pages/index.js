// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/components/card.module.css';
import FeaturedAds from '../components/layout/FeatureAds';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Ad Posting Site</title>
        <meta name="description" content="Post and find ads easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-8">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
          Welcome to <span className="text-blue-600">Boarding Perfection</span>
        </h1>

        <p className="text-lg text-center mb-12 text-gray-600">
         Discover your perfect home away from home with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <Link href="/ads" className={`${styles.card} card bg-blue-100 hover:bg-blue-200`}>
    <h2 className="text-2xl font-semibold mb-2 text-center">Browse Ads</h2>
    <p className="text-center">Explore our wide range of listings.</p>
  </Link>

  <Link href="/post-ad" className={`${styles.card} card bg-blue-100 hover:bg-blue-200`}>
    <h2 className="text-2xl font-semibold mb-2 text-center">Post an Ad</h2>
    <p className="text-center">Sell your items or offer services.</p>
  </Link>

  <Link href="/user/signup" className={`${styles.card} card bg-blue-100 hover:bg-blue-200`}>
    <h2 className="text-2xl font-semibold mb-2 text-center">Create Account</h2>
    <p className="text-center">Join our community to get started.</p>
  </Link>

  <Link href="/how-it-works" className={`${styles.card} card bg-blue-100 hover:bg-blue-200`}>
    <h2 className=" text-center text-2xl font-semibold mb-2 ">How It Works</h2>
    <p className="text-center">Learn about our platform.</p>
  </Link>
</div>

      </main>
      
      <FeaturedAds />
    </div>
  );
}

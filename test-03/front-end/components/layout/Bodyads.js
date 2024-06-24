import Image from 'next/image';
import cardStyles from '../../styles/components/card.module.css';
import bodyStyles from '../../styles/components/bodyads.module.css';

const FeaturedAds = () => {
  const featuredAds = [
    {
      id: 1,
      title: "Luxury Resort in Bentota",
      image: "./image1.png",
      price: "$200/night"
    },
    {
      id: 2,
      title: "Beach Hotel in Unawatuna",
      image: "./image2.png",
      price: "$150/night"
    },
    {
      id: 3,
      title: "Mountain View Resort in Ella",
      image: "./image3.png",
      price: "$180/night"
    },
  ];

  return (
    // Assuming the <main> tag is your page's main content area
    // You should adjust the flex container to your specific layout needs
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Content above the featured ads */}
      <div style={{ flex: 1 }}> {/* This div takes up all available space pushing the section down */}</div>

      <section className={bodyStyles.section} style={{ marginTop: 'auto' }}>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Hotels in Sri Lanka</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAds.map((ad) => (
            <div key={ad.id} className={`${cardStyles.card} card`}>
              <Image 
                src={ad.image} 
                alt={ad.title} 
                width={300} 
                height={200} 
                className="w-full h-48 object-cover mb-4" 
                unoptimized
              />
              <h3 className="text-xl font-semibold mb-2">{ad.title}</h3>
              <p className="text-lg font-bold text-blue-500">{ad.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FeaturedAds;
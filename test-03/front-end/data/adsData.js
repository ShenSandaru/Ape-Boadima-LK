// data/adsData.js
const generateAds = (count) => {
    const ads = [];
    for (let i = 1; i <= count; i++) {
      ads.push({
        id: i,
        title: `Ad Title ${i}`,
        description: `This is the description for ad number ${i}.`,
        price: `$${(i * 1000).toLocaleString()}`,
        image: `/image${(i % 3) + 1}.png`, // Cycle through image1.png, image2.png, image3.png
      });
    }
    return ads;
  };
  
  const adsData = generateAds(100); // Generate 100 ads
  
  export default adsData;
  
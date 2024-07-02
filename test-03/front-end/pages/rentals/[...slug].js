// pages/rentals/[...slug].js
import { useRouter } from 'next/router';

export default function CatchAllRentals() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Catch-all Rentals Page</h1>
      <p>Slug: {JSON.stringify(slug)}</p>
    </div>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log(productId, reviewId);
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>

      <div>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </div>

      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>

      <h1>
        This is for product with id {productId} and review for {reviewId}
      </h1>
    </div>
  );
};

export default About;

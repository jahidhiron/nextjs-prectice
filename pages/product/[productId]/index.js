import Link from "next/link";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  const { productId } = router.query;
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

      <h1>This is a detailed product page for product id {productId}</h1>
    </div>
  );
};

export default About;

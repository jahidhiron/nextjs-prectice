import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Place order successfull.");
    router.push("/product");
    router.replace("/product");
  };
  return (
    <div>
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

      <h1>This is a home page</h1>
      <Link href="/product">
        <a>Products</a>
      </Link>

      <div>
        <button onClick={handleClick}>Place order</button>
      </div>
    </div>
  );
};

export default Home;

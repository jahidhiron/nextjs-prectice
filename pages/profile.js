import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>

      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>

      <h1>This is a profile page</h1>
    </div>
  );
};

export default Home;

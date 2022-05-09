import Link from "next/link";

const About = () => {
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

      <h1>This is a product page</h1>

      <div>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </div>

      <div>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </div>

      <div>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </div>
    </div>
  );
};

export default About;

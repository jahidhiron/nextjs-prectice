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

      <h1>This is a about page</h1>
    </div>
  );
};

export default About;

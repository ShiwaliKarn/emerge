import Link from "next/link";

const Home = () => {
  return (
    <div className="pt-32">
      <Link href="/register">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="15"
          className="text-white uppercase font-bold tracking-widest border border-white p-2 italic"
        >
          Register now for our new event!!!&nbsp;&nbsp;Register now for our new
          event!!!&nbsp;&nbsp; Register now for our new event!!!&nbsp;&nbsp;
          Register now for our new event!!!
        </marquee>
      </Link>
    </div>
  );
};

export default Home;

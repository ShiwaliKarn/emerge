import Link from "next/link";

const Home = () => {
  return (
    <div className="pt-32">
      <Link href="/register">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="10"
          className="text-white uppercase font-bold tracking-widest border-y border-slate-400 p-2 italic"
        >
          Register now for our new
          event!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Register now for our new
          event!!!&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Register now for our new event!!!
        </marquee>
      </Link>
    </div>
  );
};

export default Home;

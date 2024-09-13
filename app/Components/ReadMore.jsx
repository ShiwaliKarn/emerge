import Link from "next/link";

const ReadMore = () => {
  return (
    <div className="container border-y border-slate-400 flex flex-wrap text-slate-400 gap-9 justify-evenly py-8 ">
      <Link
        href="/"
        className="bg-[#030D27] w-52 h-28 rounded-xl flex flex-col justify-center items-center gap-2 hover:scale-105 transition shadow-md shadow-slate-700"
      >
        <p className="text-xs">Read More</p>
        <h3 className="font-bold text-white">THE PROJECT</h3>
        <p className="text-xs">Vision & Process</p>
      </Link>
      <Link
        href="/gallery"
        className="bg-[#030D27] w-52 h-28 rounded-xl flex flex-col justify-center items-center gap-2 hover:scale-105 transition shadow-md shadow-slate-700"
      >
        <p className="text-xs">Read More</p>
        <h3 className="font-bold text-white">GALLERY</h3>
        <p className="text-xs">Way to Home</p>
      </Link>
      <Link
        href="#contact"
        className="bg-[#030D27] w-52 h-28 rounded-xl flex flex-col justify-center items-center gap-2 hover:scale-105 transition shadow-md shadow-slate-700"
      >
        <p className="text-xs">Read More</p>
        <h3 className="font-bold text-white">CONTACT</h3>
        <p className="text-xs">Get in touch</p>
      </Link>
    </div>
  );
};

export default ReadMore;

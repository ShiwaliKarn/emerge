import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi2";
const Footer = () => {
  return (
    <footer
      className="text-gray-400 mt-16 border-t border-slate-400 italic"
      id="contact"
    >
      <div className=" flex flex-col sm:flex-row  container sm:py-5 gap-6 p-5">
        <div className="flex flex-col">
          <h3 className="uppercase underline underline-offset-8 decoration-yellow-500 mb-3 font-semibold">
            Emerge
          </h3>
          <p className="sm:w-1/2 w-full">
            Emerge, the Poetry Club, is a vibrant sanctuary where wordsmiths
            converge to celebrate the artistry of language. Within these poetic
            walls, diverse voices intertwine, fostering a community that
            nurtures creativity and ignites literary passions.
          </p>
        </div>
        <div>
          <h3 className="uppercase underline underline-offset-8 decoration-yellow-500 mb-3 font-semibold">
            Contact
          </h3>

          <ul>
            <li className="mb-2 hover:text-white" title="email">
              <Link
                href="mailto:emerge.nagpur@gmail.com"
                className="flex items-center gap-1"
              >
                <MdOutlineMail />
                emerge.nagpur@gmail.com
              </Link>
            </li>
            <li className="mb-2 hover:text-white" title="instagram">
              <Link
                href="https://www.instagram.com/emerge.nagpur/"
                className="flex items-center gap-1"
                target="__blank"
              >
                <FaInstagram />
                emerge.nagpur
              </Link>
            </li>
            <li className="flex items-center gap-1 hover:text-white">
              <HiOutlinePhone />
              +918529497737
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center w-[95%] mx-auto border-t border-slate-600 p-2">
          Copyright &copy; {new Date().getFullYear()} Team Emerge, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

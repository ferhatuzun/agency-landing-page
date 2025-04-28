import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-footer text-white font-inter">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 py-10 px-6">
        <div className="flex flex-col justify-between gap-y-5">
          <img src="/images/logo_light.png" alt="" className="w-fit" />
          <div>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex items-center gap-x-2">
            <a
              href="#"
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
            >
              <FaEarthAmericas />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="lg:place-self-center">
          <h4 className="text-2xl font-semibold mb-2">Company</h4>
          <ul className="flex flex-col gap-y-3 text-footer-text">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Support</h4>
          <ul className="flex flex-col gap-y-3 text-footer-text">
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Stay up to date</h4>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your email address"
              className="bg-gray-600 py-2 pl-4 pr-10 rounded-xl  w-full"
            />
            <a href="#">
              <BsFillSendFill className="absolute right-3 top-1/2 -translate-y-1/2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

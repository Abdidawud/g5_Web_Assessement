// /app/components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Image and Note */}
        <div className="flex items-center space-x-6 mb-8 md:mb-0">
          <img
            src="/footer.png" // Replace with your footer image path
            alt="Footer Image"
            className="h-16"
          />
          <div className="flex flex-col">
            <p className=" text-[#000000] text-lg font-semibold mb-2">
              Get Involved in Improving Tech Education in Africa
            </p>
            <Link href="/support-us">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                Support Us
              </button>
            </Link>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <Link href="/" className="mb-2 hover:text-gray-400">
            Home
          </Link>
          <Link href="/success-stories" className="mb-2 hover:text-gray-400">
            Success Stories
          </Link>
          <Link href="/about-us" className="mb-2 hover:text-gray-400">
            About Us
          </Link>
          <Link href="/get-involved" className="hover:text-gray-400">
            Get Involved
          </Link>
        </div>

        {/* Teams Column */}
        <div className="flex flex-col mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Teams</h4>
          <Link href="/board-members" className="mb-2 hover:text-gray-400">
            Board Members
          </Link>
          <Link href="/advisors-mentors" className="mb-2 hover:text-gray-400">
            Advisors/Mentors
          </Link>
          <Link href="/executives-staff" className="hover:text-gray-400">
            Executives and Staff
          </Link>
        </div>

        {/* Blogs Column */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Blogs</h4>
          <Link href="/recent-blog" className="mb-2 hover:text-gray-400">
            Recent Blog
          </Link>
          <Link href="/new-blog" className="hover:text-gray-400">
            New Blog
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2020 Africa to Silicon Valley</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://twitter.com"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://facebook.com"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://youtube.com"
            className="text-gray-400 hover:text-white"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

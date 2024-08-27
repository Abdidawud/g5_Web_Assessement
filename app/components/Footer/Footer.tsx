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
    <footer className="py-8 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Image and Note */}
        <div className="flex items-start space-x-6 mb-8 md:mb-0">
          <img
            src="/footer.png" // Replace with your footer image path
            alt="Footer Image"
            className="h-40 w-40 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-black text-xl font-semibold mb-4 leading-tight">
              Get Involved in Improving Tech Education in Africa
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/support-us">
                <button className="px-6 py-2 bg-[#264FAD] hover:bg-blue-600 text-white rounded-md">
                  Support Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col mb-8 md:mb-0 w-full md:w-auto space-y-4">
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link
            href="/success-stories"
            className="text-gray-600 hover:text-black"
          >
            Success Stories
          </Link>
          <Link href="/about-us" className="text-gray-600 hover:text-black">
            About Us
          </Link>
          <Link href="/get-involved" className="text-gray-600 hover:text-black">
            Get Involved
          </Link>
        </div>

        {/* Teams Column */}
        <div className="flex flex-col mb-8 md:mb-0 w-full md:w-auto space-y-4">
          <h4 className="text-lg font-semibold mb-4">Teams</h4>
          <Link
            href="/board-members"
            className="text-gray-600 hover:text-black"
          >
            Board Members
          </Link>
          <Link
            href="/advisors-mentors"
            className="text-gray-600 hover:text-black"
          >
            Advisors/Mentors
          </Link>
          <Link
            href="/executives-staff"
            className="text-gray-600 hover:text-black"
          >
            Executives
          </Link>
          <Link
            href="/executives-staff"
            className="text-gray-600 hover:text-black"
          >
            Staff
          </Link>
        </div>

        {/* Blogs Column */}
        <div className="flex flex-col w-full md:w-auto space-y-4">
          <h4 className="text-lg font-semibold mb-4">Blogs</h4>
          <Link href="/recent-blog" className="text-gray-600 hover:text-black">
            Recent Blog
          </Link>
          <Link href="/new-blog" className="text-gray-600 hover:text-black">
            New Blog
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          &copy; 2020 Africa to Silicon Valley. Inc. All right reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            href="https://twitter.com"
            className="text-gray-400 hover:text-black"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://facebook.com"
            className="text-gray-400 hover:text-black"
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            href="https://youtube.com"
            className="text-gray-400 hover:text-black"
          >
            <FaYoutube size={24} />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-400 hover:text-black"
          >
            <FaLinkedinIn size={24} />
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-400 hover:text-black"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

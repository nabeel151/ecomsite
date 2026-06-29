import { Mail } from "lucide-react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#f2f0f1] mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Box */}
                <div className="relative -top-12 bg-black rounded-3xl px-6 py-8 md:px-12 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <h2 className="text-white text-2xl sm:text-4xl font-black leading-tight text-center lg:text-left max-w-xl">
                        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                    </h2>

                    <div className="w-full lg:w-[400px] space-y-4">
                        <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3">
                            <Mail size={18} className="text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full outline-none text-sm"
                            />
                        </div>

                        <button className="w-full bg-white rounded-full py-3 text-sm font-medium hover:bg-gray-200 transition">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>

                {/* Footer Main */}
             {/* Footer Main */}
<div className="grid grid-cols-2 lg:grid-cols-5 gap-8 pb-10">
  {/* Brand */}
  <div className="col-span-2 lg:col-span-1">
    <h2 className="text-3xl font-black mb-4">SHOP.CO</h2>

    <p className="text-gray-500 text-sm leading-6 mb-5">
      We have clothes that suits your style and which you’re proud to
      wear. From women to men.
    </p>

    <div className="flex gap-3">
      <div className="p-2 rounded-full border bg-white">
        <FaTwitter size={16} />
      </div>

      <div className="p-2 rounded-full border bg-black text-white">
        <FaFacebook size={16} />
      </div>

      <div className="p-2 rounded-full border bg-white">
        <FaInstagram size={16} />
      </div>

      <div className="p-2 rounded-full border bg-white">
        <FaGithub size={16} />
      </div>
    </div>
  </div>

  {/* Company */}
  <div>
    <h3 className="font-semibold tracking-[0.2em] mb-5">COMPANY</h3>
    <ul className="space-y-3 text-gray-500 text-sm">
      <li>About</li>
      <li>Features</li>
      <li>Works</li>
      <li>Career</li>
    </ul>
  </div>

  {/* Help */}
  <div>
    <h3 className="font-semibold tracking-[0.2em] mb-5">HELP</h3>
    <ul className="space-y-3 text-gray-500 text-sm">
      <li>Customer Support</li>
      <li>Delivery Details</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
  </div>

  {/* FAQ */}
  <div>
    <h3 className="font-semibold tracking-[0.2em] mb-5">FAQ</h3>
    <ul className="space-y-3 text-gray-500 text-sm">
      <li>Account</li>
      <li>Manage Deliveries</li>
      <li>Orders</li>
      <li>Payments</li>
    </ul>
  </div>

  {/* Resources */}
  <div>
    <h3 className="font-semibold tracking-[0.2em] mb-5">RESOURCES</h3>
    <ul className="space-y-3 text-gray-500 text-sm">
      <li>Free eBooks</li>
      <li>Development Tutorial</li>
      <li>How to - Blog</li>
      <li>YouTube Playlist</li>
    </ul>
  </div>
</div>

                {/* Bottom */}
                <div className="border-t py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Shop.co © 2000-2023, All Rights Reserved
                    </p>

                    <div className="flex gap-2 flex-wrap justify-center">
                        <div className="px-3 py-1 rounded border text-xs font-semibold bg-blue-600 text-white">
                            VISA
                        </div>

                        <div className="px-3 py-1 rounded border text-xs font-semibold bg-gradient-to-r from-red-500 to-orange-400 text-white">
                            Master
                        </div>

                        <div className="px-3 py-1 rounded border text-xs font-semibold bg-blue-500 text-white">
                            PayPal
                        </div>

                        <div className="px-3 py-1 rounded border text-xs font-semibold bg-black text-white">
                            ApplePay
                        </div>

                        <div className="px-3 py-1 rounded border text-xs font-semibold bg-white text-blue-600 border-gray-300">
                            GPay
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
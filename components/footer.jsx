import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">MemoTag</h3>
            <p className="text-gray-300 mb-4">
              Transforming dementia care with AI-powered technology for patients and caregivers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#problem" className="text-gray-300 hover:text-teal-400 transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link href="#traction" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Traction
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-teal-400 mr-3 mt-0.5" />
                <span className="text-gray-300">info@memotag.io</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-teal-400 mr-3 mt-0.5" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-3 mt-0.5" />
                <span className="text-gray-300">123 Innovation Way, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates on MemoTag.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} MemoTag. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-3">Nextlite</h3>
            <p className="text-sm leading-relaxed">
              Fast, conversion-focused marketing for modern brands.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FF5A3C] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FF5A3C] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="hover:text-[#FF5A3C] transition-colors"
                >
                  Training Program
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF5A3C] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@nextlite.agency"
                  className="hover:text-[#FF5A3C] transition-colors"
                >
                  nextlite555@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5A3C] transition-colors"
                >
                  +91 8767316983
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nextlite. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

import Link from 'next/link';
import Controller from '../svg/detailsPage/Controller';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-(--color-bg-secondary)">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <Controller className="text-(--color-accent-primary) h-6 w-6" />
              <span className="text-lg font-bold">Game Finder PRO</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Discover, track, and organize your favorite games. Your ultimate companion for gaming
              exploration.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Explore</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Browse Games
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Action
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Adventure
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  RPG
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Shooter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Game Finder PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

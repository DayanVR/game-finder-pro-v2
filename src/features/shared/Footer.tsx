import Link from 'next/link';
import Controller from '../svg/detailsPage/Controller';

export default function Footer() {
  return (
    <footer className="border-border/40 bg-card/50 mt-16 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-foreground hover:text-primary flex items-center gap-2 transition-colors"
            >
              <Controller className="text-primary h-6 w-6" />
              <span className="text-lg font-bold">Game Finder PRO</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Discover, track, and organize your favorite games. Your ultimate companion for gaming
              exploration.
            </p>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Explore</h3>
            <ul className="space-y-3">
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
            <h3 className="text-foreground mb-4 font-semibold">Categories</h3>
            <ul className="space-y-3">
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
            <h3 className="text-foreground mb-4 font-semibold">Support</h3>
            <ul className="space-y-3">
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

        <div className="border-border/40 mt-12 gap-4 border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Game Finder PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-serif text-7xl md:text-9xl mb-6">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-muted mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-4 border border-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}


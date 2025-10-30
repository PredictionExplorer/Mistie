"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/65 backdrop-blur-lg border-b border-border/20 shadow-sm transition-all duration-300" style={{ height: 'var(--header-height)' }}>
      <div className="mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 h-full" style={{ maxWidth: 'var(--max-width-wide)' }}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 accent-bg rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white font-serif text-base font-semibold">M</span>
            </div>
            <span className="font-serif text-2xl lg:text-3xl font-light text-foreground tracking-tight">
              Mistie
            </span>
          </Link>

          {/* Navigation Links - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navItems.map((item) => {
              const isActive = pathname === item.path || 
                (item.path === "/gallery" && pathname?.startsWith("/gallery"));
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group"
                >
                  <span
                    className={`text-sm lg:text-[15px] font-normal transition-colors tracking-wide ${
                      isActive ? "text-accent" : "text-muted group-hover:text-accent"
                    }`}
                  >
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 accent-bg rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <Link href="/gallery" className="text-accent text-sm font-medium">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


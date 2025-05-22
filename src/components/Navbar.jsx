import { Menu } from "lucide-react"
import { Link } from "react-scroll"
import ThemeToggle from "./ThemeToggle"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import logoLight from "@/assets/KP.png"
import logoDark from "@/assets/KP-d.png"

const navLinks = [
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Certificates", to: "certificates" },
  { label: "Contact", to: "contact" },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO IMAGE (light + dark) */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          {/* Light Mode Logo */}
          <img
            src={logoLight}
            alt="KP Logo"
            className="h-16 w-auto object-contain block dark:hidden"
          />
          {/* Dark Mode Logo */}
          <img
            src={logoDark}
            alt="KP Logo Dark"
            className="h-16 w-auto object-contain hidden dark:block"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm text-muted-foreground hover:text-primary transition"
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[260px] bg-background text-foreground"
            >
              <div className="space-y-4 pt-6">
                {navLinks.map(({ label, to }) => (
                  <SheetClose asChild key={label}>
                    <Link
                      to={to}
                      smooth
                      duration={500}
                      offset={-80}
                      className="block text-muted-foreground hover:text-primary transition text-sm"
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar

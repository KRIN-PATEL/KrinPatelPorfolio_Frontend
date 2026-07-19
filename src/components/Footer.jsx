const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center space-y-3 text-center">
        <h3 className="text-2xl font-bold tracking-[0.3em] uppercase text-foreground">
          Krin Patel
        </h3>

        <p className="max-w-xl text-sm text-muted-foreground">
          E-Commerce Operations Manager • Retail Operations Leader • Full-Stack Developer
        </p>

        <div className="h-px w-20 bg-border" />

        <p className="text-sm text-muted-foreground">
          © {currentYear} Krin Patel. All rights reserved.
        </p>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          Building Digital Solutions & Driving Operational Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
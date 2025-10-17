import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-foreground/5 text-foreground text-center px-6">
      <h1 className="text-[6rem] font-extrabold tracking-tight text-primary mb-2">
        404
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-6 opacity-90">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="text-lg mb-10 opacity-80">
         Go back to Home page.
      </p>
      <Link
        href="/"
        className="bg-red-800 text-background px-8 py-3 rounded-full font-medium shadow-md hover:bg-primary/90 transition-transform hover:scale-105"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

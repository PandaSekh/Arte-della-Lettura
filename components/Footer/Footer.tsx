import Link from "next/link";
import { ReactElement } from "react";

export default function Footer(): ReactElement | null {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-6	mb-4 text-center left-2/4 mx-auto">
      <small>
        &copy; Copyright {year}, Alessio Franceschi.{" "}
        <Link
          href={`/${encodeURIComponent("privacy-policy")}`}
          className="text-dark-black cursor-pointer underline">
          
            Privacy Policy
          
        </Link>
      </small>
    </footer>
  );
}

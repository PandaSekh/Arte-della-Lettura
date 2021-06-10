import InternalLink from "../UtilComponents/InternalLink";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-6	mb-4 text-center left-2/4 mx-auto">
      <small>
        &copy; Copyright {year}, Alessio Franceschi. <InternalLink text="Privacy Policy" slug="privacy-policy" />
      </small>
    </footer>
  );
}

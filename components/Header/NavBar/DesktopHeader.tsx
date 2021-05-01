import { useRouter } from "next/router";
import config from "../../../website.config.json"
import NavUrl from "./NavUrl";

export default function DesktopHeader() {
  const router = useRouter();
  const urls = config.urls.map(url => <NavUrl path={url.path} name={url.name} router={router} extraClass={"navbar-link hover:text-customBlue text-lg hover:border-b-2 font-medium"} liClass="navbar-li inline p-3 text-center" />)

  return (
    <nav className="main-nav-desktop" id="main-nav-desktop">
      <ul className="navbar-ul list-none text-center mt-4">
        {urls}
      </ul>
      <style jsx>
        {`
        ul, li{
          list-style: none;
          padding: 0;
        }
        @media (max-width: 768px) {
          .main-nav-desktop {
            display: none;
          }
        }
        `}
      </style>
    </nav>
  )
}
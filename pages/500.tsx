import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom500(): JSX.Element {
  const router = useRouter();

  return (
    <div>
      <h1>500 - Qualcosa di strano è successo</h1>
      <Image src="/static/images/gif/angry_panda.gif" width={487} height={498} />
      <h4>
        <button onClick={() => router.back()} onKeyPress={() => router.back()} type="button" role="link">
          👈 Torna indietro
        </button>
      </h4>
      <style jsx>
        {`
          div {
            margin: auto;
            text-align: center;
          }
          img {
            border-radius: 5px;
          }
          a {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

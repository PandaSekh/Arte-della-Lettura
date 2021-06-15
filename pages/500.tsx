import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom500(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <h1>500 - Qualcosa di strano è successo</h1>
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
      <div className="w-auto h-auto m-auto">
        <Image
          src="/static/images/gif/angry_panda.gif"
          layout="intrinsic"
          objectFit="contain"
          width={250}
          height={300}
        />
      </div>
    </div>
  );
}

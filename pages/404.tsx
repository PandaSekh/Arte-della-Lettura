import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom404(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <div>
        <h1>404 - La pagina non esiste!</h1>
        <h4 className="underline">
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
      <div className="w-5/6 h-auto m-auto">
        <Image src="/static/images/gif/sad_panda.gif" layout="intrinsic" objectFit="contain" width={250} height={300} />
      </div>
    </>
  );
}

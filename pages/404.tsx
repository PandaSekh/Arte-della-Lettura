import Image from "next/image";
import { useRouter } from "next/router";

export default function Custom404(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col mx-auto text-center">
      <h1>404 - La pagina non esiste!</h1>
      <h4 className="underline">
        <button
          onClick={() => router.back()}
          onKeyPress={() => router.back()}
          type="button"
          role="link"
          aria-roledescription="link"
          className="cursor-pointer"
        >
          👈 Torna indietro
        </button>
      </h4>
      <div className="w-auto h-auto mx-auto rounded">
        <Image
          src="/static/images/gif/sad_panda.gif"
          layout="intrinsic"
          objectFit="contain"
          width={250}
          height={300}
        />
      </div>
    </div>
  );
}

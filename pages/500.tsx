import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function Custom500(): ReactElement | null {
  const router = useRouter();

  return (
    <div className="flex flex-col mx-auto text-center">
      <h1>500 - Qualcosa di strano è successo</h1>
      <h4>
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
          src="/static/images/gif/angry_panda.gif"
          layout="intrinsic"
          objectFit="contain"
          width={250}
          height={300}
          alt="Un panda arrabiato"
        />
      </div>
    </div>
  );
}

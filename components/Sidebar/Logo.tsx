import Image from "next/legacy/image";
import panda from "../../public/icon-180-180.png";
import { ReactElement } from "react";

export default function Logo(): ReactElement | null {
  return (
    <div>
      <Image
        width={200}
        height={200}
        src={panda}
        placeholder="empty"
        alt="Mascotte Arte della Lettura"
      />
    </div>
  );
}

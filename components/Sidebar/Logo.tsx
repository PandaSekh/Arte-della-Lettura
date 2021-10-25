import Image from "next/image";
import panda from "../../public/icon-180-180.png"

export default function Logo(): JSX.Element {
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

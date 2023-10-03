import { ReactElement } from "react";

export default function SocialContainer({
  social,
}: {
  social: ReactElement | null;
}): ReactElement | null {
  return (
    <div className="w-10 h-10 transform-gpu hover:scale-110 active:scale-90 ease-out	duration-150">
      {social}
    </div>
  );
}

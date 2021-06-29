export default function SocialContainer({ social }: { social: JSX.Element }): JSX.Element {
  return <div className="w-10 h-10 transform-gpu hover:scale-110 active:scale-90 ease-out	duration-150">{social}</div>
}
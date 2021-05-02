import Image from "next/image";
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <div>
        <h1>404 - La pagina non esiste!</h1>
        <h4 className="underline"><a onClick={() => router.back()}>👈 Torna indietro</a></h4>
        <style jsx>
          {`
          div{
            margin: auto;
            text-align: center;
            
          }
          img{
            border-radius: 5px
          }
          a{
            cursor: pointer;
          }
        `}
        </style>
      </div>
      <div className="w-5/6 h-auto	relative m-auto">
        <Image src="/static/images/gif/sad_panda.gif" layout="fill" objectFit="contain" />
      </div>
    </>
  )
}
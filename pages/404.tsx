import Image from "next/image";
import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter();

  return (
    <div>
      <h1>404 - La pagina non esiste!</h1>
      <Image src="/static/images/gif/sad_panda.gif" width={487} height={498} />
      <h4><a onClick={() => router.back()}>👈 Torna indietro</a></h4>
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
    </div >)
}
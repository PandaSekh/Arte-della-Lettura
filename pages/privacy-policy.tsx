import { ReactElement } from "react";

export default function PrivacyPolicy(): ReactElement | null {
  return (
    <div className="m-auto md:px-0 px-9">
      <h2 className="text-center">Privacy Policy</h2>
      <p className="text-center">
        <strong>
          {`Informativa ai sensi dell'art. 13 del Codice della Privacy
Ai sensi dell'articolo 13 del codice della D.Lgs. 196/2003`}
        </strong>
      </p>
      <p>
        Arte della Lettura è un blog senza scopo di lucro. L’indirizzo del
        nostro sito web è: https://www.artedellalettura.it. L’email per il
        contatto è info@artedellalettura.it Nessun identificativo personale
        viene raccolto.
      </p>
    </div>
  );
}

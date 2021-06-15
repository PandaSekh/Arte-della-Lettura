export default function About(): JSX.Element {
  return (
    <div className="m-auto">
      <h2 className="text-center">About</h2>
      <h3 className="my-3">Chi sono</h3>
      <p>{`Ciao, sono Alessio e su questo blog parlo di libri e fumetti. I miei generi preferiti sono distopico, fantasy e narrativa di viaggio.
      Adoro i libri, i videogiochi, programmare, scrivere e spesso mi diverto a criticare cose, come si può notare da questo blog.
      Se volete sapere altro non esitate a contattarmi via ${(
        <a href="mailto:artedellalettura@gmail.com">mail</a>
      )}!`}</p>
      <h3 className="my-3">Contatti</h3>
      <p>Email: artedellalettura@gmail.com</p>
      <p>
        Instagram: <a href="https://www.instagram.com/arte_della_lettura/">instagram.com/arte_della_lettura/</a>
      </p>
      <h3 className="my-3">Disclaimer</h3>
      <p className="italic">
        Questo blog non rappresenta una testata giornalistica in quanto viene aggiornato senza alcuna periodicità . Non
        può pertanto considerarsi un prodotto editoriale ai sensi della legge n° 62 del 7.03.2001. L’autore non è
        responsabile per quanto pubblicato dai lettori nei commenti ad ogni post.Verranno cancellati i commenti ritenuti
        offensivi o lesivi dell’immagine o dell’onorabilità di terzi, di genere spam, razzisti o che contengano dati
        personali non conformi al rispetto delle norme sulla Privacy. Alcuni testi o immagini inserite in questo blog
        sono tratte da internet e, pertanto, considerate di pubblico dominio; qualora la loro pubblicazione violasse
        eventuali diritti d’autore, vogliate comunicarlo via email. Saranno immediatamente rimossi. L’autore del blog
        non è responsabile dei siti collegati tramite link né del loro contenuto in quanto può essere soggetto a
        variazioni nel tempo.
      </p>
    </div>
  );
}

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="m-auto">
      <h2 className="text-center">Privacy Policy</h2>
      <p className="text-center">
        <strong>
          {`Informativa ai sensi dell'art. 13 del Codice della Privacy
Ai sensi dell'articolo 13 del codice della D.Lgs. 196/2003`}
        </strong>
      </p>
      <h3 className="my-3">Analytics</h3>
      <p>{`Arte della Lettura utilzza Google Analytics per tracciare i dati relativi alla navigazione sul sito web. 
      Tutti i dati vengono inviati in modo anonimo e non è possibile risalire all'utente finale da tali dati.`}</p>
      <h3 className="my-3">Commenti</h3>
      <p>{`Arte della Lettura richiede all'utente un indirizzo email quando viene inviato un nuovo commento. L'indirizzo email viene
      successivamente utilizzato solamente per inviare notifiche via email all'utente in caso di risposta al proprio commento.
      Le email vengono crittate e non sono visibili a terzi.
      Le email vengono salvate fintanto che il commento dell'utente rimane sul sito.
      
      Il nome utente richiesto nel form per i commenti non è anonimo e non serve a identificare l'utente.`}</p>
      <h3 className="my-3">Notifiche</h3>
      <span>{`Arte della Lettura utilizza OneSignal per inviare notifiche push. Non inviamo nessuna informazione personale 
      a OneSignal. A questo link la loro policy: `}</span>
      <a href="https://onesignal.com/privacy_policy">Privacy Policy OneSignal</a>.
    </div>
  );
}

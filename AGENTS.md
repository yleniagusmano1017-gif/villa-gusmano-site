# Guida permanente - Villa Gusmano

Questo file contiene le regole e il contesto da conoscere prima di lavorare sul
progetto. Deve essere letto all'inizio di ogni attività e aggiornato quando
cambiano struttura, dati importanti, collegamenti o regole di lavoro.

## Regole prioritarie

### Comunicazione con l'utente

- Parlare sempre in italiano, salvo richiesta diversa.
- Usare parole semplici, frasi brevi e spiegazioni molto chiare.
- Evitare termini tecnici. Quando sono necessari, spiegarli subito con parole
  semplici.
- Spiegare ciò che si sta facendo come se si parlasse a un bambino.
- Prima di modificare i file, dire brevemente cosa è stato capito e cosa verrà
  cambiato.
- Dopo le modifiche, spiegare in modo semplice cosa è stato fatto e quali
  controlli sono stati eseguiti.

### Prima di modificare un file

1. Leggere e analizzare i file interessati.
2. Controllare come sono collegati al resto del progetto.
3. Verificare lo stato Git per non cancellare modifiche già presenti.
4. Decidere le modifiche solo dopo aver capito il funzionamento esistente.
5. Modificare soltanto ciò che serve.
6. Controllare con attenzione il risultato finale.

Non modificare mai un file basandosi soltanto su supposizioni.

## Scopo del sito

Villa Gusmano è un sito statico multilingua per una casa vacanza a Piedimonte
Etneo, in Sicilia.

Gli obiettivi principali sono:

- mostrare la struttura, gli alloggi, i servizi e la posizione;
- ricevere richieste di disponibilità tramite WhatsApp ed email;
- collegare alle pagine Booking.com e Airbnb;
- accogliere visitatori italiani, inglesi e tedeschi;
- aiutare il sito a essere trovato sui motori di ricerca;
- caricare Google Analytics soltanto dopo il consenso dell'utente.

Lo stile visivo usa la fotografia dell'Etna e del giardino, colori naturali,
verde scuro, bianco e sabbia. Il carattere decorativo principale è
`Great Vibes`.

## Tecnologie e comandi

- Strumento principale: Astro `6.3.1`
- Mappa del sito: `@astrojs/sitemap` `3.7.2`
- Versione minima di Node.js: `22.12.0`
- Gestione pacchetti: npm
- Tipo di sito: completamente statico, senza database e senza server interno
- Indirizzo pubblico: `https://www.villagusmano.com`
- Indirizzo locale predefinito: `http://localhost:4321`

Comandi disponibili:

```sh
npm install
npm run dev
npm run build
npm run preview
```

Non sono presenti controlli automatici separati per test, formattazione o
qualità del codice. Dopo una modifica importante bisogna eseguire almeno:

```sh
npm run build
```

## Struttura del progetto

```text
/
|-- AGENTS.md                         Questa guida permanente
|-- astro.config.mjs                  Indirizzo pubblico e mappa del sito
|-- package.json                      Comandi, versioni e dipendenze
|-- package-lock.json                 Versioni esatte installate
|-- tsconfig.json                     Configurazione dei controlli Astro
|-- public/
|   |-- images/hero-villa-gusmano.png Immagine principale
|   |-- fonts/great-vibes.ttf         Carattere decorativo usato
|   |-- fonts/maytra.ttf              Carattere presente ma non usato
|   |-- favicon.ico
|   |-- favicon.svg
|   `-- robots.txt
`-- src/
    |-- components/
    |   |-- HomePage.astro             Pagina principale condivisa
    |   |-- CookieBanner.astro         Avviso e scelta dei cookie
    |   `-- Welcome.astro              Vecchio file Astro non usato
    |-- content/
    |   `-- homeContent.js             Testi italiani, inglesi e tedeschi
    |-- layouts/
    |   |-- BaseLayout.astro           Struttura HTML, SEO e Analytics
    |   `-- Layout.astro               Vecchio file Astro non usato
    |-- pages/
    |   |-- index.astro                Pagina italiana principale `/`
    |   |-- it/index.astro             Pagina italiana `/it/`
    |   |-- en/index.astro             Pagina inglese `/en/`
    |   |-- de/index.astro             Pagina tedesca `/de/`
    |   |-- privacy/index.astro        Privacy policy
    |   `-- cookie-policy/index.astro  Cookie policy
    `-- assets/                        Vecchi file Astro non usati
```

Non modificare manualmente le cartelle generate:

- `.astro/`
- `dist/`
- `node_modules/`

## Come funziona il sito

Le quattro pagine principali usano gli stessi elementi:

- `BaseLayout.astro` prepara la pagina, i dati per i motori di ricerca e
  Analytics.
- `HomePage.astro` mostra tutte le sezioni, i pulsanti, il menu, il footer e
  l'avviso cookie.
- `homeContent.js` contiene tutti i testi nelle tre lingue.
- Ogni file dentro `src/pages/` sceglie la lingua e prepara i collegamenti per
  WhatsApp, email, Booking, Airbnb e Google Maps.

Quando si cambia un testo o si aggiunge un nuovo campo, bisogna aggiornare
italiano, inglese e tedesco mantenendo la stessa struttura.

Struttura obbligatoria di ogni lingua in `homeContent.js`:

```text
seo:            title, description
nav:            why, accommodations, position, location, contacts
hero:           eyebrow, title, subtitle, whatsappCta, emailCta
why:            label, title, cards[3]
accommodations: label, title, units[3]
position:       label, title, intro, cards[6] con immagine, wineries, nearby
location:       label, title, text, button
amenities:      label, title, items[13]
contacts:       label, title, text, whatsapp, email, booking, airbnb
footer:         description, rights
```

## Pagine e collegamenti interni

Pagine pubbliche:

- `/`: italiano principale
- `/it/`: italiano
- `/en/`: inglese
- `/de/`: tedesco
- `/privacy/`: privacy policy in italiano
- `/cookie-policy/`: cookie policy in italiano

La pagina `/` e la pagina `/it/` mostrano gli stessi contenuti italiani e
devono rimanere allineate.

Identificatori usati dal menu:

- `#perche-scegliere`
- `#alloggi`
- `#posizione`
- `#dove-siamo`
- `#contatti`

Non rinominarli senza aggiornare anche tutti i collegamenti del menu e del
footer.

## Dati importanti da non inventare

- Nome: Villa Gusmano
- Luogo: Piedimonte Etneo, Sicilia, Italia
- Telefono: `+39 347 728 0977`
- Numero WhatsApp per i collegamenti: `393477280977`
- Email: `terminegiuseppa@hotmail.it`
- Booking.com: `https://www.booking.com/hotel/it/villa-gusmano.it.html`
- Airbnb: `https://www.airbnb.it/rooms/17999992`
- Ricerca Google Maps: `Villa Gusmano Piedimonte Etneo`
- Codice Google Analytics: `G-557CDYD0HC`

Questi dati sono ripetuti in più file. Prima di cambiarne uno, cercare tutte le
sue copie nel progetto e aggiornarle insieme.

### Alloggi

- Appartamento al primo piano: massimo 4 ospiti.
- Suite panoramica: massimo 2 ospiti.
- Soluzione completa: entrambe le unità, massimo 6 ospiti.
- Le due unità possono essere affittate separate oppure insieme.
- Tutti e tre i riquadri degli alloggi devono indicare il parcheggio privato.

### Tempi di viaggio pubblicati

- Taormina: 15 minuti tramite autostrada
- Spiagge vicine: 10-20 minuti
- Etna: 20 minuti
- Gole dell'Alcantara: 25 minuti
- Cantine dell'Etna: 10-30 minuti
- Catania: 30 minuti tramite autostrada

Spiagge nominate: Fondachello, Marina di Cottone, Giardini Naxos, Letojanni e
Isola Bella.

Cantine nominate: La Gelsomina, Gambino Vini, Cottanera, Donnafugata Etna,
Cantine Tornatore e La Contea.

Sotto i riquadri fotografici deve essere sempre presente una sezione visibile
con la lista delle sei cantine e una breve spiegazione per ciascuna.

Distanze delle cantine dalla Villa:

- La Contea: 8 minuti
- La Gelsomina: 11 minuti
- Gambino Vini: 18 minuti
- Cantine Tornatore: 22 minuti
- Cottanera: 27 minuti
- Donnafugata Etna: 30 minuti

La Contea propone aperitivi al tramonto nel vigneto.

Servizi pubblicati: piscina, giardino con prato, barbecue, Wi-Fi, parcheggio,
aria condizionata, cucina attrezzata, macchina da caffè, bollitore, microonde,
terrazza panoramica, vasca idromassaggio e self check-in.

A pochissimi metri dalla villa si trovano un panificio e un bar gastronomia con
pane fresco, rosticceria e specialità siciliane.

Non cambiare dati aziendali, contatti, capacità, servizi o tempi di viaggio
senza una richiesta esplicita.

## Motori di ricerca e Analytics

`BaseLayout.astro` gestisce:

- titolo e descrizione della pagina;
- indirizzo principale della pagina;
- collegamenti alle versioni italiana, inglese e tedesca;
- anteprime per social network;
- immagine principale condivisa;
- informazioni strutturate su Villa Gusmano;
- caricamento di Google Analytics dopo il consenso.

Ogni pagina che usa `BaseLayout.astro` deve fornire i valori corretti per
`title`, `description`, `lang` e `pathname`.

Questi tre indirizzi devono restare uguali tra loro:

- `site` in `astro.config.mjs`
- `siteUrl` in `BaseLayout.astro`
- indirizzo della mappa del sito in `public/robots.txt`
- dominio personalizzato in `public/CNAME`

La scelta dei cookie viene salvata nel browser con il nome:

```text
villa-cookie-consent
```

Valori possibili:

- `accepted`
- `rejected`

Google Analytics non deve mai caricarsi prima dell'accettazione.

## Regole per le modifiche

- Conservare sempre le modifiche già presenti dell'utente.
- Scrivere i file con la codifica UTF-8, necessaria per accenti, simboli e
  bandiere.
- Cambiare il comportamento condiviso dentro `HomePage.astro` o
  `BaseLayout.astro`, quando possibile.
- Cambiare i testi visibili dentro `homeContent.js`.
- Mantenere uguale la struttura delle tre lingue.
- Non indebolire il controllo del consenso per Google Analytics.
- Non aggiungere codice nel browser se non è davvero necessario.
- Mantenere nomi chiari per i pulsanti composti soltanto da icone.
- Non modificare file o parti del progetto non legati alla richiesta.

## Problemi già conosciuti

Questi punti descrivono lo stato attuale. Possono essere corretti quando
richiesto:

- Contatti e collegamenti esterni sono ripetuti nelle quattro pagine principali.
- Le pagine legali non forniscono `pathname` a `BaseLayout.astro`.
- L'avviso cookie è soltanto in italiano.
- Dopo l'accettazione, Analytics parte al caricamento della pagina successiva.
- Non esiste un pulsante visibile per cambiare la scelta cookie.
- Le pagine legali sono disponibili soltanto in italiano.
- `/` e `/it/` contengono codice molto simile.
- Sono presenti vecchi file Astro non usati.
- I testi legali devono essere controllati da una persona competente.

Quando uno di questi problemi viene corretto, aggiornare anche questa lista.

## Controlli finali

Dopo ogni modifica importante:

1. Eseguire `npm run build`.
2. Controllare che vengano create tutte le sei pagine pubbliche.
3. Controllare che venga creata la mappa del sito.
4. Controllare le tre lingue quando cambiano testi o struttura.
5. Controllare menu e collegamenti quando cambiano le sezioni.
6. Controllare i dati per i motori di ricerca quando cambia `BaseLayout.astro`.
7. Controllare rifiuto e accettazione quando cambiano cookie o Analytics.
8. Controllare il sito sia su schermo grande sia su telefono.
9. Controllare che nessuna modifica precedente dell'utente sia stata cancellata.

## Ultimo controllo completo

Il progetto è stato analizzato completamente il 10 giugno 2026.

In quella data:

- `npm run build` è terminato correttamente;
- sono state create 6 pagine statiche e la mappa del sito;
- erano installati Astro `6.3.1` e `@astrojs/sitemap` `3.7.2`;
- erano già presenti modifiche locali non salvate nella cronologia Git.

I file attuali del progetto hanno sempre più valore di questo riepilogo datato.

export const homeContent = {
  it: {
    seo: {
      title: 'Villa Gusmano Piedimonte Etneo | Casa Vacanza con Piscina',
      description:
        'Villa Gusmano è una casa vacanza con piscina a Piedimonte Etneo, tra Etna, Taormina e mare.'
    },

    nav: {
      why: 'Perché sceglierci',
      accommodations: 'Alloggi',
      position: 'Posizione',
      location: 'Dove siamo',
      contacts: 'Contatti'
    },

    hero: {
      eyebrow: 'Casa vacanza a Piedimonte Etneo',
      title: 'Villa Gusmano',
      subtitle:
        'Una casa vacanza tranquilla e confortevole tra Taormina, il mare e l’Etna, con piscina, giardino, vista panoramica e due unità affittabili separatamente o insieme.',
      whatsappCta: 'Contatta su WhatsApp',
      emailCta: 'Scrivi una email'
    },

    why: {
      label: 'Perché scegliere Villa Gusmano',
      title: 'Relax, comfort e posizione strategica',
      cards: [
        {
          title: 'Posizione ideale',
          text:
            'Posizione comoda per raggiungere Taormina in circa 15 minuti prendendo l’autostrada, Catania in circa 30 minuti, l’Etna in circa 20 minuti e le principali spiagge della zona.'
        },
        {
          title: 'Piscina e giardino',
          text:
            'Spazi esterni con prato, piscina e vista sul mare e sull’Etna, ideali per rilassarsi durante il soggiorno.'
        },
        {
          title: 'Comfort e tranquillità',
          text:
            'Una soluzione accogliente per coppie, famiglie e piccoli gruppi, con self check-in e proprietari presenti al piano terra.'
        }
      ]
    },

    accommodations: {
      label: 'Le unità disponibili',
      title: 'Scegli l’alloggio più adatto al tuo soggiorno',
      units: [
        {
          tag: 'Fino a 4 posti letto',
          title: 'Appartamento al primo piano',
          galleryKey: 'apartment',
          galleryLabel: 'Foto dell’appartamento al primo piano',
          items: [
            'Camera matrimoniale',
            'Divano letto in cucina',
            'Cucina grande attrezzata',
            'Macchina da caffè',
            'BBQ in giardino',
            'Bagno grande con doccia',
            'Accesso a giardino e piscina',
            'Parcheggio privato'
          ],
          ideal:
            'Ideale per coppie, famiglie o piccoli soggiorni in tranquillità.'
        },
        {
          tag: 'Fino a 2 posti letto',
          title: 'Suite panoramica',
          galleryKey: 'suite',
          galleryLabel: 'Foto della suite panoramica',
          items: [
            'Bagno in camera',
            'Vasca idromassaggio',
            'Microonde',
            'Bollitore',
            'Macchina da caffè',
            'BBQ in giardino',
            'Terrazza panoramica',
            'Parcheggio privato'
          ],
          ideal:
            'Ideale per coppie e soggiorni romantici con vista.'
        },
        {
          tag: 'Fino a 6 posti letto',
          title: 'Soluzione completa',
          galleryKey: 'complete',
          galleryLabel: 'Foto della soluzione completa',
          items: [
            'Due unità insieme',
            'Due bagni',
            'Cucina grande attrezzata',
            'Microonde, bollitore e macchina da caffè',
            'Terrazza panoramica',
            'Giardino, piscina e vista Etna',
            'Parcheggio privato'
          ],
          ideal:
            'Ideale per famiglie, gruppi di amici o soggiorni più lunghi.'
        }
      ]
    },

    position: {
      label: 'Posizione e dintorni',
      title: 'Tra Taormina, il mare e l’Etna',
      intro:
        'Villa Gusmano si trova a Piedimonte Etneo, in una posizione comoda per vivere la Sicilia orientale tra natura, mare, borghi e panorami vulcanici.',
      cards: [
        {
          title: 'Taormina',
          time: '15 min',
          note: 'Prendendo l’autostrada',
          image: '/images/taormina-teatro-greco.png'
        },
        {
          title: 'Spiagge vicine',
          time: '10–20 min',
          image: '/images/isola-bella.png',
          items: [
            'Fondachello',
            'Marina di Cottone',
            'Giardini Naxos',
            'Letojanni',
            'Isola Bella'
          ]
        },
        {
          title: 'Etna',
          time: '20 min',
          note: 'Dalla villa',
          image: '/images/etna-tramonto.png'
        },
        {
          title: 'Gole dell’Alcantara',
          time: '25 min',
          note: 'Dalla villa',
          image: '/images/gurne-alcantara.png'
        },
        {
          title: 'Cantine dell’Etna',
          time: '10–30 min',
          image: '/images/cantine-etna.png',
          items: [
            'La Gelsomina · 11 min',
            'Gambino Vini · 18 min',
            'Cottanera · 27 min',
            'Donnafugata Etna · 30 min',
            'Cantine Tornatore · 22 min',
            'La Contea · 8 min'
          ]
        },
        {
          title: 'Catania',
          time: '30 min',
          note: 'Prendendo l’autostrada',
          image: '/images/catania.png'
        }
      ],
      nearby: {
        title: 'Sapori siciliani a pochi passi',
        text:
          'A pochissimi metri da Villa Gusmano si trovano un panificio e un bar gastronomia, ideali per scoprire ogni giorno pane fresco, rosticceria e specialità siciliane.'
      },
      wineries: {
        title: 'Cantine dell’Etna da scoprire',
        intro:
          'Dalla villa è possibile raggiungere diverse cantine del territorio per conoscere i vigneti, i vini vulcanici e i sapori dell’Etna.',
        items: [
          {
            name: 'La Gelsomina · 11 minuti dalla Villa',
            text:
              'Una tenuta immersa nel paesaggio etneo, vicina a Villa Gusmano e ideale per vivere il territorio tra vigneti e natura.'
          },
          {
            name: 'Gambino Vini · 18 minuti dalla Villa',
            text:
              'Una cantina panoramica sul versante nord-orientale dell’Etna, conosciuta per i suoi vigneti in altura e le degustazioni.'
          },
          {
            name: 'Cottanera · 27 minuti dalla Villa',
            text:
              'Una cantina di famiglia sul versante nord dell’Etna, circondata da vigneti coltivati sui terreni vulcanici.'
          },
          {
            name: 'Donnafugata Etna · 30 minuti dalla Villa',
            text:
              'La tenuta etnea di Donnafugata si trova sul versante nord del vulcano e valorizza i vini prodotti dai vigneti di alta quota.'
          },
          {
            name: 'Cantine Tornatore · 22 minuti dalla Villa',
            text:
              'Una storica realtà familiare del versante nord dell’Etna, legata ai vigneti e alla produzione dei vini Etna DOC.'
          },
          {
            name: 'La Contea · 8 minuti dalla Villa',
            text:
              'Una cantina vicina a Villa Gusmano, dove è possibile vivere il vigneto e gustare aperitivi al tramonto immersi nel paesaggio etneo.'
          }
        ]
      }
    },

    location: {
      label: 'Dove siamo',
      title: 'Nel cuore della Sicilia orientale',
      text:
        'Villa Gusmano si trova a Piedimonte Etneo, in una posizione comoda per raggiungere Taormina, il mare, l’Etna, Catania e le principali cantine del territorio.',
      button: 'Apri su Google Maps'
    },

    amenities: {
      label: 'Servizi e comfort',
      title: 'Tutto il necessario per un soggiorno comodo',
      items: [
        'Piscina',
        'Giardino con prato',
        'BBQ / barbecue',
        'Wi-Fi',
        'Parcheggio',
        'Aria condizionata',
        'Cucina attrezzata',
        'Macchina da caffè',
        'Bollitore',
        'Microonde',
        'Terrazza panoramica',
        'Vasca idromassaggio',
        'Self check-in'
      ]
    },

     contacts: {
      label: 'Prenotazioni e contatti',
      title: 'Richiedi disponibilità per Villa Gusmano',
      text:
        'Contattaci direttamente su WhatsApp per ricevere disponibilità, informazioni e la soluzione migliore per il tuo soggiorno tra Etna, Taormina e mare.',
      whatsapp: 'Richiedi disponibilità su WhatsApp',
      email: 'Contattaci via email',
      booking: 'Apri Booking',
      airbnb: 'Apri Airbnb'
    },
     footer: {
      description:
        'Casa vacanza a Piedimonte Etneo tra Taormina, Etna e mare.',
      rights: '© 2026 Villa Gusmano · Tutti i diritti riservati'
    }
  },

  en: {
    seo: {
      title: 'Villa Gusmano Piedimonte Etneo | Holiday Home with Pool',
      description:
        'Villa Gusmano is a holiday home with pool in Piedimonte Etneo, Sicily, between Mount Etna, Taormina and the sea.'
    },

    nav: {
      why: 'Why choose us',
      accommodations: 'Accommodations',
      position: 'Location',
      location: 'Find us',
      contacts: 'Contacts'
    },

    hero: {
      eyebrow: 'Holiday home in Piedimonte Etneo',
      title: 'Villa Gusmano',
      subtitle:
        'A peaceful and comfortable holiday home between Taormina, the sea and Mount Etna, with swimming pool, garden, panoramic views and two units rentable separately or together.',
      whatsappCta: 'Contact us on WhatsApp',
      emailCta: 'Send an email'
    },

    why: {
      label: 'Why choose Villa Gusmano',
      title: 'Relax, comfort and a strategic location',
      cards: [
        {
          title: 'Ideal location',
          text:
            'A convenient location to reach Taormina in about 15 minutes by motorway, Catania in about 30 minutes, Mount Etna in about 20 minutes and the main beaches in the area.'
        },
        {
          title: 'Pool and garden',
          text:
            'Outdoor spaces with lawn, swimming pool and views of the sea and Mount Etna, ideal for relaxing during your stay.'
        },
        {
          title: 'Comfort and peace',
          text:
            'A welcoming solution for couples, families and small groups, with self check-in and owners living on the ground floor.'
        }
      ]
    },

    accommodations: {
      label: 'Available units',
      title: 'Choose the accommodation that best suits your stay',
      units: [
        {
          tag: 'Up to 4 guests',
          title: 'First floor apartment',
          galleryKey: 'apartment',
          galleryLabel: 'Photos of the first floor apartment',
          items: [
            'Double bedroom',
            'Sofa bed in the kitchen',
            'Large equipped kitchen',
            'Coffee machine',
            'BBQ in the garden',
            'Large bathroom with shower',
            'Access to garden and pool',
            'Private parking'
          ],
          ideal:
            'Ideal for couples, families or quiet short stays.'
        },
        {
          tag: 'Up to 2 guests',
          title: 'Panoramic suite',
          galleryKey: 'suite',
          galleryLabel: 'Photos of the panoramic suite',
          items: [
            'En-suite bathroom',
            'Jacuzzi',
            'Microwave',
            'Kettle',
            'Coffee machine',
            'BBQ in the garden',
            'Panoramic terrace',
            'Private parking'
          ],
          ideal:
            'Ideal for couples and romantic stays with a view.'
        },
        {
          tag: 'Up to 6 guests',
          title: 'Complete solution',
          galleryKey: 'complete',
          galleryLabel: 'Photos of the complete solution',
          items: [
            'Two units together',
            'Two bathrooms',
            'Large equipped kitchen',
            'Microwave, kettle and coffee machine',
            'Panoramic terrace',
            'Garden, pool and Mount Etna view',
            'Private parking'
          ],
          ideal:
            'Ideal for families, groups of friends or longer stays.'
        }
      ]
    },

    position: {
      label: 'Location and surroundings',
      title: 'Between Taormina, the sea and Mount Etna',
      intro:
        'Villa Gusmano is located in Piedimonte Etneo, in a convenient position to experience eastern Sicily among nature, sea, villages and volcanic landscapes.',
      cards: [
        {
          title: 'Taormina',
          time: '15 min',
          note: 'By motorway',
          image: '/images/taormina-teatro-greco.png'
        },
        {
          title: 'Nearby beaches',
          time: '10–20 min',
          image: '/images/isola-bella.png',
          items: [
            'Fondachello',
            'Marina di Cottone',
            'Giardini Naxos',
            'Letojanni',
            'Isola Bella'
          ]
        },
        {
          title: 'Mount Etna',
          time: '20 min',
          note: 'From the villa',
          image: '/images/etna-tramonto.png'
        },
        {
          title: 'Alcantara Gorges',
          time: '25 min',
          note: 'From the villa',
          image: '/images/gurne-alcantara.png'
        },
        {
          title: 'Etna wineries',
          time: '10–30 min',
          image: '/images/cantine-etna.png',
          items: [
            'La Gelsomina · 11 min',
            'Gambino Vini · 18 min',
            'Cottanera · 27 min',
            'Donnafugata Etna · 30 min',
            'Cantine Tornatore · 22 min',
            'La Contea · 8 min'
          ]
        },
        {
          title: 'Catania',
          time: '30 min',
          note: 'By motorway',
          image: '/images/catania.png'
        }
      ],
      nearby: {
        title: 'Sicilian flavours just a few steps away',
        text:
          'Just a few metres from Villa Gusmano, you will find a bakery and a café-deli, ideal for enjoying fresh bread, savoury snacks and Sicilian specialities every day.'
      },
      wineries: {
        title: 'Etna wineries to discover',
        intro:
          'Several local wineries can be reached from the villa, offering a chance to discover vineyards, volcanic wines and the flavours of Mount Etna.',
        items: [
          {
            name: 'La Gelsomina · 11 minutes from the Villa',
            text:
              'An estate surrounded by the Etna landscape, close to Villa Gusmano and ideal for enjoying vineyards and nature.'
          },
          {
            name: 'Gambino Vini · 18 minutes from the Villa',
            text:
              'A panoramic winery on Etna’s north-eastern slope, known for its high-altitude vineyards and tastings.'
          },
          {
            name: 'Cottanera · 27 minutes from the Villa',
            text:
              'A family winery on Etna’s northern slope, surrounded by vineyards cultivated on volcanic soil.'
          },
          {
            name: 'Donnafugata Etna · 30 minutes from the Villa',
            text:
              'Donnafugata’s Etna estate lies on the volcano’s northern slope and celebrates wines produced from high-altitude vineyards.'
          },
          {
            name: 'Cantine Tornatore · 22 minutes from the Villa',
            text:
              'A historic family winery on Etna’s northern slope, closely connected to its vineyards and Etna DOC wines.'
          },
          {
            name: 'La Contea · 8 minutes from the Villa',
            text:
              'A winery close to Villa Gusmano, where guests can enjoy the vineyard and sunset aperitifs surrounded by the Etna landscape.'
          }
        ]
      }
    },

    location: {
      label: 'Find us',
      title: 'In the heart of eastern Sicily',
      text:
        'Villa Gusmano is located in Piedimonte Etneo, in a convenient position to reach Taormina, the sea, Mount Etna, Catania and the main wineries in the area.',
      button: 'Open on Google Maps'
    },

    amenities: {
      label: 'Services and comfort',
      title: 'Everything you need for a comfortable stay',
      items: [
        'Swimming pool',
        'Garden with lawn',
        'BBQ / barbecue',
        'Wi-Fi',
        'Parking',
        'Air conditioning',
        'Equipped kitchen',
        'Coffee machine',
        'kettle',
        'Microwave',
        'Panoramic terrace',
        'Jacuzzi',
        'Self check-in'
      ]
    },

    contacts: {
      label: 'Bookings and contacts',
      title: 'Request availability for Villa Gusmano',
      text:
        'Contact us directly on WhatsApp to receive availability, information and the best solution for your stay between Etna, Taormina and the sea.',
      whatsapp: 'Check availability on WhatsApp',
      email: 'Contact us by email',
      booking: 'Open Booking',
      airbnb: 'Open Airbnb'
    },

    footer: {
      description:
        'Holiday home in Piedimonte Etneo between Taormina, Mount Etna and the sea.',
      rights: '© 2026 Villa Gusmano · All rights reserved'
    }
  },

  de: {
    seo: {
      title: 'Villa Gusmano Piedimonte Etneo | Ferienhaus mit Pool',
      description:
        'Villa Gusmano ist ein Ferienhaus mit Pool in Piedimonte Etneo, Sizilien, zwischen Ätna, Taormina und Meer.'
    },

    nav: {
      why: 'Warum wir',
      accommodations: 'Unterkünfte',
      position: 'Lage',
      location: 'Anfahrt',
      contacts: 'Kontakt'
    },

    hero: {
      eyebrow: 'Ferienhaus in Piedimonte Etneo',
      title: 'Villa Gusmano',
      subtitle:
        'Ein ruhiges und komfortables Ferienhaus zwischen Taormina, dem Meer und dem Ätna, mit Pool, Garten, Panoramablick und zwei separat oder zusammen mietbaren Wohneinheiten.',
      whatsappCta: 'Über WhatsApp kontaktieren',
      emailCta: 'E-Mail schreiben'
    },

    why: {
      label: 'Warum Villa Gusmano wählen',
      title: 'Entspannung, Komfort und strategische Lage',
      cards: [
        {
          title: 'Ideale Lage',
          text:
            'Eine praktische Lage, um Taormina in etwa 15 Minuten über die Autobahn, Catania in etwa 30 Minuten, den Ätna in etwa 20 Minuten und die wichtigsten Strände der Umgebung zu erreichen.'
        },
        {
          title: 'Pool und Garten',
          text:
            'Außenbereiche mit Rasen, Pool und Blick auf das Meer und den Ätna, ideal zum Entspannen während des Aufenthalts.'
        },
        {
          title: 'Komfort und Ruhe',
          text:
            'Eine einladende Lösung für Paare, Familien und kleine Gruppen, mit Self Check-in und Eigentümern im Erdgeschoss.'
        }
      ]
    },

    accommodations: {
      label: 'Verfügbare Einheiten',
      title: 'Wählen Sie die passende Unterkunft für Ihren Aufenthalt',
      units: [
        {
          tag: 'Bis zu 4 Gäste',
          title: 'Apartment im ersten Stock',
          galleryKey: 'apartment',
          galleryLabel: 'Fotos des Apartments im ersten Stock',
          items: [
            'Doppelzimmer',
            'Schlafsofa in der Küche',
            'Große ausgestattete Küche',
            'Kaffeemaschine',
            'BBQ im Garten',
            'Großes Bad mit Dusche',
            'Zugang zu Garten und Pool',
            'Privatparkplatz'
          ],
          ideal:
            'Ideal für Paare, Familien oder ruhige Kurzaufenthalte.'
        },
        {
          tag: 'Bis zu 2 Gäste',
          title: 'Panorama-Suite',
          galleryKey: 'suite',
          galleryLabel: 'Fotos der Panorama-Suite',
          items: [
            'Bad im Zimmer',
            'Whirlpool',
            'Mikrowelle',
            'Wasserkocher',
            'Kaffeemaschine',
            'BBQ im Garten',
            'Panoramaterrasse',
            'Privatparkplatz'
          ],
          ideal:
            'Ideal für Paare und romantische Aufenthalte mit Aussicht.'
        },
        {
          tag: 'Bis zu 6 Gäste',
          title: 'Komplettlösung',
          galleryKey: 'complete',
          galleryLabel: 'Fotos der Komplettlösung',
          items: [
            'Zwei Einheiten zusammen',
            'Zwei Badezimmer',
            'Große ausgestattete Küche',
            'Mikrowelle, Wasserkocher und Kaffeemaschine',
            'Panoramaterrasse',
            'Garten, Pool und Ätna-Blick',
            'Privatparkplatz'
          ],
          ideal:
            'Ideal für Familien, Freundesgruppen oder längere Aufenthalte.'
        }
      ]
    },

    position: {
      label: 'Lage und Umgebung',
      title: 'Zwischen Taormina, dem Meer und dem Ätna',
      intro:
        'Villa Gusmano befindet sich in Piedimonte Etneo, in einer günstigen Lage, um Ostsizilien zwischen Natur, Meer, Dörfern und Vulkanlandschaften zu erleben.',
      cards: [
        {
          title: 'Taormina',
          time: '15 Min.',
          note: 'Über die Autobahn',
          image: '/images/taormina-teatro-greco.png'
        },
        {
          title: 'Nahe Strände',
          time: '10–20 Min.',
          image: '/images/isola-bella.png',
          items: [
            'Fondachello',
            'Marina di Cottone',
            'Giardini Naxos',
            'Letojanni',
            'Isola Bella'
          ]
        },
        {
          title: 'Ätna',
          time: '20 Min.',
          note: 'Von der Villa',
          image: '/images/etna-tramonto.png'
        },
        {
          title: 'Alcantara-Schluchten',
          time: '25 Min.',
          note: 'Von der Villa',
          image: '/images/gurne-alcantara.png'
        },
        {
          title: 'Ätna-Weingüter',
          time: '10–30 Min.',
          image: '/images/cantine-etna.png',
          items: [
            'La Gelsomina · 11 Min.',
            'Gambino Vini · 18 Min.',
            'Cottanera · 27 Min.',
            'Donnafugata Etna · 30 Min.',
            'Cantine Tornatore · 22 Min.',
            'La Contea · 8 Min.'
          ]
        },
        {
          title: 'Catania',
          time: '30 Min.',
          note: 'Über die Autobahn',
          image: '/images/catania.png'
        }
      ],
      nearby: {
        title: 'Sizilianische Spezialitäten nur wenige Schritte entfernt',
        text:
          'Nur wenige Meter von Villa Gusmano entfernt befinden sich eine Bäckerei und eine Café-Gastronomie, ideal für frisches Brot, herzhafte Snacks und sizilianische Spezialitäten.'
      },
      wineries: {
        title: 'Ätna-Weingüter zum Entdecken',
        intro:
          'Von der Villa aus sind mehrere Weingüter der Region erreichbar, um Weinberge, vulkanische Weine und die Aromen des Ätna kennenzulernen.',
        items: [
          {
            name: 'La Gelsomina · 11 Minuten von der Villa entfernt',
            text:
              'Ein Gut inmitten der Ätna-Landschaft, nahe Villa Gusmano und ideal, um Weinberge und Natur zu erleben.'
          },
          {
            name: 'Gambino Vini · 18 Minuten von der Villa entfernt',
            text:
              'Ein Panorama-Weingut am nordöstlichen Hang des Ätna, bekannt für hoch gelegene Weinberge und Verkostungen.'
          },
          {
            name: 'Cottanera · 27 Minuten von der Villa entfernt',
            text:
              'Ein familiengeführtes Weingut am Nordhang des Ätna, umgeben von Weinbergen auf vulkanischem Boden.'
          },
          {
            name: 'Donnafugata Etna · 30 Minuten von der Villa entfernt',
            text:
              'Das Ätna-Gut von Donnafugata liegt am Nordhang des Vulkans und widmet sich Weinen aus hoch gelegenen Weinbergen.'
          },
          {
            name: 'Cantine Tornatore · 22 Minuten von der Villa entfernt',
            text:
              'Ein historisches Familienweingut am Nordhang des Ätna, eng verbunden mit seinen Weinbergen und Etna-DOC-Weinen.'
          },
          {
            name: 'La Contea · 8 Minuten von der Villa entfernt',
            text:
              'Ein Weingut nahe Villa Gusmano, wo Gäste den Weinberg erleben und Aperitifs bei Sonnenuntergang in der Ätna-Landschaft genießen können.'
          }
        ]
      }
    },

    location: {
      label: 'Anfahrt',
      title: 'Im Herzen Ostsiziliens',
      text:
        'Villa Gusmano liegt in Piedimonte Etneo, in einer günstigen Position, um Taormina, das Meer, den Ätna, Catania und die wichtigsten Weingüter der Region zu erreichen.',
      button: 'Auf Google Maps öffnen'
    },

    amenities: {
      label: 'Service und Komfort',
      title: 'Alles, was Sie für einen komfortablen Aufenthalt brauchen',
      items: [
        'Pool',
        'Garten mit Rasen',
        'BBQ / Grill',
        'Wi-Fi',
        'Parkplatz',
        'Klimaanlage',
        'Ausgestattete Küche',
        'Kaffeemaschine',
        'Wasserkocher',
        'Mikrowelle',
        'Panoramaterrasse',
        'Whirlpool',
        'Self Check-in'
      ]
    },

    contacts: {
      label: 'Buchungen und Kontakt',
      title: 'Verfügbarkeit für Villa Gusmano anfragen',
      text:
        'Kontaktieren Sie uns direkt über WhatsApp, um Verfügbarkeit, Informationen und die beste Lösung für Ihren Aufenthalt zwischen Ätna, Taormina und Meer zu erhalten.',
      whatsapp: 'Verfügbarkeit auf WhatsApp anfragen',
      email: 'Per E-Mail kontaktieren',
      booking: 'Booking öffnen',
      airbnb: 'Airbnb öffnen'
    },

    footer: {
      description:
        'Ferienhaus in Piedimonte Etneo zwischen Taormina, Ätna und Meer.',
      rights: '© 2026 Villa Gusmano · Alle Rechte vorbehalten'
    }
  }
};

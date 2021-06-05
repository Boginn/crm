


import services from '../services/services.js'

export default {

cases: [
  {
    id: 1,
    name: `Murder in town - ${services.getDate()} - Murder Road 3`,
    address: 'Murder Road 3',
    postcode: '111',
    committed: services.getDate(),
    committedValue: 1622320796000,
    crimeType: 'Murder',
    date: services.getDate(),
    dateValue: 1622320796000,
    shortDesc: 'A murder she wrote',
    severity: 6,
    caseOpen: true,
    notes: [],
    victims: [
      {
        id: 1,
        crimeId: 1,
        name: "Hrógmar Hermanns",
        address: "Manslaughter Way",
        phone: "5553212",
        age: 43,
      },
      {
        id: 2,
        crimeId: 1,
        name: "Hallbera Halldórs",
        address: "Manslaughter Avenue",
        phone: "5554312",
        age: 19,
      },
    ],
    suspects: [
      {
        id: 1,
        crimeId: 1,
        name: "Glæpur Leifsson",
        address: "Útlönd",
        phone: "5553212",
        age: 43,
        hasBeenToPrison: true,
        note: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      },
      {
        id: 2,
        crimeId: 1,
        name: "Ljóti Kallinn",
        address: "Akureyri",
        phone: "126897",
        age: 28,
        hasBeenToPrison: false,
        note: 'The definition of a description is a statement that gives details about someone or something.',
      },
  
    ],
  },
  {
    id: 2,
    name: `Robbery in school - ${services.getDate()} - School Road 7`,
    address: 'School Road 7',
    postcode: '111',
    committed: services.getDate(),
    committedValue: 1200000796000,
    crimeType: 'Robbery',
    date: services.getDate(),
    dateValue: 1677320796000,
    shortDesc: 'A robbery she wrote',
    severity: 3,
    caseOpen: true,
    notes: [],
    victims: [
      {
        id: 1,
        crimeId: 2,
        name: "Teacher Perkins",
        address: "Teach Road 2",
        phone: "5553212",
        age: 45,
      },

    ],
    suspects: [
      {
        id: 1,
        crimeId: 2,
        name: "Finneus Thistlebrow",
        address: "Student House",
        phone: "5553212",
        age: 17,
        hasBeenToPrison: false,
        note: 'The definition of a description is a statement that gives details about someone or something.',
      },
  
    ],
  },
  {
    id: 3,
    name: `Lambslaughter - ${services.getDate()} - Lamborgaratígur 59`,
    address: 'Lamborgaratígur 59',
    postcode: '111',
    committed: services.getDate(),
    committedValue: 1522399907000,
    crimeType: 'Murder',
    date: services.getDate(),
    dateValue: 150020796000,
    shortDesc: 'Keyrt á lamb',
    severity: 10,
    caseOpen: false,
    notes: [
      { body: 'sæll vinur menn að myrða lömb hérna hvað ertu að segja',
      user: 'Lárus Lögg',
      date: services.getDateWithHour(),

    },
  ],
    victims: [
      {
        id: 1,
        crimeId: 3,
        name: "lamb",
        address: "lambavegur",
        phone: "8979523",
        age: 3,
      },

    ],
    suspects: [
      {
        id: 1,
        crimeId: 3,
        name: "krimms",
        address: "jesss",
        phone: "64846524",
        age: 133,
        hasBeenToPrison: false,
        note: 'The definition of a description is a statement that gives details about someone or something.',
      },
  
    ],
  },
  
],

criminals: [
  {
    id: 1,
    name: "Kio Briggs",
    address: "Laufrimi 13",
    age: 56,
    phone: "5552211",
    hasBeenToPrison: false,
    note: "Stuðningsmaður Rottweiler hunda",
  },
  {
    id: 2,
    name: "Lalli Johns",
    address: "Laugarvegur 33",
    age: 60,
    phone: "5553322",
    hasBeenToPrison: true,
    note: "Mest elsksaði smákrimminn",
  },
],

tasks: [
  {
    id: 1,
    date: services.getDateWithHour(),
    name: "Taka viðtal við Jónas varðandi morð",
    assigned: "REK13",
    status: false,
  },
  {
    id: 2,
    date: services.getDateWithHour(),
    name: "Athuga hjá rannsóknarstofu hvort að sýni hefur komið til baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka og baka",
    assigned: "REK13",
    status: false,
  },
  {
    id: 3,
    date: services.getDateWithHour(),
    name: "Finna þrjá karlmenn í line-up",
    assigned: "REK10",
    status: true,
  },
  {
    id: 4,
    date: services.getDateWithHour(),
    name: "Gefa út sekt vegna ölvunar-akstur",
    assigned: "REK13",
    status: false,
  },
  {
    id: 5,
    date: services.getDateWithHour(),
    name: "Fá sér kakó",
    assigned: "REK69",
    status: false,
  },
],

roster: [
  {
    id: 1,
    username: 'ibbi',
    password: "asd",
    name: "Ívar boss",
    badge: "REK13",
    email: "ibbi@logga.is",
    phone: "5752299",
    active: true,
    admin: true,
    delegate: true,
  },
  {
    id: 2,
    username: 'lalli',
    password: "qwe",
    name: "Lárus Lögg",
    badge: "REK12",
    email: "Lalli@logga.is",
    phone: "5552299",
    active: true,
    admin: false,
    delegate: false,
  },
  {
    id: 3,
    username: 'nonni',
    password: "zxc",
    name: "Nonni Svín",
    badge: "REK10",
    email: "nonni@logga.is",
    phone: "5552299",
    active: false,
    admin: false,
    delegate: false,
  },
  {
    id: 4,
    username: 'fannar',
    password: "ntv",
    name: "Fannar",
    badge: "REK69",
    email: "fannar@logga.is",
    phone: "512345",
    active: true,
    admin: false,
    delegate: true,
  },

],

reports: [
  {

    id: 1,
    crimeId: 3,
    badge: 'REK10',
    body: 'Elsku besta lambið kvaddi í morgun',
  },

  {

    id: 2,
    crimeId: 2,
    badge: 'REK12',
    body: 'Nú meira ránið hm',
  },
  {

    id: 3,
    crimeId: 1,
    badge: 'REK13',
    body: 'Sannkallað morð',
  },
  {

    id: 4,
    crimeId: 3,
    badge: 'REK12',
    body: 'Hvíl í friði',
  },
  {

    id: 5,
    crimeId: 3,
    badge: 'REK69',
    body: ':(',
  },
],

}

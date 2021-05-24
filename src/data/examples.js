


import services from '../services/services.js'

export default {

crimes: [
  {
    id: 1,
    name: 'Murder in town',
    address: 'Murder Road 3',
    committed: services.getDateString(),
    crimeType: 'Murder',
    date: services.getDate(),
    shortDesc: 'A murder she wrote',
    urgency: 9,
    caseOpen: true,
    notes: ['notelist'],
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
      },
  
    ],
  },
  {
    id: 2,
    name: 'Robbery in school',
    address: 'School Road 3',
    committed: services.getDateString(),
    crimeType: 'Robbery',
    date: services.getDate(),
    shortDesc: 'A robbery she wrote',
    urgency: 9,
    caseOpen: true,
    notes: ['notelist'],
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
    name: "Taka viðtal við Jónas varðandi morð",
    assigned: "REK13",
    status: false,
  },
  {
    id: 2,
    name: "Athuga hjá rannsóknarstofu hvort að sýni hefur komið til baka",
    assigned: "REK13",
    status: false,
  },
  {
    id: 3,
    name: "Finna þrjá karlmenn í line-up",
    assigned: "REK10",
    status: true,
  },
  {
    id: 4,
    name: "Gefa út sekt vegna ölvunar-akstur",
    assigned: "REK13",
    status: false,
  },
],

users: [
  {
    id: 1,
    username: 'ibbi',
    password: "asd",
    name: "Ívar yfirlögga",
    badge: "REK13",
    email: "ibbi@logga.is",
    phone: "5752299",
    active: true,
    admin: true,
  },
  {
    id: 2,
    username: 'lalli',
    password: "qwe",
    name: "Lárus Lögga",
    badge: "REK12",
    email: "Lalli@logga.is",
    phone: "5552299",
    active: true,
    admin: false,
  },
  {
    id: 2,
    username: 'nonni',
    password: "zxc",
    name: "Nonni Svín",
    badge: "REK10",
    email: "nonni@logga.is",
    phone: "5552299",
    active: true,
    admin: false,
  },
  {
    id: 2,
    username: 'fannar',
    password: "ntv",
    name: "Fannar Leynilögga",
    badge: "REK69",
    email: "fannar@logga.is",
    phone: "512345",
    active: true,
    admin: true,
  },

],

}

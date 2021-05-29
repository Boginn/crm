class Person {
  name = "";
  address = "";
  phone = "";
  age = "";
}

export default {
  Victim: class extends Person {
    id;
    crimeId;

    constructor(id, crimeId) {
      super();
      this.id = id;
      this.crimeId = crimeId;
    }
  },

  Suspect: class extends Person {
    id;
    crimeId;
    suspect = true;
    hasBeenToPrison = false;
    note = "";

    constructor(id) {
      super();
      this.id = id;
    }
  },

  crimeTypes: [
    "Robbery",
    "Murder",
    "Mugging",
    "Assault",
    "Battery",
    "Indecent Exposure",
    "Minor",
    "Other",
  ],

  // openCases = [
  //   {
  //     id: 1,
  //     name: "Morð 14.12.2020 Rvk",
  //     shortDescription: "Sutt lýsing um glæp",
  //     severness: 10,
  //   },
  //   {
  //     id: 2,
  //     name: "Morð 14.12.2020 Rvk",
  //     shortDescription: "Sutt lýsing um glæp",
  //     severness: 10,
  //   },
  // ];
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

  crimes: [
    {
      id: 1,
      name: "Rán 11.12.2020 Bæjarbakarí Mosfellsbær",
      address: "Horngata 3",
      crimeType: "Rán",
      date: "11.12.2020",
      shortDesc: "Stutt lýsing",
      severness: 7,
      notes: [
        {
          id: 1,
          crimeId: 1,
          body:
            "Hermann hringdi og lét vita að ræningjarnir náðu að stela 5þ kr.",
          date: "12.12.2020",
        },
        {
          id: 2,
          crimeId: 1,
          body: "Jón spæjó heldur að þeir hafi verið með inside-man.",
          date: "14.12.2020",
        },
      ],
      victims: [
        {
          id: 1,
          crimeId: 1,
          name: "Hrógmar Hermanns",
          address: "Dúfnahólar 10",
          phone: "5553212",
          age: 43,
        },
        {
          id: 2,
          crimeId: 1,
          name: "Hallbera Halldórs",
          address: "Hafnarbakki 11",
          phone: "5554312",
          age: 19,
        },
      ],
      suspect: [{ id: 1, name: "Glanni glæpon" }],
      caseStatus: true,
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
      note: "",
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

  reports: [
    {
      id: 1,
      caseId: 1,
      userName: "Lárus Lögga",
      body: "Öll skýrslan. loads of text..",
    },
    {
      id: 2,
      caseId: 2,
      userName: "Lárus Lögga",
      body: "Öll skýrslan. loads of text..",
    },
  ],

  users: [
    {
      id: 1,
      name: "Lárus Lögga",
      badge: "REK12",
      email: "Lalli@logga.is",
      phone: "5552299",
      password: "SuperPassword1",
      active: true,
      admin: false,
    },
    {
      id: 1,
      name: "Ívar yfirlögga",
      badge: "REK13",
      email: "ibbi@logga.is",
      phone: "5752299",
      password: "MoreSuperPassword1",
      active: true,
      admin: true,
    },
  ],
};

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

    constructor(id, crimeId) {
      super();
      this.id = id;
      this.crimeId = crimeId;
    }
  },

  Criminal: class extends Person {
    id;
    crimeId;
    hasBeenToPrison = false;
    note = "";

    constructor(id) {
      super();
      this.id = id;
    }
  },

  Task: class Task {
    id;
    name = '';
    assigned = '';
    status = false;
    date = undefined;

    constructor(id, date) {
      this.id = id;
      this.date = date;

    }
  },

  Crime: class Crime {
    id;
    name;
    address;
    postcode;
    crimeType;
    committed;
    committedValue;
    date;
    dateValue;
    shortDesc;
    severity;
    caseOpen = true;
    notes = [];
    victims = [];
    suspects = [];

    constructor(id, date) {
      this.id = id;
      this.date = date;

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

  options: [
    {
      name: "Perps",
      path: "perps",
      image: require("@/assets/file.png"),
      icon: "mdi-account-cowboy-hat",
      color: "fifth",
    },
    {
      name: "Tasks",
      path: "tasks",
      image: require("@/assets/tasks.png"),
      icon: "mdi-folder-table",
      color: "fifth",
    },
    {
      name: "Cases",
      path: "cases",
      image: require("@/assets/cases.png"),
      icon: "mdi-file-multiple",
      color: "fifth",
    },
    {
      name: "Report",
      path: "report",
      image: require("@/assets/report.png"),
      icon: "mdi-file-document-edit",
      color: "seventh",
    },
    {
      name: "File",
      path: "file",
      image: require("@/assets/file.png"),
      icon: "mdi-file-upload",
      color: "seventh",
    },
  ],

  otherOptions: [
    {
      name: "New Task",
      path: false,
      icon: "mdi-folder",
      color: "secondary",
    },
    {
      name: "Add Criminal",
      path: false,
      icon: "mdi-account-cowboy-hat",
      color: "secondary",
    },
  ],

  headers: {
    cases: [
      { text: "Name", value: "name" },
      // { text: "Address", value: "address" },
      { text: "Committed on", value: "committedValue" },
      { text: "Filed on", value: "dateValue" },
      { text: "Severity", value: "severity" },
      { text: "Open", value: "caseOpen", sortable: false, align: "center" },
    ],
    tasks: [
      { text: "", value: "date"},
      { text: "Name", value: "name", sortable: false },
      { text: "Assigned", value: "assigned", },
      { text: "Completed", value: "status",  align: "center" },
    ],
    perps: [
      { text: "Name", value: "name",  },
      { text: "Address", value: "address" },
      { text: "Age", value: "age" },
      { text: "Phone", value: "phone", sortable: false },
    ],
  },

  // tasks: [
  //   {
  //     id: 1,
  //     name: "Taka viðtal við Jónas varðandi morð",
  //     assigned: "REK13",
  //     status: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Athuga hjá rannsóknarstofu hvort að sýni hefur komið til baka",
  //     assigned: "REK13",
  //     status: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Finna þrjá karlmenn í line-up",
  //     assigned: "REK10",
  //     status: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Gefa út sekt vegna ölvunar-akstur",
  //     assigned: "REK13",
  //     status: false,
  //   },
  // ],

  // crimes: [
  //   {
  //     id: 1,
  //     name: "Rán 11.12.2020 Bæjarbakarí Mosfellsbær",
  //     address: "Horngata 3",
  //     crimeType: "Rán",
  //     date: "11.12.2020",
  //     shortDesc: "Stutt lýsing",
  //     severness: 7,
  //     notes: [
  //       {
  //         id: 1,
  //         crimeId: 1,
  //         body:
  //           "Hermann hringdi og lét vita að ræningjarnir náðu að stela 5þ kr.",
  //         date: "12.12.2020",
  //       },
  //       {
  //         id: 2,
  //         crimeId: 1,
  //         body: "Jón spæjó heldur að þeir hafi verið með inside-man.",
  //         date: "14.12.2020",
  //       },
  //     ],
  //     victims: [
  //       {
  //         id: 1,
  //         crimeId: 1,
  //         name: "Hrógmar Hermanns",
  //         address: "Dúfnahólar 10",
  //         phone: "5553212",
  //         age: 43,
  //       },
  //       {
  //         id: 2,
  //         crimeId: 1,
  //         name: "Hallbera Halldórs",
  //         address: "Hafnarbakki 11",
  //         phone: "5554312",
  //         age: 19,
  //       },
  //     ],
  //     suspect: [{ id: 1, name: "Glanni glæpon" }],
  //     caseStatus: true,
  //   },
  // ],

  // reports: [
  //   {
  //     id: 1,
  //     caseId: 1,
  //     userName: "Lárus Lögga",
  //     body: "Öll skýrslan. loads of text..",
  //   },
  //   {
  //     id: 2,
  //     caseId: 2,
  //     userName: "Lárus Lögga",
  //     body: "Öll skýrslan. loads of text..",
  //   },
  // ],
};

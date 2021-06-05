class Person {
  name = "";
  address = "";
  phone = "";
  age = "";
}

export default {
  User: class {
    id;
    username;
    password;
    name;
    badge;
    email;
    phone;
    active = true;
    admin = false;
    delegate = false;

    constructor(id) {
      this.id = id;
    }
  },

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

  Report: class Report {
  
    id;
    crimeId;
    badge;
    body;
  
    constructor(id, crimeId) {
      this.id = id;
      this.crimeId = crimeId;

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



  publicRoutes: [
    {
      name: "Perps",
      path: "perps",
      icon: "mdi-account-cowboy-hat",
      color: "fifth",
      public: true,
    },
    {
      name: "Tasks",
      path: "tasks",
      icon: "mdi-folder-table",
      color: "fifth",
      public: true,
    },
    {
      name: "Cases",
      path: "cases",
      icon: "mdi-file-multiple",
      color: "fifth",
      public: true,
    },
    {
      name: "Report",
      path: "report",
      icon: "mdi-file-document-edit",
      color: "seventh",
      public: true,
    },
    {
      name: "File",
      path: "file",
      icon: "mdi-file-upload",
      color: "seventh",
      public: true,
    },

  ],

  dialogRoutes: [
    {
      name: "New Task",
      path: false,
      icon: "mdi-folder",
      color: "secondary",
      public: true,
    },
    {
      name: "Add Criminal",
      path: false,
      icon: "mdi-account-cowboy-hat",
      color: "secondary",
      public: true,
    },
    {
      name: "New User",
      path: false,
      icon: "mdi-account",
      color: "secondary",
      public: false,
    },
  ],

  adminRoutes: [
    {
      name: "Roster",
      path: "roster",
      icon: "mdi-account-group",
      color: "tertiary",
      public: false,
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
};

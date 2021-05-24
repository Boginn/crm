export default class Crime {
  id = Number;
  name = String;
  address = String;
  committed = undefined;
  crimeType = String;
  shortDesc = String;
  severity = Number;
  
  caseOpen = Boolean;
  date = undefined;

  notes = [
    {
      id: Number,
      crimeId: Number,
      content: String,
      date: undefined,
    },
  ];

  suspects = [{ id: Number, name: String }];

  victims = [
    {
      id: Number,
      crimeId: Number,
      name: String,
      address: String,
      phone: Number,
      age: Number,
    },
  ];

  constructor(
    id,

  ) {
      this.id = id;
    // this.level = level;
  }

}
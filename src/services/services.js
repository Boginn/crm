// let dateString = new Date().toLocaleDateString().split("/");

export default {
  getDate() {
    return new Date().toGMTString().substr(0, 17);

  },
  getDateWithHour() {
    return new Date().toGMTString().substr(0, 25);

  },
  getDateFromString(str) {
    return new Date(str).toGMTString().substr(0, 17);

  },



  rules: {
    
    name: [
      (v) => !!v || "A name is required",
      (v) => (v && v.length <= 16) || "Name must be less than 10 characters",
    ],
    description: [
      (v) => !!v || "A description is required",
      (v) =>
        (v && v.length <= 90) || "Description must be less than 90 characters",
    ],
    default: [(v) => !!v || "Item is required"],
  },
};

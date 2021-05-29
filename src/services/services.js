let dateString = new Date().toLocaleDateString().split("/");

export default {
  getDate() {
    return new Date().toGMTString().substr(0, 25);

  },

  getDateString() {

    return `${dateString[1]}/${dateString[0]}/${dateString[2]}`;
  },

  convert(date) {
    console.log(date);
    let result = date.split("-");

    return `${result[2]}/${result[1]}/${result[0]}`;
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

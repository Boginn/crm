let dateString = new Date().toLocaleDateString().split("/");

export default {
  getDate() {
    return new Date();
    // return new Date().toISOString().substr(0, 10);
  },

  getDateString() {
    return `${dateString[1]}.${dateString[0]}.${dateString[2]}`;
  },

  convert(date) {
    console.log(date);
    let result = date.split("-");

    return `${result[2]}.${result[1]}.${result[0]}`;
  },

  sorters: {

  sortBySeverity(array, ascending) {
    let result = array.slice(0);
    result.sort(function(a, b) {
      if (ascending) {
        return b.severity - a.severity;
      } else {
        return a.severity - b.severity;
      }
    });
    return result;
  },

  sortByName(array, ascending) {
    let result = array.slice(0);
    result.sort(function(a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (ascending) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return y < x ? -1 : y > x ? 1 : 0;
      }
    });

    return result;
  },

  sortByOpen() {
//
      },
},


  rules: {
    checkbox: [(v) => !!v || "You must answer to continue!"],
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

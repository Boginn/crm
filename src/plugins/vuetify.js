import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  // defaultAssets: {
  //   font: {
  //     family: 'Poppins'
  //   },
  // },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#06214A",
        secondary: "#263c57",
        tertiary: "#074044",
        fourth: "#061427",
        fifth: "#0c2649",
        sixth: "#111536",
        seventh: "#112436",
        eight: '#161821',
        
        primaryDark: '#0E1024',
        accent: "#7391a3",

        vuegrey: '#babbc3',
        error: "e42315",
        success: "#24aa0e",
      },
    },
  },
});

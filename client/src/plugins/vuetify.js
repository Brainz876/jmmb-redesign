import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.min.css";


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md"
      },
      theme: {
        themes: {
          light: {
            primary: "#ed1c2a", 
            secondary: "#FFFFFF",
            accent: "#FFDC5B",
          }
        }
      }
    
});

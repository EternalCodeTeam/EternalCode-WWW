import { createApp } from "vue";

import App from "./App.vue";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faDiscord, faGithub, faYoutube, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faDiscord, faGithub, faYoutube, faTiktok, faInstagram);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");

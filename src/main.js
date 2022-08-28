import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faDiscord, faGithub, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faBars, faMeteor } from "@fortawesome/free-solid-svg-icons";


library.add(faDiscord, faGithub, faYoutube, faTiktok, faInstagram, faBars, faArrowRightLong, faMeteor);

const app = createApp(App);

const messages = {
    en: {
        message: {
            hello: "hello world",
            more: "See more",
            projects: "Projects"
        }
    },
    pl: {
        message: {
            hello: "SIEMA!",
            more: "Zobacz więcej",
            projects: "Projekty"
        }
    }
};

const i18n = createI18n({
    locale: "en",
    allowComposition: true,
    messages
});

app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

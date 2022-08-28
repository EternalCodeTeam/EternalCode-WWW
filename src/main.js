import { createApp } from "vue";
import { createI18n } from 'vue-i18n'

import App from "./App.vue";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faDiscord, faGithub, faYoutube, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

library.add(faDiscord, faGithub, faYoutube, faTiktok, faInstagram, faBars, faArrowRightLong);

const app = createApp(App);

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    pl: {
        message: {
            hello: 'siema swiat'
        }
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'pn',
    messages,
})

app.use(i18n)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app");

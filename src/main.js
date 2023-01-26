import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-utilities.css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faDiscord, faGithub, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong, faBars, faMeteor } from "@fortawesome/free-solid-svg-icons";

import messages from "@intlify/unplugin-vue-i18n/messages";

library.add(faDiscord, faGithub, faYoutube, faTiktok, faInstagram, faLinkedin, faBars, faMeteor, faArrowRightLong);

const app = createApp(App);

const i18n = createI18n({
    legacy: false,
    locale: navigator.language.split('-')[0],
    fallbackLocale: "en",
    globalInjection: true,
    availableLocales: ["en", "pl"],
    messages: messages,
});

app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

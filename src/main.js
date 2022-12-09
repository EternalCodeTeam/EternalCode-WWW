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
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    availableLocales: ["en", "pl"],
    messages: messages,
});

const snowflakes = new Snowflakes({
    color: "#ffffff",
    count: 35,
    speed: 1.3,
    minOpacity: 1,
    minSize: 13,
    maxSize: 20,
});

app.use(i18n);
app.use(snowflakes);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

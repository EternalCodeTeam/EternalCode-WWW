import { createApp } from 'vue'

// @ts-ignore
import App from '@/App.vue'
// @ts-ignore
import router from '@/router'

import "./style.css"

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong, faBars, faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

// i18n
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";

library.add(
    faDiscord,
    faGithub,
    faYoutube,
    faTiktok,
    faInstagram,
    faLinkedin,
    faBars,
    faMeteor,
    faArrowRightLong
);

const availableLocales = [ "en", "pl" ];
const locale = navigator.language.split("-")[0];
const fallbackLocale = "en";
const i18nMessages = messages;

const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale,
    globalInjection: true,
    availableLocales,
    messages: i18nMessages,
});


createApp(App)
    .use(i18n)
    .use(router)

    // register font awesome
    .component("font-awesome-icon", FontAwesomeIcon)

    .mount("#app")
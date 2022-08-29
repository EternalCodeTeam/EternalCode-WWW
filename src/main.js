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


library.add(faDiscord, faGithub, faYoutube, faTiktok, faInstagram, faBars, faMeteor, faArrowRightLong);

const app = createApp(App);

const messages = {
    en: {
        message: {
            navbar: {
                projects: "Projects",
                about: "About",
                status: "Status page",
                repository: "Repository",
                paste: "Paste",
                docs: "Documentations",
            },

            heading: {
                hello: "Hello there! 👋",
                motto: "EternalCode is a fantastic community of developers",
            },

            about: {
                title: "About 🎉",

                p1: "We are a team of programmers with many years of experience, offering a lot of services related to the IT industry!",
                p2: "A close-knit team is what sets us apart, we are a pioneer of this type of service in the market. Among other things, we offer help with Games & Linux and Windows servers. support related to the choice of hosting, security of server machines and we love to share our programming knowledge!",
                p3: "Do you need something more? Or maybe you want us to do a top-notch design for you on commission? We can accomplish everything without much difficulty! We are open to any type of cooperation!"
            },

            skills: {
                title: "Our magic powers!",
                java: "In our lineup you will find many programmers specializing in Java!",
                php: "Do you need a proprietary ItemShop or? We do professional back-end!",
                javascript: "You can order professional applications, discord bots in javascript from us!",
                linux: "We will configure a Dedicated/VPS Server specifically for you, install database and panels etc."
            },

            projects: {
                title: "Our projects",
                subtitle: "Our projects are not only our services, but also our hobby! We offer many open source products!",
                more: "See more",
            }
        }
    },
    pl: {
        message: {

            navbar: {
                projects: "Projekty",
                about: "O nas",
                status: "Monitor usług",
                repository: "Repozytorium",
                paste: "Serwis wklejania",
                docs: "Dokumentacje",
            },

            heading: {
                hello: "Witaj! 👋",
                motto: "EternalCode to fantastyczna społeczność programistów",
            },

            about: {
                title: "O nas 🎉",

                p1: "Jesteśmy zespołem programistów z wieloletnim doświadczeniem, oferującym mnóstwo usług związanych z branżą IT!",
                p2: "Zgrany zespół to coś, co nas wyróżnia, jesteśmy pionierem tego typu usług na rynku. Oferujemy między innymi pomoc dotyczącą serwerów Gier & Linux, Windows. wsparcie związane z wyborem hostingu, zabezpieczenia maszyn serwerowych oraz uwielbiamy się dzielić wiedzą na temat programowania!",
                p3: "Potrzebujesz czegoś więcej? A może chcesz, abyśmy wykonali Ci projekt na najwyższym poziomie na zlecenie? Wszystko możemy bez większego trudu zrealizować! Jesteśmy otwarci na każdego typu współpracę!"
            },

            skills: {
                title: "Nasze magiczne moce!",
                java: "W naszym składzie znajdziesz wielu programistów specjalizujących się w języku Java!",
                php: "Potrzebujesz autorskiego ItemShopu bądź? Wykonujemy profesjonalny back-end!",
                javascript: "U nas możesz zamówić profesjonalne aplikacje, discord boty w javascript!",
                linux: "Skonfigurujemy Dedyka/VPS specjalnie dla ciebie, instalacja baz danych, panelów typu. pterodactyl!"
            },

            projects: {
                title: "Nasze projekty",
                subtitle: "Nasze projekty to nie tylko nasze usługi, ale również nasze hobby! Oferujemy wiele produktów z otwartym kodem źródłowym!",
                more: "Zobacz więcej",
            }
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

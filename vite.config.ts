import { fileURLToPath, URL } from "url";
import { dirname, resolve } from "path";
import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

interface ViteConfig extends UserConfig {
    resolve: {
        alias: {
            "@": string;
        };
    };
    plugins: any[];
}

const config: ViteConfig = {
    plugins: [
        vue(),
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/lang/**"),
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
};

export default config;

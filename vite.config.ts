// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, loadEnv } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import pugPlugin from "vite-plugin-pug";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// eslint-disable-next-line import/no-extraneous-dependencies
import { resolve } from "path";

// https://vitejs.dev/config/

const options: any = { pretty: true }; // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" };

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), "");

  const root = resolve(__dirname, "./src");

  return {
    plugins: [pugPlugin(options, locals), ViteImageOptimizer()],
    root,
    /* resolve: {
      alias: {
        src: "src/",
        test: resolve(__dirname, "/core/pages/")
      },
    }, */
    publicDir: "common/assets",
    build: {
      outDir: "../build",
      rollupOptions: {
        input: {
          main: resolve(root, "index.html"),
        },
        /* output: { // remove hashes from filenames on build
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        }, */
        output: {
          // remove hashes from filenames on build
          assetFileNames: ({ name }) => {
            const prepareName = name.toLowerCase();

            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? ``)) {
              return `assets/images/[name][extname]`;
            }

            if (/\.css$/.test(prepareName ?? ``)) {
              return `assets/styles/[name]-[hash][extname]`;
            }

            // default
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
  };
});

import { defineConfig, loadEnv } from "vite";
import pugPlugin from "vite-plugin-pug"
import { resolve } from "path";

// https://vitejs.dev/config/

const options: any = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), "");

  const root = resolve(__dirname, './src/core/pages');


  return {
    plugins: [pugPlugin(options, locals)],
    root,
    /*resolve: {
      alias: {
        src: "src/",
        test: resolve(__dirname, "/core/pages/")
      },
    },*/
    build: {
      outDir: "../../../build",
      publicDir: "src/common/public",
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          test: resolve(root, 'test/index.html')
        },
        /*output: { // remove hashes from filenames on build
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },*/
        output: { // remove hashes from filenames on build
          assetFileNames: ({name}) => {
            name = name.toLowerCase();

            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? ``)) {
              return `assets/images/[name]-[hash][extname]`
            }

            if (/\.css$/.test(name ?? ``)) {
              return `assets/styles/[name]-[hash][extname]`
            }

            // default
            return `assets/[name]-[hash][extname]`
          },
        }
      }
    },
  };
});

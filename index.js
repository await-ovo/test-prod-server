const { createProdServer } = require("@modern-js/prod-server");
const port = process.env.PORT || 3000;
(async () => {
  const app = await createProdServer({
    pwd: __dirname,
    config: {
      output: { path: "." },
      server: {
        logger: true,
        metrics: { frameworkLog: false, frameworkVersion: "2.18.2" },
        slardarNode: false,
        ssr: { forceCSR: true },
      },
      bff: {},
    },
    routes: [
      {
        entryName: "info-1",
        entryPath: "1.html",
        isSPA: true,
        isSSR: false,
        urlPath: "/info/1",
      },
      {
        entryName: "info-2",
        entryPath: "2.html",
        isSPA: true,
        isSSR: false,
        urlPath: "/info/2",
      },
      {
        entryName: "info",
        entryPath: "dynamic.html",
        isSPA: true,
        isSSR: false,
        urlPath: "/info/:id",
      },
    ],
    metaName: "test",
    appContext: {},
    logger: console,
    runtimeMode: "webOnly",
  });
  app.listen(port, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Server start: http://localhost:${port}`);
    }
  });
})();

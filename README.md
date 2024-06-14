# Reproduction

1. `pnpm install`
2. `node ./index.js`
3. Open `http://localhost:3000/info/1`, and you can see that the server returns `dynamic.html` instead of `1.html`.


# Expected

In the case of the routes configuration in this example:

```
 [
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
  ]
```

When request url is `/info/1` it should hit the exact route `info/1` instead of dynamic route `info/:id`.


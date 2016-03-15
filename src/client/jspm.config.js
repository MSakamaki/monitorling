SystemJS.config({
  transpiler: "plugin-typescript",
  packages: {
    "monitor-app": {
      "format": "esm",
      "main": "index.ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.2"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.2": {
      "map": {
        "typescript": "npm:typescript@1.8.7"
      }
    }
  }
});

module.exports = {
  extends: ["cz"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "init",
        "build",
        "WIP",
      ],
    ],
  },
};

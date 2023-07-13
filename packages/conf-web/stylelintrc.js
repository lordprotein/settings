module.exports = {
  "extends": ["stylelint-config-recommended"],
  "customSyntax": "postcss-styled-syntax",
  "rules": {
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": ["text-fill-color"]
      }
    ],
    "no-descending-specificity": null,
    "no-empty-source": null
  }
}

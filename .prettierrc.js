module.exports = {
  printWidth: 80, // Each line of code length (default is 80)
  tabWidth: 2, // Number of spaces equivalent to each tab (default is 2)
  useTabs: false, // Whether to use tabs for indentation (default is false)
  singleQuote: true, // Use single quotes (default is false)
  semi: false, // Use semicolons at the end of declarations (default is true)
  trailingComma: 'es5', // Use trailing commas in multiline (default is none)
  bracketSpacing: true, // Use spaces between the braces in object literals (default is true)
  jsxBracketSameLine: false, // Place the `>` in multi-line JSX at the end of the last line, instead of on a new line (default is false)
  arrowParens: 'avoid', // Whether to use parentheses for single-parameter arrow functions (default is `avoid`)
  htmlWhitespaceSensitivity: 'ignore', // Space insensitive (start tag, content, and end tag each on a separate line)
  // vueIndentScriptAndStyle: false, // Whether to indent the `<script>` and `<style>` tags in Vue components
  // embeddedLanguageFormatting: 'auto', // Whether to format code snippets embedded in JS with HTML tags or Markdown syntax. Options include "auto" (auto-format), and "off" (do not format)
  // requirePragma: false, // If true, only files with `/*** @prettier */` or `/*** @format */` at the top will be formatted
  // insertPragma: false, // When the `requirePragma` parameter is true, this parameter, when true, adds a newline after the `@format` tag
  // proseWrap: 'never', // Valid options are `[always|never|preserve]`. When Markdown text exceeds `printWidth`, determine whether to wrap lines. Options include `always` (wrap), `never` (do not wrap), and `preserve` (keep as is)
}

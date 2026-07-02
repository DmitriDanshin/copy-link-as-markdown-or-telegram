# Copy Link as Markdown or Telegram

A Chrome extension that copies the current tab's title and URL in two compatible
clipboard formats at once:

- Markdown (`[title](url)`) for text editors and developer tools.
- A clickable rich-text link for Telegram and other compatible applications.

![screenshot](./images/screenshot.png)

## Development

```sh
pnpm install
pnpm build
```

Load `.output/chrome-mv3` as an unpacked extension from `chrome://extensions`.

## Credits

This project is an unofficial fork of
[Copy Title and Url as Markdown Style](https://github.com/zaki-yama/copy-title-and-url-as-markdown),
originally created by [Shingo Yamazaki](https://github.com/zaki-yama).
Many thanks to the original author for creating the extension and making its
source code available under the MIT License.

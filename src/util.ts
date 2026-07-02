export function escapeTabsAndNewLines(str: string) {
  return str.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
}

export function unescapeTabsAndNewLines(str: string) {
  return str.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
}

export function escapeBrackets(str: string) {
  return str
    .replace(/\(/g, escape)
    .replace(/\)/g, escape)
    .replace(/\[/g, escape)
    .replace(/\]/g, escape);
}

export function buildTemplate(template: string, title: string, url: string) {
  return template.replaceAll("${title}", title).replaceAll("${url}", url);
}

export function buildHtmlLink(title: string, url: string) {
  const escapeHtml = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  // Telegram removes formatting that covers the complete pasted text.
  // The non-breaking space stays outside the link, so the link is preserved.
  return `<a href="${escapeHtml(url)}">${escapeHtml(title)}</a>&nbsp;`;
}

function writeToClipboard(plainText: string, html?: string) {
  const listener = (event: ClipboardEvent) => {
    event.clipboardData?.setData("text/plain", plainText);
    if (html) {
      event.clipboardData?.setData("text/html", html);
    }
    event.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

export function copyToClipboard(template: string, title: string, url: string) {
  console.log("copyToClipboard", template, title, url);

  const textToCopy = buildTemplate(template, title, url);

  writeToClipboard(textToCopy, buildHtmlLink(title, url));

  console.log("Successfully copied to clipboard: " + textToCopy);
}

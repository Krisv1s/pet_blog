export function getText(text) {
  if (text.length < 30) return text;
  else return `${text.slice(0, 30)}...`;
}

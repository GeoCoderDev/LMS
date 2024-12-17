export default function transformClassNameToClass(htmlString) {
  return htmlString
    .replace(/className="/g, 'class="')
    .replace(/className='/g, "class='");
}

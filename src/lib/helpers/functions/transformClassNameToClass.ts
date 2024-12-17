export default function transformClassNameToClass(
  htmlString: string | null | undefined
): string {
  if (!htmlString) return "";
  return htmlString.replace(/className=/g, "class=");
}

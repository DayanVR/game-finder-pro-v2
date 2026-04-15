export const normalizeImage = (url?: string) => {
  if (!url) return null;
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  return url;
};

function getIdFromUrl(url: string) {
  const urlParts = url.split("/");

  return urlParts[urlParts.length - 2];
}

export { getIdFromUrl };
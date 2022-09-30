export const getVideoUrlFromId = (id: string) => {
  return `https://www.youtube.com/watch?v=${id}`;
};

export const getThumbnailUrlFromId = (id: string) => {
  return `https://img.youtube.com/vi/${id}/0.jpg`;
};

export const makeImagePath = (id: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};

// makeImagePath 이미지를 가져올 수 있는 함수

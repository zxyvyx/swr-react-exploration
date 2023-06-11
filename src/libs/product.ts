export const getAllProducts = async (
  limit?: number | null,
  skip?: number | null
) => {
  let params = {};

  if (limit) params = { ...params, limit };
  if (skip) params = { ...params, skip };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/products${
      Object.keys(params).length > 0 ? `?${new URLSearchParams(params)}` : ''
    }`
  );
  const data = await response.json();
  return data;
};

export const getProductById = async (idProduct: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/products/${idProduct}`
  );
  const data = await response.json();
  return data;
};

export const getProductsBySearch = async (
  limit?: number | null,
  skip?: number | null,
  query?: string | null
) => {
  let params = {};

  if (limit) params = { ...params, limit };
  if (skip) params = { ...params, skip };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/products/search?q=${query}${
      Object.keys(params).length > 0 ? `&${new URLSearchParams(params)}` : ''
    }
    `
  );
  const data = await response.json();
  return data;
};

export const getUsers = async (limit?: number | null, skip?: number | null) => {
  let params = {};

  if (limit) params = { ...params, limit };
  if (skip) params = { ...params, skip };

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users${
      Object.keys(params).length > 0 ? `?${new URLSearchParams(params)}` : ''
    }`
  );
  const data = await response.json();
  return data;
};

export const getUserById = async (idUser: number) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${idUser}`
  );
  const data = await response.json();
  return data;
};

export const getUsersBySearch = async (query: string | number) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/search?q=${query}`
  );
  const data = await response.json();
  return data;
};

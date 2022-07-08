import localStore from "./localstore.util";

export const getToken = () => localStore.get_data("UserToken");

export const setToken = (token) => localStore.store_data("UserToken", token);
export const setRToken = (token) => localStore.store_data("ref_token", token);
// export const getCategories = () => localStore.get_data("categories");

// export const setCategories = categories =>
//   localStore.store_data("categories", categories);

export const logout = () => {
  // updateHeaders();
  localStore.remove_data("token");
  return true;
};

export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
  // return Promise.resolve(response);
};

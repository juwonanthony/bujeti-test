import localStore from "./localstore.util";

export const setStores = async (info) => {
  const _data = { ...info };
  await localStore.store_data("setStores", _data);
  return true;
};

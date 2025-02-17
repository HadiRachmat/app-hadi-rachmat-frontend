import API from "./_app";

// const PREFIX = "user";

const getAllHome = async () => {
  let uri = `/api/admin/home`;
  const request = await API.get(uri);
  return request.data;
};

const getByIdHome = async () => {
  let uri = `/api/admin/home/:id`;
  const request = await API.get(uri);
  return request;
};

const createHome = async () => {
  let uri = `/api/admin/home`;
  const request = await API.post(uri);
  return request;
};

const updateHome = async () => {
  let uri = `/api/admin/home/:id`;
  const request = await API.put(uri);
  return request;
};

const removeHome = async () => {
  let uri = `/api/admin/home/:id`;
  const request = await API.delete(uri);
  return request;
};

export { getAllHome, getByIdHome, createHome, updateHome, removeHome };

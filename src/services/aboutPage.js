import API from "./_app";

// const PREFIX = "user";

const getAllAbout = async () => {
  let uri = `/api/admin/about`;
  const request = await API.get(uri);
  return request.data;
};

const getByIdAbout = async () => {
  let uri = `/api/admin/about/:id`;
  const request = await API.get(uri);
  return request;
};

const createAbout = async () => {
  let uri = `/api/admin/about`;
  const request = await API.post(uri);
  return request;
};

const updateAbout = async () => {
  let uri = `/api/admin/about/:id`;
  const request = await API.put(uri);
  return request;
};

const removeAbout = async () => {
  let uri = `/api/admin/about/:id`;
  const request = await API.delete(uri);
  return request;
};

export { getAllAbout, getByIdAbout, createAbout, updateAbout, removeAbout };

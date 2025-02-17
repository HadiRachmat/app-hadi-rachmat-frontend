import API from "./_app";

// const PREFIX = "user";

const getAllServices = async () => {
  let uri = `/api/admin/services`;
  const request = await API.get(uri);
  return request.data;
};

const getByIdServices = async () => {
  let uri = `/api/admin/services/:id`;
  const request = await API.get(uri);
  return request;
};

const createServices = async () => {
  let uri = `/api/admin/services`;
  const request = await API.post(uri);
  return request;
};

const updateServices = async () => {
  let uri = `/api/admin/services/:id`;
  const request = await API.put(uri);
  return request;
};

const removeServices = async () => {
  let uri = `/api/admin/Services/:id`;
  const request = await API.delete(uri);
  return request;
};

export { getAllServices, getByIdServices, createServices, updateServices, removeServices };

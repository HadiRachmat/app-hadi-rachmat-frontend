import API from "./_app";

// const PREFIX = "user";

const getAllExperiance = async () => {
  let uri = `/api/admin/experiance`;
  const request = await API.get(uri);
  return request.data;
};

const getPaginationExperiance = async (page = 1, limit = 8) => {
  let uri = `/api/admin/experiance/data?take=${limit}&skip=${page}`;
  const request = await API.get(uri);
  return request.data;
};

const getByIdExperiance = async () => {
  let uri = `/api/admin/experiance/:id`;
  const request = await API.get(uri);
  return request;
};

const createExperiance = async () => {
  let uri = `/api/admin/experiance`;
  const request = await API.post(uri);
  return request;
};

const updateExperiance = async () => {
  let uri = `/api/admin/experiance/:id`;
  const request = await API.put(uri);
  return request;
};

const removeExperiance = async () => {
  let uri = `/api/admin/experiance/:id`;
  const request = await API.delete(uri);
  return request;
};

export {
  getAllExperiance,
  getPaginationExperiance,
  getByIdExperiance,
  createExperiance,
  updateExperiance,
  removeExperiance,
};

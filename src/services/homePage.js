import API from "./_app";

// const PREFIX = "user";

const getAllHome = async () => {
  let uri = `/api/admin/home`;
  const request = await API.get(uri);
  return request.data;
};

const getByIdHome = async (id, config = {}) => {
  let uri = `/api/admin/home/${id}`;
  const request = await API.get(uri, config);
  return request;
};

const createHome = async (formData, config= {}) => {
  let uri = `/api/admin/home/create`;
  const request = await API.post(uri, formData, config);
  return request;
};

const updateHome = async (id, formData, config= {}) => {
  let uri = `/api/admin/home/${id}`;
  const request = await API.put(uri, formData, config);
  return request;
};

const removeHome = async (id, config = {}) => {
  let uri = `/api/admin/home/${id}`;
  const request = await API.delete(uri, config);
  return request;
};

export { getAllHome, getByIdHome, createHome, updateHome, removeHome };

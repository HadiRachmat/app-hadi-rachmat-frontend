import API from "./_app";

// const PREFIX = "user";

const getAllAbout = async () => {
  let uri = `/api/admin/about`;
  const request = await API.get(uri);
  return request.data;
};

const getByIdAbout = async (id,config = {}) => {
  let uri = `/api/admin/about/${id }`;
  const request = await API.get(uri, config);
  return request;
};

const createAbout = async (formData, config ={}) => {
  let uri = `/api/admin/about/create`;
  const request = await API.post(uri, formData,config);
  return request;
};

const updateAbout = async (id, formData, config) => {
  let uri = `/api/admin/about/${id}`;
  const request = await API.put(uri, formData, config);
  return request;
};

const removeAbout = async (id, config = {}) => {
  let uri = `/api/admin/about/${id}`;
  const request = await API.delete(uri, config);
  return request;
};

export { getAllAbout, getByIdAbout, createAbout, updateAbout, removeAbout };

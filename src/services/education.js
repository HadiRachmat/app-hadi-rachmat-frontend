import API from "./_app";

const getAllEducation = async () => {
    let uri = `/api/admin/education`;
    const request = await API.get(uri);
    return request.data;
}

const getByIdEducation = async () => {
    let uri = `/api/admin/education/:id`;
    const request = await API.get(uri);
    return request;
}

const createEducation = async () => {
    let uri = `/api/admin/education`;
    const request = await API.post(uri);
    return request;
}

const updateEducation = async () => {
    let uri = `/api/admin/education/:id`;
    const request = await API.put(uri);
    return request; 
}

const removEEducation = async () => {
    let uri = `/api/admin/education/:id`;
    const request = await API.delete(uri);
    return request;
}
export {
    getAllEducation,
    getByIdEducation,
    createEducation,
    updateEducation,
    removEEducation
}
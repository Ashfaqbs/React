import axios from "axios";

const BASEURL = "http://localhost:8080/api/v1/employees";

export const getAllEmp = () => {
  return axios.get(BASEURL);
};

export const getEmpByID = (id) => {
  return axios.get(BASEURL + "/" + id);
};

export const addEmp = (emp) => {
  return axios.post(BASEURL, emp);
};

export const updtEmp = (id, emp) => {
  return axios.put(BASEURL + "/" + id, emp);
};

export const deleteEmpById = (id) => {
  return axios.delete(BASEURL + "/" + id);
};

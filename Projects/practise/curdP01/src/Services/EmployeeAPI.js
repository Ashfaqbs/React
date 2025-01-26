import axios from "axios";
const baseUSRL = "http://localhost:8080/api/v1/employees";

export const addEmp = (emp) => {
  return axios.post(baseUSRL, emp);
};

export const updtEmp = (id, emp) => {
  return axios.put(baseUSRL + "/" + id, emp);
};

export const deleteEmp = (id) => {
  return axios.delete(baseUSRL + "/" + id);
};

export const getEmpbyID = (id) => {
  return axios.get(baseUSRL + "/" + id);
};

export const getAllEmp = () => {
  return axios.get(baseUSRL);
};

import api from "./api";

export async function getStates() {
  const data = await api(`/`);
  return data;
}

export async function getCitys(id) {
  const {data}  = await api(`/${id}/municipios/`);
  return data;
}

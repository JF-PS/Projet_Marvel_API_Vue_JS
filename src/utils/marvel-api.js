import axios from "axios";
import md5 from "js-md5";

const uri = process.env.VUE_APP_API_URL;
const apikey = process.env.VUE_APP_API_KEY;
const ts = Date.now();
const hash = md5(ts + process.env.VUE_APP_HASH_KEY + apikey);
const token = `apikey=${apikey}&ts=${ts}&hash=${hash}`;

const getQueryParameters = (params) => {
  let filter = "";

  Object.entries(params).forEach((param) => {
    if (param[1]) filter += `&${param[0]}=${param[1]}`;
  });

  return filter;
};

export const getCollectionURI = async (collectionURI) => {
  const response = await axios.get(`${collectionURI}?${token}`);
  const { data: dataRequest = {} } = response;
  const { data = {} } = dataRequest;
  return data;
};

const callMarvelService = async (service, params = "") => {
  const response = await axios.get(`${uri}/${service}?${token}${params}`);
  const { data: dataRequest = {} } = response;
  const { data = {} } = dataRequest;
  return data;
};

export const getAll = async (service, params) => {
  return callMarvelService(service, getQueryParameters(params));
};

export const getById = async (service, id) => {
  const getOne = `${service}/${id}`;
  return callMarvelService(getOne);
};

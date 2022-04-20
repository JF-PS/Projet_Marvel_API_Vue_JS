import axios from "axios";
import md5 from "js-md5";

const getQueryParameters = (params) => {
  let filter = "";

  Object.entries(params).forEach((param) => {
    if (param[1]) filter += `&${param[0]}=${param[1]}`;
  });

  return filter;
};

const callMarvelService = async (service, params = "") => {
  const uri = process.env.VUE_APP_API_URL;
  const apikey = process.env.VUE_APP_API_KEY;
  const ts = Date.now();
  const hash = md5(ts + process.env.VUE_APP_HASH_KEY + apikey);

  const response = await axios.get(
    `${uri}/${service}?apikey=${apikey}&ts=${ts}&hash=${hash}${params}`
  );

  const { data: dataRequest = {} } = response;
  const { code, data = {} } = dataRequest;
  console.log(code);
  return data;
};

export const getAll = async (service, params) => {
  return callMarvelService(service, getQueryParameters(params));
};

export const getById = async (service, id) => {
  const getOne = `${service}/${id}`;
  return callMarvelService(getOne);
};

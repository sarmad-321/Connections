// minlength: 4; maxlength: 4; required: digit; // sms verification rule
import {
  dataToQueryParameter,
  getConfigs,
  getMessage,
  handleResponse,
  performNetworkRequest,
} from './HelperFunction';
import {base_url, custom_url, banner_url} from '../config';
import initialStates from '../reducers/initialStates';

export const  post = async (endpoint, body, formData, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  // console.log(url, 'the url is here');

  const configs = getConfigs('POST', body, formData);
  //console.log('log configs', configs);
  try {
    const networkResult = await performNetworkRequest(url, configs);
    console.log('log networkResult', networkResult);
    const result = await handleResponse(networkResult);
    //console.log('log  result', result);
    return Promise.resolve(result);
  } catch (e) {
    //console.log('e == ', e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const customPost = async (endpoint, body, formData, queryParams) => {
  //console.log(body, 'body');
  //console.log(queryParams, 'paramsHEre');
  const url = custom_url + endpoint + dataToQueryParameter(body);
  //console.log(url, 'the url is here');

  const configs = getConfigs('POST', body, formData);

  //console.log(configs, 'configsHere');
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    //console.log('e == ', e);
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const get = async (endpoint, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('GET');

  //console.log(
  //   'url',
  //   url,
  //   '  dataToQueryParameter(queryParams) ',
  //   dataToQueryParameter(queryParams),
  // );

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const customDelete = async (endpoint, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('DELETE');

  //console.log(
  //   'url',
  //   url,
  //   '  dataToQueryParameter(queryParams) ',
  //   dataToQueryParameter(queryParams),
  // );

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

export const customGet = async (endpoint, queryParams) => {
  const url = banner_url + endpoint + dataToQueryParameter(queryParams);
  const configs = getConfigs('GET');

  //console.log(
  //   'url',
  //   url,
  //   '  dataToQueryParameter(queryParams) ',
  //   dataToQueryParameter(queryParams),
  // );

  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

const Api = {
  post: post,
  get: get,
  customDelete: customDelete,
  customGet: customGet,
};
export default Api;

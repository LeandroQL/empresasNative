import axios from 'axios';
import {
  getEnterprise,
  getEnterprises,
  getStatus,
  getFilteredEnterprises,
} from '../actions/enterprise';
export const userLogin = value => ({
  type: loginActions.USER_LOGIN,
  payload: value,
});

export const loginActions = {
  USER_LOGIN: 'USER_LOGIN',
};

export const sendLoginRequest = (login: String, password: String) => {
  return async dispatch => {
    const url = 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: login,
          password: password,
        }),
      });
      if (response.status === 200) {
        const header = {};
        header.uid = response.headers.map.uid;
        header.access_token = response.headers.map['access-token'];
        header.client = response.headers.map.client;
        dispatch(userLogin({status: 200, header: header}));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllEnterprises = (header: any) => {
  return async dispatch => {
    const url = 'http://empresas.ioasys.com.br/api/v1/enterprises';
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': header.access_token,
          client: header.client,
          uid: header.uid,
        },
      });
      if (response.status === 200) {
        dispatch(getStatus({status: 200}));
        dispatch(getEnterprises(response.data.enterprises));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getEnterprisesById = (id: Number, header: any) => {
  return async dispatch => {
    const url = `http://empresas.ioasys.com.br/api/v1/enterprises/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': header.access_token,
          client: header.client,
          uid: header.uid,
        },
      });
      if (response.status === 200) {
        dispatch(getStatus({status: 200}));
        dispatch(getEnterprise(response.data.enterprise));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterEnterprises = (
  header: any,
  type?: Number,
  name?: String,
) => {
  return async dispatch => {
    const url = 'http://empresas.ioasys.com.br/api/v1/enterprises';
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': header.access_token,
          client: header.client,
          uid: header.uid,
        },
        params: {
          enterprise_types: type ? type : null,
          name: name ? name : null,
        },
      });
      if (response.status === 200) {
        dispatch(getFilteredEnterprises(response.data.enterprises));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

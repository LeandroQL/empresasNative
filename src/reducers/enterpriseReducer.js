import {enterpriseActions} from '../actions/enterprise';
const initialState = {
  status: null,
  enterprise: null,
  enterprises: null,
  filteredEnterprises: null,
};

export const enterpriseReducer = (state = initialState, action) => {
  switch (action.type) {
    case enterpriseActions.STATUS:
      return {...state, status: action.payload};
    case enterpriseActions.ENTERPRISE:
      return {...state, enterprise: action.payload};
    case enterpriseActions.ENTERPRISES:
      return {...state, enterprises: action.payload};
    case enterpriseActions.FILTERED_ENTERPRISES:
      return {...state, filteredEnterprises: action.payload};
    default:
      return state;
  }
};

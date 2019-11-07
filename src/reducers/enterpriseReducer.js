import { enterpriseActions } from '../actions/enterprise'
const initialState = {
    status: null,
    enterprise: null,
    enterprises: null,
    isFiltered: false,
    filteredEnterprises: null,
};

export const enterpriseReducer = (state = initialState, action) => {
    switch (action.type) {
        case enterpriseActions.STATUS:
            return { ...state, status: Object.assign({}, action.payload) };
            break;
        case enterpriseActions.IS_FILTERED:
            return { ...state, isFiltered: action.payload };
            break;
        case enterpriseActions.ENTERPRISE:
            return { ...state, enterprise: action.payload };
            break;
        case enterpriseActions.ENTERPRISES:
            return { ...state, enterprises: action.payload };
            break;
        case enterpriseActions.FILTERED_ENTERPRISES:
            return { ...state, filteredEnterprises: action.payload }
        default:
            return state;
    }
};

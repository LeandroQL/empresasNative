export const enterpriseActions = {
    ENTERPRISE: 'ENTERPRISE',
    ENTERPRISES: 'ENTERPRISES',
    STATUS: 'STATUS',
    IS_FILTERED: 'IS_FILTERED',
    FILTERED_ENTERPRISES: 'FILTERED_ENTERPRISES',
}

export const getEnterprise = value => ({
    type: enterpriseActions.ENTERPRISE,
    payload: value,
})
export const getEnterprises = value => ({
    type: enterpriseActions.ENTERPRISES,
    payload: value,
})
export const getFilteredEnterprises = value => ({
    type: enterpriseActions.FILTERED_ENTERPRISES,
    payload: value,
})
export const getStatus = value => ({
    type: enterpriseActions.STATUS,
    payload: value,
})
export const isFilteredAction = value => ({
    type: enterpriseActions.IS_FILTERED,
    payload: value,
})

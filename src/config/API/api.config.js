import API_DEV from "./api-dev";

import API_PROD from "./api-prod";

export const API = process.env.NODE_ENV !== 'production'
    ? API_DEV
    : API_PROD;

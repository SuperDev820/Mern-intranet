import { CHECK_SUBDOMAIN } from '../../actions/types';

const initSubdomain = { isAvailableSubdomain:  null };

const subdomainReducer = (state = initSubdomain, action) => {
  switch (action.type) {
   
    case CHECK_SUBDOMAIN:
        let subdomain = { isAvailableSubdomain: action.payload };
        return subdomain;
        break;

    default:
        return state;
  }
};

export default subdomainReducer;
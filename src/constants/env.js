const PROD_URL = "keetool.com";
const DEV_URL = "keetool.dev";
let URL;
if (process.env.NODE_ENV === 'development'){
    URL = DEV_URL;
} else {
    URL = PROD_URL;
}

export const API_URL = "http://api."+URL;
export const MANAGE_API_URL = "http://manageapi."+URL;
export const BASE_URL = "http://"+URL;

export const NAME_COMPANY = "KEETOOL";
export const LINK_LOGO_LIGHT = "http://keetool.s3.amazonaws.com/logo/Artboard+5+copy.png";
export const LINK_LOGO_DARK = "http://keetool.s3.amazonaws.com/logo/Artboard+5.png";
export const LINK_LOGO_LONG = "http://keetool.s3.amazonaws.com/logo/logo_long.png";
export const SECRET_TOKEN = "KEEeducation";
export const EXPIRES_IN = "6d";
export const NAME_DATA_LOGIN_SAVE_LOCAL = "datatoken";


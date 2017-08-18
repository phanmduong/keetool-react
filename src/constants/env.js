const PROD_URL = "keetool.com";
const DEV_URL = "keetool.dev";
const PROD_PROTOCOL = "https://";
const DEV_PROTOCOL = "http://";
let URL;
let PROTOCOL;
if (process.env.NODE_ENV === 'development'){
    URL = DEV_URL;
    PROTOCOL = DEV_PROTOCOL;
} else {
    URL = PROD_URL;
    PROTOCOL = PROD_PROTOCOL;
}

export const API_URL = PROTOCOL + "api."+URL;
export const MANAGE_API_URL = PROTOCOL + "manageapi."+URL;
export const BASE_URL = PROTOCOL +URL;

export const NAME_COMPANY = "KEETOOL";
export const LINK_LOGO_LIGHT = PROTOCOL + "d255zuevr6tr8p.cloudfront.net/logo/Artboard+5+copy.png";
export const LINK_LOGO_DARK = PROTOCOL + "d255zuevr6tr8p.cloudfront.net/logo/Artboard+5.png";
export const LINK_LOGO_LONG = PROTOCOL + "d255zuevr6tr8p.cloudfront.net/logo/logo_long.png";
export const SECRET_TOKEN = "KEEeducation";
export const EXPIRES_IN = "6d";
export const NAME_DATA_LOGIN_SAVE_LOCAL = "datatoken";


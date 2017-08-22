const PROD_URL = "keetool.com";
const DEV_URL = "keetool.dev";
const PROD_PROTOCOL = "https://";
const DEV_PROTOCOL = "http://";
let URL;
let PROTOCOL_TYPE;
if (process.env.NODE_ENV === 'development'){
    URL = DEV_URL;
    PROTOCOL_TYPE = DEV_PROTOCOL;
} else {
    URL = PROD_URL;
    PROTOCOL_TYPE = PROD_PROTOCOL;
}

export const PROTOCOL = PROTOCOL_TYPE;

export const API_URL = PROTOCOL + "api."+URL;
export const MANAGE_API_URL = PROTOCOL + "manageapi."+URL;
export const BASE_URL = PROTOCOL +URL;

export const NAME_COMPANY = "KEETOOL";
export const LOGO_SIDEBAR = PROTOCOL + "d255zuevr6tr8p.cloudfront.net/logo/Artboard+5+copy.png";
export const LOGO_MAIN = PROTOCOL + "d255zuevr6tr8p.cloudfront.net/logo/Artboard+5.png";
export const LOGO_LOGIN = PROTOCOL + "d255zuevr6tr8p.cloudfront.net/logo/logo_long.png";
export const SECRET_TOKEN = "KEEeducation";
export const EXPIRES_IN = "6d";
export const NAME_DATA_LOGIN_SAVE_LOCAL = "datatoken";
export const NO_AVATAR = PROTOCOL + 'd2xbg5ewmrmfml.cloudfront.net/web/no-avatar.png';
export const NO_IMAGE = PROTOCOL + 'd2xbg5ewmrmfml.cloudfront.net/no-photo.png';


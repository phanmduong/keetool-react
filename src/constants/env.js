const PROD_URL = "keetool.com";
const DEV_URL = "keetool.dev";
let URL;
if (process.env.NODE_ENV === 'development'){
    URL = DEV_URL;
} else {
    URL = PROD_URL;
}

export const API_URL = "https://api."+URL;
export const MANAGE_API_URL = "https://manageapi."+URL;
export const BASE_URL = "https://"+URL;

export const NAME_COMPANY = "KEETOOL";
export const LINK_LOGO_LIGHT = "https://d255zuevr6tr8p.cloudfront.net/logo/Artboard+5+copy.png";
export const LINK_LOGO_DARK = "https://d255zuevr6tr8p.cloudfront.net/logo/Artboard+5.png";
export const LINK_LOGO_LONG = "https://d255zuevr6tr8p.cloudfront.net/logo/logo_long.png";
export const SECRET_TOKEN = "KEEeducation";
export const EXPIRES_IN = "6d";
export const NAME_DATA_LOGIN_SAVE_LOCAL = "datatoken";


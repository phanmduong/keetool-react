import axios from "axios";
import * as env from "../../constants/env";

export function getClientFreeTrials(page = 1, search = "") {
    const token = localStorage.getItem("token");
    const url = env.MANAGE_API_URL + `/customers?token=${token}&page=${page}&search=${search}`;
    return axios.get(url);
}

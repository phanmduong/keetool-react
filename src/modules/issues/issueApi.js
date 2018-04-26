/**
 * Created by phanmduong on 4/6/17.
 */
import axios from "axios";
import { API_URL } from "../../constants/env";

export function loadIssues(clientId = "", search = "", status = "", priority = "") {
    let url = API_URL + "/get-all-issues";
    url += `?client_id=${clientId}&search=${search}&status=${status}&priority=${priority}`;

    return axios.get(url);
}

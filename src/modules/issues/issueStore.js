import { observable, action } from "mobx";
import * as issueApi from "./issueApi";
// import { showErrorNotification } from "../../helpers/helper";

export default new class IssueStore {
    @observable isLoading = false;
    @observable issues = [];
    @observable totalPages = 1;
    @observable currentPage = 1;

    @action
    loadIssues(clientId, search, status, priority) {
        this.isLoading = true;
        issueApi.loadIssues(clientId, search, status, priority).then(res => {
            this.isLoading = false;
            this.issues = res.data.issues;
            this.total_pages = res.data.paginator.total_pages;
            this.current_page = res.data.paginator.current_page;
        });
    }
}();

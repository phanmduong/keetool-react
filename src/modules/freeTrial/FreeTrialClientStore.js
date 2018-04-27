import { observable, action } from "mobx";
import { getClientFreeTrials } from "./freeTrialApi";

export default new class FreeTrialClientStore {
    @observable users = [];
    @observable isLoading = false;
    @observable totalPages = 1;
    @observable currentPage = 1;
    @observable search = "";

    @action
    async loadClientFreeTrial(page = 1, search = "") {
        this.isLoading = true;
        const res = await getClientFreeTrials(page, search);
        this.isLoading = false;
        this.users = res.data.users;
        this.totalPages = res.data.paginator.total_pages;
        this.currentPage = res.data.paginator.current_page;
    }
}();

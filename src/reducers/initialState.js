export default {
    dashboard: {
        registers_count: 0,
        total_money: "0",
        registers_number: 0,
        paid_number: 0,
        uncalled_number: 0,
        zero_paid_num: 0,
        total_classes: 0,
        isLoading: false,
        remain_days: 0,
        date_array: [],
        money_by_date: [],
        classes: [],
        registers_by_date: [],
        paid_by_date: [],
        registers_by_hour: [],
        orders_by_hour: [],
        month_ago: []

    },
    login: {
        email: "",
        password: "",
        token: null,
        isLoading: false,
        error: false,
        user: {
            role: -1
        }
    },
    user: {},
    genList: {
        gens: [],
        isLoading: true
    },

    searchRegisters: {
        isLoading: false,
        data: {
            next_code: "",
            next_waiting_code: "",
            users: []
        },
        status: 0
    },
    tabs: {
        tabListData: [],
        isLoading: true,
        error: false,
        allTabs: [],
        isLoadingAllTabs: false,
        errorAllTabs: false,
    },
    staffs: {
        staffListData: [],
        isLoading: false,
        error: false,
        currentPage: 1,
        totalPages: 1,
        addStaff: {
            staffForm: {
                name: '',
                username: '',
                email: '',
                phone: '',
                age: 0,
                address: '',
                homeland: '',
                marital: 0,
                literacy: 0,
                role: 0,
                start_company: new Date().toISOString().slice(0, 10),
                avatar_url: ''
            },
            isChangingAvatar: false,
            isLoading: false,
            error: false,
            isLoadingStaff: false,
            errorStaff: false,
        },
        editStaff: {
            isLoadingStaff: false,
            errorStaff: false,
            isLoadingUpdateStaff: false,
            errorUpdateStaff: false,
            isLoadingDeleteStaff: false,
            errorDeleteStaff: false,
            staff: {}
        },
        messageChangeRoleStaff: null,
        isLoadingChangeRoleStaff: false,
        errorChangeRoleStaff: false,
        messageChangeBaseStaff: null,
        isLoadingChangeBaseStaff: false,
        errorChangeBaseStaff: false,
        roles: {
            roleListData: [],
            isLoading: false,
            error: false,
        },bases: {
            basesData: [],
            isLoading: false,
            error: false,
        }
    },
    roles: {
        roleListData: [],
        tabs:{
            tabListData: [],
            isLoading: true,
            error: false,
            allTabs: [],
            isLoadingAllTabs: false,
            errorAllTabs: false,
        },
        isLoading: false,
        error: false,
        createRole: {
            isLoading: false,
            error: false,
        },
        editRole: {
            isLoadingRole: false,
            errorRole: false,
            isLoadingUpdateRole: false,
            errorUpdateRole: false,
        },
        roleForm: {
            role_title: ''
        },
        isLoadingDeleteRole: false,
        errorDeleteRole: false
    },

    baseList: {
        bases: [],
        isLoadingBases: false,
        currentPage: 1,
        totalPages: 1,
        createBase: {
            isSavingBase: false,
            isLoadingBase: false,
            base: {
                name: "",
                address: ""
            }
        }
    },

    task: {
        createCard: {
            card: {},
            isSaving: false,
            showModal: false,
            board: {}
        },

        boardList: {
            boards: [],
            isLoadingBoards: false
        },

        createBoard: {
            showModal: false,
            board: {},
            isSaving: false
        },

        createProject: {
            project: {},
            isLoadingProject: false,
            isSavingProject: false
        },

        project: {
            projects: [],
            currentPage: 1,
            totalPages: 1,
            isLoadingProjects: false,
            isSaving: false
        }
    },

    register: {
        registerList: {
            registers: [],
            isLoadingRegisters: false
        }
    },
    config: {
        configList: {
            configs: [],
            isLoadingConfigs: false,
            currentPage: 1,
            totalPages: 1
        },
        createConfig: {
            config: {},
            isLoadingConfig: false,
            isSavingConfig: false
        },
        clientConfigList: {
            clientConfigs: [],
            isLoadingClientConfigs: false,
            totalPages: 1,
            currentPage: 1
        },
        configsRequired: {
            configs: [],
            isLoadingConfigsRequired: false
        }
    },

    clientList: {
        clients: [],
        isLoadingClients: false,
        currentPage: 1,
        totalPages: 1,
        createClient: {
            isSavingClient: false,
            isLoadingClient: false,
            client: {}
        }
    },

    client: {
        isLoadingTab: false,
        errorLoadingTab: false,
        isLoadingUpdateTab: false,
        errorUpdateTab: false,
        tabListData: [],
        ping: {
            status: 1
        }
    },

    clientConfig: {
        isLoadingClientConfig: false,
        isSavingClientConfig: false,
        clientConfig: {}
    },

    blog:{
        post: {
            isUpdatingImage: false,
            updateImageError: false,
            imageUrl: '',
            title: '',
            description: '',
            tags: '',
            category: 0,
            content:'',
            isSaving: false,
            saveError: false,
            isPreSaving: false,
            preSaveError: false,
        },
        categories:{
            categories: [],
            isLoading: false,
            error: false
        },
        category:{
            name: '',
            isCreating: false,
            error: false,
        }
    }
};

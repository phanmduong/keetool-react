import React from 'react';
import {Route, IndexRoute} from 'react-router';
import LoginContainer from './containers/LoginContainer';
import AppContainer from './containers/AppContainer';
import DashboardContainer from './containers/DashboardContainer';
import RegisterListContainer from './containers/RegisterListContainer';
import CollectMoneyContainer from './containers/financialManager/CollectMoneyContainer';
import ManageStaffsContainer from './containers/manageStaff/ManageStaffsContainer';
import AddStaffContainer from './containers/manageStaff/AddStaffContainer';
import EditStaffContainer from './containers/manageStaff/EditStaffContainer';
import ManageRoleContainer from './containers/role/ManageRoleContainer';
import CreateRoleContainer from './containers/role/CreateRoleContainer';
import EditRoleContainer from './containers/role/EditRoleContainer';
import NotFoundPage from './components/NotFoundPage';
import BasesContainer from "./modules/bases/BasesContainer";
import CreateBaseContainer from "./modules/bases/CreateBaseContainer";
import ClientContainer from "./modules/manageClient/ClientContainer";
import EditClientContainer from "./modules/manageClient/client/EditInfoClientContainer";
import EditConfigClientContainer from "./modules/manageClient/client/EditConfigClientContainer";
import EditTabClientContainer from "./modules/manageClient/client/EditTabClientContainer";
import ProjectListContainer from "./modules/tasks/ProjectListContainer";
import CreateProjectContainer from "./modules/tasks/CreateProjectContainer";
import BoardListContainer from "./modules/tasks/BoardListContainer";
import CreateClientContainer from "./modules/manageClient/client/CreateClientContainer";

export default (
    <Route>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={DashboardContainer}/>
            <Route path="register-list" component={RegisterListContainer}/>
            <Route path="collect-money" component={CollectMoneyContainer}/>
            <Route path="manage/quan-li-nhan-su" component={ManageStaffsContainer}/>
            <Route path="add-staff" component={AddStaffContainer}/>
            <Route path="staff/:staffId/edit" component={EditStaffContainer}/>

            {/*Begin Role route*/}
            <Route path="manage-role" component={ManageRoleContainer}/>
            <Route path="create-role" component={CreateRoleContainer}/>
            <Route path="role/:roleId/edit" component={EditRoleContainer}/>
            {/*End Role route*/}

            {/*Begin base route*/}
            <Route path="base/list" component={BasesContainer}/>
            <Route path="base/create" component={CreateBaseContainer} type="create"/>
            <Route path="base/:baseId/edit" component={CreateBaseContainer} type="edit"/>
            {/*End Base route*/}

            {/*Begin tasks route*/}
            <Route path="project/list" component={ProjectListContainer}/>
            <Route path="project/create" component={CreateProjectContainer} type="create"/>
            <Route path="project/:projectId/edit" component={CreateProjectContainer} type="edit"/>
            <Route path="project/:projectId/boards" component={BoardListContainer}/>

            {/*End tasks route*/}

            {/*Begin clients route*/}
            <Route path="/client/list" component={ClientContainer}/>
            <Route path="/client/create" component={CreateClientContainer}/>
            <Route path="/client/:clientId/info/edit" component={EditClientContainer}/>
            <Route path="/client/:clientId/tab/edit" component={EditTabClientContainer}/>
            <Route path="/client/:clientId/config/edit" component={EditConfigClientContainer}/>
            {/*End clients route*/}
        </Route>
        <Route path="login" component={LoginContainer}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

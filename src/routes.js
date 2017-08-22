import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ClientContainer from "./modules/manageClient/ClientContainer";
import EditClientContainer from "./modules/manageClient/client/EditInfoClientContainer";
import EditConfigClientContainer from "./modules/manageClient/client/EditConfigClientContainer";
import EditTabClientContainer from "./modules/manageClient/client/editTab/EditTabClientContainer";
import CreateClientContainer from "./modules/manageClient/client/CreateClientContainer";
import ConfigListContainer from "./modules/config/ConfigListContainer";
import CreateConfigContainer from "./modules/config/CreateConfigContainer";
import CreateClientConfigContainer from "./modules/manageClient/clientConfig/CreateClientConfigContainer";
import LoginContainer from './modules/login/LoginContainer';
import AppContainer from './containers/AppContainer';
import ManageStaffsContainer from './modules/manageStaff/ManageStaffsContainer';
import AddStaffContainer from './modules/manageStaff/AddStaffContainer';
import ManageRoleContainer from './modules/role/ManageRoleContainer';
import CreateRoleContainer from './modules/role/CreateRoleContainer';
import EditRoleContainer from './modules/role/EditRoleContainer';
import NotFoundPage from './components/NotFoundPage';
import BasesContainer from "./modules/bases/BasesContainer";
import CreateBaseContainer from "./modules/bases/CreateBaseContainer";
import ProjectListContainer from "./modules/tasks/project/ProjectListContainer";
import CreateProjectContainer from "./modules/tasks/project/CreateProjectContainer";
import BoardListContainer from "./modules/tasks/board/BoardListContainer";
import BlogContainer from "./modules/blog/BlogContainer";

export default (
    <Route>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={ManageStaffsContainer}/>
            <Route path="manage/quan-li-nhan-su" component={ManageStaffsContainer}/>
            <Route path="add-staff" component={AddStaffContainer} type="create"/>
            <Route path="staff/:staffId/edit" component={AddStaffContainer} type="edit"/>

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

            {/*Begin config routes*/}
            <Route path="/config/list" component={ConfigListContainer}/>
            <Route path="/config/create" component={CreateConfigContainer} type="create"/>
            <Route path="/config/:configId/edit" component={CreateConfigContainer} type="edit"/>
            {/*End config routes*/}

            {/*Begin client config routes*/}
            <Route path="/client-config/:clientId/create" component={CreateClientConfigContainer} type="create"/>
            <Route path="/client-config/:clientId/:clientConfigId/edit" component={CreateClientConfigContainer} type="edit"/>
            {/*End client config routes*/}

            {/*Begin blog routes*/}
            <Route path="/blog/new-post" component={BlogContainer} type="create"/>
            {/*End blog routes*/}

        </Route>
        <Route path="login" component={LoginContainer}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

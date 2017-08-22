/**
 * Created by phanmduong on 8/22/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogComponent from './BlogComponent';
import * as blogActions from './blogActions';

class BlogContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateFormPostData = this.updateFormPostData.bind(this);
        this.updateEditor = this.updateEditor.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    updateFormPostData(event) {
        const field = event.target.name;
        let data = {...this.props.post};
        if (event.target.type === "checkbox") {
            data[field] = event.target.checked;
        } else {
            data[field] = event.target.value;
        }
        this.props.blogActions.updateFormPost(data);
    }

    updateEditor(value){
        let data = {...this.props.post};
        data.content = value;
        this.props.blogActions.updateFormPost(data);
    }

    handleFileUpload(event){
        let file = event.target.files[0];
        this.props.blogActions.uploadImage(file);
    }

    savePost(){
        if ($('#form-post').valid()) {
            this.props.blogActions.savePostBlog(this.props.post);
        }
    }

    render() {
        return (
            <BlogComponent
                {...this.props}
                updateFormPostData={this.updateFormPostData}
                updateEditor={this.updateEditor}
                handleFileUpload={this.handleFileUpload}
                savePost={this.savePost}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.blog.post
    };
}

function mapDispatchToProps(dispatch) {
    return {
        blogActions: bindActionCreators(blogActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);

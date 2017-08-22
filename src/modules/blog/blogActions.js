import * as types from '../../constants/actionTypes';
import * as blogApi from './blogApi';
import * as helper from '../../helpers/helper';

export function uploadImage(file) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_UPLOAD_IMAGE_BLOG
        });
        blogApi.uploadImage(file, function (event) {
            let data = JSON.parse(event.currentTarget.response);
            dispatch(uploadImageBlogSuccess(data.link));
        }, () => {
            helper.showErrorNotification("Đăng ảnh thất bại.");
            dispatch(uploadImageBlogFailed());
        });
    };
}

export function uploadImageBlogSuccess(imageUrl) {
    return (
        {
            type: types.UPLOAD_IMAGE_BLOG_SUCCESS,
            imageUrl: imageUrl
        }
    )
}

export function uploadImageBlogFailed() {
    return (
        {
            type: types.UPLOAD_IMAGE_BLOG_FAILED,
        }
    )
}

export function updateFormPost(post) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_FORM_POST,
            post: post
        });
    }
}

export function savePostBlog(post) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_SAVE_POST_BLOG
        });
        blogApi.savePost(post)
            .then(()=>{
                helper.showNotification("Tải lên thành công");
                dispatch({
                    type: types.SAVE_POST_BLOG_SUCCESS
                });
        }).catch(()=>{
                helper.showNotification("Tải lên thất bại");
                dispatch({
                    type: types.SAVE_POST_BLOG_FAILED
                });
            });
    };
}
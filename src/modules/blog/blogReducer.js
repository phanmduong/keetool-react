import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function rolesReducer(state = initialState.blog, action) {

    switch (action.type) {
        case types.UPDATE_FORM_POST:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            title: action.post.title,
                            description: action.post.description,
                            tags: action.post.tags,
                            category: action.post.category,
                            content: action.post.content,
                            imageUrl: action.post.imageUrl,
                        }
                    }
                }
            };
        case types.BEGIN_UPLOAD_IMAGE_BLOG:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            isUpdatingImage: true,
                            updateImageError: false,
                        }
                    }
                }
            };
        case types.UPLOAD_IMAGE_BLOG_SUCCESS:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            isUpdatingImage: false,
                            updateImageError: false,
                            imageUrl: action.imageUrl
                        }
                    }
                }
            };
        case types.UPLOAD_IMAGE_BLOG_FAILED:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            isUpdatingImage: false,
                            updateImageError: true,
                        }
                    }
                }
            };
            case types.BEGIN_SAVE_POST_BLOG:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            isSaving: true,
                            saveError: false,
                        }
                    }
                }
            };
            case types.SAVE_POST_BLOG_SUCCESS:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            isSaving: false,
                            saveError: false,
                        }
                    }
                }
            };
        case types.SAVE_POST_BLOG_FAILED:
            return {
                ...state,
                ...{
                    post: {
                        ...state.post,
                        ...{
                            isSaving: false,
                            saveError: true,
                        }
                    }
                }
            };
        default:
            return state;
    }
}

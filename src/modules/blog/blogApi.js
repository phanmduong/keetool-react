import axios from 'axios';
import * as env from '../../constants/env';

export function uploadImage(file, completeHandler, error) {
    var url = env.API_URL + '/upload-image-froala';
    let formdata = new FormData();
    formdata.append('image', file);
    let ajax = new XMLHttpRequest();
    ajax.addEventListener("load", completeHandler, false);
    ajax.open("POST", url);
    ajax.send(formdata);
    ajax.addEventListener("error", error, false);
}

export function savePost(post) {
    let url = env.API_URL + "/save-product";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }

    return axios.post(url, {
        description: post.description,
        product_content: post.content,
        tags_string: post.tags,
        category_id: post.category,
        image_url: post.imageUrl,
        title: post.title
    });
}


"use strict";

import Vue from 'vue';
// import router from '../router'

import { Message } from 'element-ui';

// 主要是为了获取挂载在Vue上的axios
const instance = new Vue({
})

export default {
    getCommentList() {
        return new Promise((resolve, reject) => {
            instance.axios({
                method: "get",
                url: "/api/comment"
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                Message({
                    message: '获取留言失败',
                    type: 'error',
                });
                reject(err);
            });
        });
    },
    createReply(commentId, userId, context) {
        return new Promise((resolve, reject) => {
            instance.axios({
                method: "post",
                url: `/api/reply/${commentId}`,
                data: {
                    context,
                    toUser: userId,
                }
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                Message({
                    message: '新增回复失败',
                    type: 'error',
                });
                reject(err);
            });
        });
    },
    // 获取用户信息
    getUserInfo() {
        return new Promise((resolve, reject) => {
            instance.axios({
                method: "get",
                url: '/api/user',
            }).then(res => {
                resolve(res.data)
            });
        });
    },
    // 更新自己的留言
    updateComment(value) {
        return new Promise((resolve, reject) => {
            const { context, commentId } = value;
            instance.axios({
                method: "put",
                url: `/api/comment/${commentId}`,
                data: {
                    context,
                }
            }).then(res => resolve(res));
        });
    },
    // 删除留言
    deleteComment(value){
        return new Promise((resolve, reject) => {
            const { commentId } = value;
            instance.axios({
                method: "delete",
                url: `/api/comment/${commentId}`,
            }).then(res => resolve(res));
        });
    },
    // 删除回复
    deleteReply(value){
        return new Promise((resolve, reject) => {
            const { commentId,replyId } = value;
            instance.axios({
                method: "delete",
                url: `/api/reply/${commentId}/${replyId}`,
            }).then(res => resolve(res));
        });
    }

}
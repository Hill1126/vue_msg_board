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
            }).then(res=>{
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
    getUserInfo(){
        return new Promise((resolve, reject) => {
            instance.axios({
                method:"get",
                url:'/api/user',
            }).then(res=>{
                resolve(res.data)
            });
        });
    }
}
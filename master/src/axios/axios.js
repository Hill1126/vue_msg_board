"use strict";

import Vue from 'vue';
import axios from "axios";
import router from '../router'

import { Message } from 'element-ui';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL: "http://localhost:7001",
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {

        if (response.data.code == '401') {
            Message.error({
                message: response.data.msg,
                duration:1000,
                onClose() {
                    localStorage.clear();
                    router.replace({
                        name: "login"
                    });
                }
            });
            return Promise.reject();
        } else if (response.data.code !== 0) {
            Message({
                message: response.data.msg,
                type: 'error',
            })
            return Promise.reject();
        }

        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);
const Plugin = {}

Plugin.install = function (Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
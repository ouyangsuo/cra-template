import { getUsers } from '../apis/user'

export const SET_FETCHING = "SET_FETCHING";
export const SET_USERNAME = "SET_USERNAME";

/* 同步action 用户名作为入参进来 得到修改用户名的action 派发一下即可 */
export function setUsername(username) {
    return {
        type: "SET_USERNAME",
        username,
    };
}

/* 获取同步action */
export function setFeching(value) {
    return {
        type: SET_FETCHING,
        value
    };
}

/* 用户名+密码入参hi你拉UI 得到异步action */
export function login({ username, password }) {
    return (dispatch, getState) => {
        return getUsers({ username, password }) 
    }
}

/* 获取异步action（一个返回promise的函数） */
export function logout() {
    return (dispatch, getState) => {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve("登出成功")
                    dispatch(
                        setUsername(null)
                    )
                }, 2000);
            }
        )
    };
}

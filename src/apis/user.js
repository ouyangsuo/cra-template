import { doDelete, doGet, doPost, doPut } from './baseRequest'

export async function getUsers({username,password}) {
    const ret = await doPost(`/user/login`,{ username, password })
    console.log("getUsers ret=", ret);
    return ret
}
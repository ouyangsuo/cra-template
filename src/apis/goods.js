import { doDelete, doGet, doPost, doPut } from './baseRequest'

export async function addGoods(goods) {
    const ret = await doPost("/goods/0", goods)
    console.log("addGoods data=", ret);
    return ret
}

export async function deleteGoods(gid) {
    const ret = await doDelete(`/goods/${gid}`)
    console.log("deleteGoods data=", ret);
    return ret
}

/* 传入一个自带id的goods对象 予以更新 */
export async function updateGoods(gid, goods) {
    const ret = await doPut(`/goods/${gid}`, goods)
    console.log("data=", ret);
    return ret
}

export async function getGoodsById(gid) {
    const ret = await doGet(`/goods/${gid}`)
    console.log("data=", ret);
    return ret
}

export async function getGoodsByPage(page = 0) {
    return await doGet("/goods/list/0")
}
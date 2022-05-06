import React from 'react'

import * as goodsApi from "../apis/goods"

const goods = {
  "t": "民间大喇叭菊花",
  "img": "https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/221785/12/11420/362015/6216ec09E8bc27173/c4aa249c96b23a54.jpg",
  "jp": "139.90",
}

export default function AjaxDemo() {
  return (
    <>
      <h3>AjaxDemo</h3>
      <div style={{ display: "flex" }}>

        {/* 绑定this为空相当于不改变this指向 仅仅绑定参数 */}
        <button onClick={goodsApi.addGoods.bind(null, goods)}>Create</button>

        <button onClick={goodsApi.getGoodsByPage}>Retrieve</button>

        <button onClick={() => {
          goodsApi.updateGoods(
            "626a37f965b468bb16214331",
            { "jp": "39.90" }
          )
        }}>Update</button>

        <button onClick={() => {
          goodsApi.deleteGoods("626a37f965b468bb16214331")
        }}>Delete</button>
      </div>
    </>
  )
}

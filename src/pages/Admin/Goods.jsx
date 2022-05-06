import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Table, Tag, Card, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import * as goodsApi from '../../apis/goods'

import "./goods.css"

export default (props) => {
  const [list, setList] = useState([])
  const navigate = useNavigate()

  const deleteGoods = (gid) => {
    console.log("客户想删除商品", gid);
    goodsApi.deleteGoods(gid)
      .then(data => {
        message.success('删除商品成功！', data);
        setList(() => list.filter(item => item._id !== gid))
      })
      .catch(err => message.error('删除商品失败！'))
  }

  const columns = [
    {
      title: '名称',
      dataIndex: 't',
      key: 't',
      render: text => (<a>
        <span className='goodsName'>{text}</span>
        <span style={{ width: 100 }}></span>
      </a>),
      width: 500,
      ellipsis: true,
    },
    {
      title: '价格',
      dataIndex: 'jp',
      key: 'jp',
      render: text => <span className='price'>{text}</span>,
      width: 200,
    },
    {
      title: '图片',
      dataIndex: 'img',
      key: 'img',
      render: text => <img className='img' src={(text.startsWith("http")?"":"https://img10.360buyimg.com/jdcms/s150x150_") + text} />,
    },
    {
      title: '操作',
      key: 'tags',
      dataIndex: 'tags',
      render: (text, record, index) => (
        <>
          <Tag className='tags' color="blue" onClick={() => {
            navigate(`/admin/goods/${record._id}`, { state: record })
          }}>编辑</Tag>
          <Tag className='tags' color="orange">下架</Tag>
          <Tag className='tags' color="red" onClick={() => {
            deleteGoods(record._id)
          }}>删除</Tag>
        </>
      ),
    },
  ];

  useEffect(
    async () => {
      /* 发起网络请求 */
      let { data } = await goodsApi.getGoodsByPage()
      setList(() => data.reverse().map(
        item => ({ ...item, key: item.t })
      ))
    },
    []
  )

  return (
    <Card title="商品列表"
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/admin/goods/0")}
          size='middle' />
      }>
      <Table
        columns={columns}
        dataSource={list}
        pagination={{
          pageSize: 5
        }}
      />
    </Card>
  );
}
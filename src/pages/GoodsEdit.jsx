import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Input, Upload, Button, Card, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { updateGoods, addGoods } from '../apis/goods'
import { useEffect, useState } from 'react';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 24,
  },
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

/* 做上传文件的合法性校验：必须是JPG/PNG图片且体积小于2M */
function beforeUpload(file) {
  // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  // if (!isJpgOrPng) {
  //   message.error('You can only upload JPG/PNG file!');
  // }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  // return isJpgOrPng && isLt2M;
  return isLt2M;
}

const Demo = ({ mode }) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const navigate = useNavigate()

  /* 编辑商品模式下 会携带商品详情数据 */
  const { state: goodsDetail } = useLocation()
  console.log("goodsDetail", goodsDetail);

  useEffect(
    () => goodsDetail && setImageUrl(goodsDetail.img),
    []
  )


  const onFinish = ({ goods }) => {
    console.log(goods);
    goods.img = imageUrl

    if (mode === "edit") {
      updateGoods(goodsDetail._id, goods)
        .then(data => {
          console.log("商品修改成功", data);
          message.success("商品修改成功")
        })
        .catch(err => {
          console.log("商品修改失败", err);
          message.error("商品修改失败")
        })
        .finally(
          () => navigate(-1)
        )
    } else {
      addGoods(goods)
        .then(data => {
          console.log("商品添加成功", data);
          message.success("商品添加成功")
        })
        .catch(err => {
          console.log("商品添加失败", err);
          message.error("商品添加失败")
        })
        .finally(
          () => navigate(-1)
        )
    }

  };

  const handleChange = info => {
    console.log("handleChange", info);

    /* 开始上传时回调一次 */
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }

    /* 上传成功时回调一次 */
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64(
      //   info.file.originFileObj,
      //   imageUrl => {
      //     setImageUrl(imageUrl)
      //     setLoading(false)
      //   }
      // );
      setImageUrl(`http://localhost:8000/uploads/${info.file.response.filename}`)
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Card title="编辑商品" style={{ width: 800, margin: "50px auto" }}>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>

        <Form.Item
          name={['goods', 't']}
          label="商品名称"
          initialValue={goodsDetail ? goodsDetail.t : ""}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['goods', 'jp']}
          label="商品价格"
          initialValue={goodsDetail ? goodsDetail.jp : ""}
        >
          <Input />
        </Form.Item>

        <Form.Item name={['goods', 'img']} label="商品图片" initialValue={goodsDetail ? goodsDetail.img : ""}>
          <Upload
            name="img0"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="http://localhost:8000/demo/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', height: 100 }} /> : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item name={['goods', 'desc']} label="商品描述" initialValue={goodsDetail ? goodsDetail.t : ""}>
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" htmlType="submit" block={true}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Demo;
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Home from "./pages/Home"
import Login from './pages/Login';
import Admin from './pages/Admin';
import GoodsEdit from './pages/GoodsEdit';
import NotFound from './pages/NotFound';

import DashBoard from "./pages/Admin/DashBoard"
import Users from "./pages/Admin/Users"
import Messages from "./pages/Admin/Messages"
import Channels from "./pages/Admin/Channels"
import Goods from "./pages/Admin/Goods"
import Hotwords from "./pages/Admin/Hotwords"

import Demos from './demos';
import AjaxDemo from "./demos/AjaxDemo"
import HocDemo from "./demos/HocDemo"
import RenderPropDemo from "./demos/RenderPropDemo"

/* 
/ 首页 
/login 登录页 
 
/admin 管理首页
    /admin/dashboard 数据看板 
    /admin/users 用户管理 
    /admin/channels 频道管理 
    /admin/goods 商品管理 
    /admin/hotwords 热词管理 
    /admin/messages 通知中心

/admin/goods/0 新增商品页
/admin/goods/:gid 商品编辑页

/* 404
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />

      <Route path="admin" element={<Admin />}>

        {/*<Route
          index
          element={<DashBoard />}
        /> */}

        <Route index element={<Navigate to="/admin/dashboard" />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />
        <Route path="channels" element={<Channels />} />
        <Route path="goods" element={<Goods />} />
        <Route path="hotwords" element={<Hotwords />} />
      </Route>

      <Route path="admin/goods/0" element={<GoodsEdit mode="new" />} />
      <Route path="admin/goods/:gid" element={<GoodsEdit mode="edit" />} />

      <Route path="demos" element={<Demos />}>
        <Route path="ajax" element={<AjaxDemo />} />
        <Route path="hoc" element={<HocDemo />} />
        <Route path="renderprop" element={<RenderPropDemo />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;

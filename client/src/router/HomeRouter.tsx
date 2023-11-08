import { Routes, Route } from "react-router-dom";
import Authentication from "./Authentication";

//Pages
import Home from "../pages/Home";
import Notifications from "../pages/Notifications";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Search from "../pages/Search";
import Messages from "../pages/Messages";

import Layout from "../common/components/UI/Layout/Layout";

const HomeRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="search" element={<Search />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default HomeRouter;

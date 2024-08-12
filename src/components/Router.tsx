import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import PostDetail from "../pages/posts/detail";
import Homepage from "../pages/home";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Signup from "../pages/signup";
import PostIndex from "../pages/posts";

export default function Router() {
  //firebase auth가 인증되었으면 true 로 변경하는 로직 추가
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<PostIndex />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

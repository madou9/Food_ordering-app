import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";

const AppRouters = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Layout></Layout>} />
            <Route path="/user-profile" element={<span>Users Profile page</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouters
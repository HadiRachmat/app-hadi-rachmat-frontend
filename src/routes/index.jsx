import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from './publicRoutes';
import CmsRoutes from "./cmsRoutes";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/cms" element={<Navigate to="/cms/home" replace />} />

                <Route path="/cms/*" element={<CmsRoutes/>} />
                <Route path="/home/*" element={<PublicRoutes />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
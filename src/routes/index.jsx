import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from './publicRoutes';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home/*" element={<PublicRoutes />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
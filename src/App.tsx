import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "@inovaetech/components-react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { OverlayProvider, SideBarProvider, ToastProvider } from "@inovaetech/components-react";

function App() {
    return (
        <BrowserRouter>
            <OverlayProvider>
                <ThemeProvider>
                    <ToastProvider>
                        <SideBarProvider componentLink={Link}>
                            <Routes>
                                <Route path="/" element={<Sidebar />}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="*" element={<Navigate to="/" />} />
                                </Route>
                            </Routes>
                        </SideBarProvider>
                    </ToastProvider>
                </ThemeProvider>
            </OverlayProvider>
        </BrowserRouter>
    );
}

export default App;

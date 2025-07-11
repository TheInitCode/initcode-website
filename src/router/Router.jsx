import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Courses from "../pages/Courses";
import Recomendation from "../pages/Recomendation";
import Notebooks from "../pages/Notebooks";
import LanguageRecommendationForm from "../pages/LanguageRecomendation";

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/recomendation" element={<Recomendation />} />
                <Route path="/notebooks" element={<Notebooks />} />
                <Route path="/language-recomendation" element={<LanguageRecommendationForm />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
}
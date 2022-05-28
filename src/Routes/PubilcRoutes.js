import HomePage from '../Components/HomePage/HomePage';
import NotFoundPage from '../Components/Shared/NotFoundPage';
import Login from '../Components/login/Login';
import Signup from '../Components/login/Signup';
import ToolDetails from '../Components/Tools/ToolDetails';
import SeeReview from '../Components/Shared/SeeReview';


 const PubilcRoutes = [
    { path: "/", name: "home", Componet: HomePage },
    { path: "/home", name: "home", Componet: HomePage },
    { path: "/login", name: "login", Componet: Login },
    { path: "/signup", name: "signup", Componet: Signup },
    { path: "/seereviews", name: "signup", Componet: SeeReview },
    { path: "*", name: "Notfound", Componet: NotFoundPage },

]

export default PubilcRoutes;
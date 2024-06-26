import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import RouteLayout from "./layouts/RouteLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;

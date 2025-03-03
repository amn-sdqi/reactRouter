import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//
import "./index.css";
//
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/contact/contact";
import Github from "./components/Github/Github";
import { getGithubData } from "./githubLoader/githubLoader";

// const router = createBrowserRouter([

// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="github" element={<Github />} loader={getGithubData} />
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

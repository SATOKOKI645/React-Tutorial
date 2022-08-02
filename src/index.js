// import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// idがrootである要素をクリックした時、rooting
const root = ReactDOM.createRoot(document.getElementById("root"));

// root関数が発火した時、レンダリング
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Home from "../pages/Home/Home";
import Mail from "../pages/Mail/Mail";
import Task from "../pages/Task/Task";

export const SidebarData = [
	{
		title: "ホーム",
		icon: <HomeIcon />,
		link: "/home",
		window: <Home />,
	},
	{
		title: "メール",
		icon: <MailIcon />,
		link: "/mail",
		window: <Mail />,
	},
	{
		title: "タスク",
		icon: <PlaylistAddCheckIcon />,
		link: "/task",
		window: <Task />,
	},
];

import Image from "next/image";
import Link from "next/link";
import HeaderCart from "./HeaderCart";
import searchIcon from "@/assets/images/search-icon.svg";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { logout } from "@/auth/store/slices/authSlice";
import { useRouter } from "next/navigation";

const Authentication = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const isAuthenticated = useAppSelector(
		(state) => state.auth.isAuthenticated,
	);

	const handleLogout = () => {
		dispatch(logout());

		localStorage.removeItem("persist:root");

		router.push("/signin");
	};

	return (
		<div className="hidden lg:flex items-center space-x-4 relative">
			{!isAuthenticated ? (
				<>
					<Link
						href="/signup"
						className="bg-primary border border-white hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
					>
						Signup
					</Link>
					<Link
						href="/signin"
						className="bg-primary border border-white hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
					>
						Signin
					</Link>
				</>
			) : (
				<button
					className="bg-primary border border-white hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block cursor-pointer"
					onClick={handleLogout}
				>
					Signout
				</button>
			)}

			<HeaderCart />
			<a
				id="search-icon"
				href="javascript:void(0);"
				className="text-white hover:text-secondary group"
			>
				<Image
					src={searchIcon.src}
					alt="Search"
					className="h-6 w-6 transition-transform transform group-hover:scale-120"
					width={24}
					height={24}
				/>
			</a>
			<div
				id="search-field"
				className="hidden absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded"
			>
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded"
					placeholder="Search for products..."
				/>
			</div>
		</div>
	);
};

export default Authentication;

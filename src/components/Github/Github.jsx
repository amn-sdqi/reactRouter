import { useLoaderData } from "react-router-dom";

function Github() {
	// const { userId } = useParams();
	const data = useLoaderData();
	return (
		<>
			<div>
				<div className="text-white bg-black text-6xl text-center p-4">
					<h1>{data.name}</h1>
					<div className="text-white bg-black flex  justify-center p-4 ">
						<img
							className="rounded-lg  h-40 w-40"
							src={data.avatar_url}
							alt="profile_img"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Github;

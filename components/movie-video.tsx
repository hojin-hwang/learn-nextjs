import { API_URL } from "../app/(home)/page";

async function getVideo(id:string) {
	await new Promise(resolve => setTimeout(resolve, 1000));
	// throw new Error("Failed to fetch videos");
	const response = await fetch(`${API_URL}/${id}/videos`);
	const json = await response.json();
	return json;
}

export default async function MovieVideos({id}: {id: string}) {
	const videos = await getVideo(id);
	return (
		<div>
			<ul>
				{videos.map((video: any) => (
					<li key={video.id}>{video.name}</li>
				))}
			</ul>
		</div>
	);
}
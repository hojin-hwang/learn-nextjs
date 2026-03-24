import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";


export default async function MoviePage({params}) {
	const {id}  = await params;
	
	
	return (
		<div>
			<Suspense fallback={<p>Loading...Detail..</p>}>
				<MovieInfo id={id} />
			</Suspense>
			<Suspense fallback={<p>Loading...Videos..</p>}>
				<MovieVideos id={id} />
			</Suspense>
		</div>
	);
}

//https://nomad-movies.nomadcoders.workers.dev/movies
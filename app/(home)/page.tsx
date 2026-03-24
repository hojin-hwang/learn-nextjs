import Link from "next/link";

export const metadata = {
	title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
	const response = await fetch(API_URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return (
		<div>
			{movies.map((movie: any) => (
				<Link key={movie.id} href={`/movies/${movie.id}`}>
					<h3>{movie.title}</h3>
					<img src={movie.poster_path} alt={movie.title} height={200} />
				</Link>
			))}
		</div>
	);
}
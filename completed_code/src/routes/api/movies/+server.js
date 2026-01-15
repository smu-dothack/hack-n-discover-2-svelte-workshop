import { json } from '@sveltejs/kit';
import { allMovies } from '$lib/movieData';

export function GET() {
  return json(allMovies);
}
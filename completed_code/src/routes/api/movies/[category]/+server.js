import { json } from '@sveltejs/kit';
import { allMovies } from '$lib/movieData';

export function GET({ params }) {
  // 1. Capture the category from the URL (e.g., "horror")
  const { category } = params;

  // 2. TODO: Use the .filter() method on 'allMovies'
    const filtered = allMovies.filter(m => m.category === category.toLowerCase());
	console.log(`API calling for category: ${category}. Found: ${filtered.length} movies.`);
  return json(filtered);
}
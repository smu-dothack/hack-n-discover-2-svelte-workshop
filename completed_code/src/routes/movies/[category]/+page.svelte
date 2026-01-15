<script lang="ts">
  import { page } from '$app/state';
  
  interface Movie {
    id: number;
    title: string;
    rating: number; 
    year: number;   
  }
  
  let movies = $state<Movie[]>([]); 
  let category = $derived(page.params.category);

  $effect(() => {
    // call the function only when category exists
    if (category) {
      fetchMovies(category);
    }
  });

  async function fetchMovies(cat: string) {
    try {
      // 1. The Request: Sending an Asynchronous GET request to the API Endpoint
      const response = await fetch(`/api/movies/${cat}`);

      // 2. The Unboxing (The JSON): Parsing the response body stream into a JS Array
      if (response.ok) {
        movies = await response.json();
      }
    } catch (err) {
      // 3. Error Handling: Catching network failures so the app doesn't crash
      console.error("Failed to fetch movies:", err);
    } 
  }
</script>

<h1 class="category-title">{category} Movies</h1>

<div class="movie-grid">
    {#each movies as movie}
        <div class="movie-card">
            <div class="poster-placeholder">
                <span class="play-icon">▶</span>
            </div>
            <div class="movie-info">
                <h3>{movie.title}</h3>
                <div class="meta">
                    <span class="rating">⭐ {movie.rating}</span>
                    <span class="year">2024</span>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
  .category-title {
      text-transform: capitalize;
      margin-bottom: 2rem;
      font-size: 2rem;
  }

  .movie-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 25px;
  }

  .movie-card {
      background: #181818;
      border-radius: 4px;
      overflow: hidden;
      transition: transform 0.3s;
      cursor: pointer;
  }

  .movie-card:hover {
      transform: scale(1.08);
      z-index: 2;
  }

  .poster-placeholder {
      aspect-ratio: 2/3;
      background: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
  }

  .movie-info {
      padding: 15px;
  }

  .movie-info h3 {
      margin: 0 0 10px 0;
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }

  .meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #46d369; /* Green for rating/match score */
      font-weight: bold;
  }
</style>
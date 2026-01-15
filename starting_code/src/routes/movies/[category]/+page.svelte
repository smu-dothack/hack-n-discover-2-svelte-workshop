<script lang="ts">
  import { page } from '$app/state';
  
  interface Movie {
    id: number;
    title: string;
    rating: number; 
    year: number;   
  }
  
  let movies = $state<Movie[]>([]); 
  let loading = $state(true);
  let category = $derived(page.params.category);

  $effect(() => {
    const controller = new AbortController();
    if (category) {
      fetchMovies(category, controller.signal);
    }
    return () => controller.abort();
  });

  async function fetchMovies(cat: string, signal: AbortSignal) {
    loading = true;
    
    // --- GUIDE ---
    // 1. Fetch data from `/api/movies/${cat}` using the provided 'signal'
    // 2. If the response is OK, convert it to JSON
    // 3. Update the 'movies' state with the data
    // 4. Ensure 'loading' is set to false at the end (if not aborted)
    
    try {
        // Your code here...
    } catch (err) {
        // Handle errors...
    }
    // --- END HERE ---
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
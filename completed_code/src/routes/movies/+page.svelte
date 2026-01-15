<h1>Browse by Genre</h1>

<div class="genre-grid">
    <a href="/movies/action" class="genre-card action">🔥 Action</a>
    <a href="/movies/comedy" class="genre-card comedy">😂 Comedy</a>
    <a href="/movies/horror" class="genre-card horror">👻 Horror</a>
</div>

<style>
    .genre-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 2rem;
    }

    .genre-card {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 8px;
        transition: transform 0.3s, filter 0.3s;
        background: #2f2f2f;
    }

    .genre-card:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
    }

    /* Add different background colors or gradients for each genre */
    .action { background: linear-gradient(45deg, #833ab4, #fd1d1d); }
    .comedy { background: linear-gradient(45deg, #fcb045, #fd1d1d); }
    .horror { background: linear-gradient(45deg, #232526, #414345); }
</style>
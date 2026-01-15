<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<div class="app-shell">
	<nav class="navbar">
		<div class="logo">MOVIEBOX</div>
		<div class="nav-links">
			<a href="/">Home</a>
			<a href="/movies">Browse</a>
		</div>
	</nav>

	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		background-color: #141414; /* Netflix Black */
		color: white;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	.navbar {
		display: flex;
		align-items: center;
		padding: 1rem 4%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, transparent);
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.logo {
		color: #e50914; /* Netflix Red */
		font-size: 1.8rem;
		font-weight: bold;
		margin-right: 2rem;
	}

	.nav-links a {
		color: #e5e5e5;
		text-decoration: none;
		margin-right: 20px;
		font-size: 0.9rem;
		transition: color 0.3s;
	}

	.nav-links a:hover {
		color: #b3b3b3;
	}

	.main-content {
		padding: 2rem 4%;
	}
</style>

<script>
import TaskItem from '$lib/TaskItem.svelte';
    // for task A
    let showHelp = false;

    function toggleHelp() {
        showHelp = !showHelp;
    }
    // for task B
    let tasks = $state(['Buy milk', 'Wash dishes', 'Read 10 pages']);
    let newTask = $state('');
    // for task C
    let taskCount = $derived(tasks.length);
    $effect(function() {
        console.log('Tasks updated:', tasks);
        });
    // for task E
    function removeTask(index) {
        tasks = tasks.filter((_, i) => i !== index);

        }



</script>

<div class="container">
  <h1>Activity 1</h1>

  <button class="help-btn" on:click={toggleHelp}>
    {showHelp ? 'Hide' : 'Show'} Help
  </button>
  <h2>My Tasks</h2>
  <p> Total tasks: {taskCount} </p>
  <input placeholder="New task..." bind:value={newTask}/>
    <button on:click={() => {
        if (newTask.trim()) {
            tasks = [...tasks, newTask];
            newTask = '';
            }
    }}>

        Add
    </button>
    <ul>

        {#each tasks as task, i}

        <TaskItem task={task} index={i} 
        removeTask={removeTask}/>

        {/each}

    </ul>

  {#if showHelp}
    <p class="help-text">
      This is the help section. You can hide/show it using a conditional block.
    </p>
  {/if}
</div>

<style>
  /* not needed, just for styling purposes */
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* vertically center */
    text-align: center;
    gap: 15px; /* space between elements */
  }

  /* Button styles */
  .help-btn {
    background-color: #007BFF;
    color: white;
    font-size: 1.2rem;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s, transform 0.2s;
  }

  .help-btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  /* Help text styles */
  .help-text {
    background-color: #f1f1f1;
    padding: 12px;
    border-left: 4px solid #007BFF;
    border-radius: 4px;
    max-width: 400px;
  }
</style>

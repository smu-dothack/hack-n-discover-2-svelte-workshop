<script>
  let { task, index, removeTask } = $props();
</script>

<li class="task-item">
  {index + 1}. {task}
  <button class="remove-btn" on:click={() => removeTask(index)}>Remove</button>
</li>

<style>
.task-item {
  display: flex;
  justify-content: space-between;
  padding: 6px;
  margin: 4px 0;
  background: #f9f9f9;
  border-radius: 4px;
}

.remove-btn {
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background: #d9363e;
}
</style>

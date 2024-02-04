<script lang="ts">
    import "../app.css"
</script>

<svelte:head>
    <title>Expense tracker | dauniel000</title>
</svelte:head>

<div class="flex flex-col items-center">
    <div class="min-w-96 max-w-[500px]">
        <slot/>

    </div>
</div>
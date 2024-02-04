
<script lang="ts">
    import type { PageServerData } from "./$types";

    export let data: PageServerData



</script>


<h1>Expenses tracker</h1>

<div class="w-full">
    <div class="">
        <h2>Current money: {data.money}</h2>
    </div>

    <h2 class="my-2">Incomes</h2>
    <div class="flex flex-col gap-5">
        {#each data.incomes as income}
            <div class="w-full bg-green-900 px-4 py-2 rounded-lg flex justify-between">
                <h3>{income.job}</h3>
                <h3>{income.income} pln</h3>
            </div>
        {/each}
    </div>

    <h2 class="my-2">Expenses</h2>
    <div class="flex flex-col gap-5">
        {#each data.expenses as expense}
        <div class="w-full bg-red-900 px-4 py-2 rounded-lg flex justify-between">
            <h3>{expense.title}</h3>
            <h3>{expense.cost} pln</h3>
        </div>
        {/each}
    </div>
    <form method="post">
        <input type="text" id="title" class="mt-3 w-full px-4 py-2 rounded-l bg-transparent border-2 border-slate-900 outline-none" placeholder="Name" name="name">
        <input type="text" id="cost" class="mt-3 w-full px-4 py-2 rounded-l bg-transparent border-2 border-slate-900 outline-none" placeholder="Cost" name="cost">
        <div class="flex justify-center mt-2 gap-3 flex-col ">
            <label for="income" class="text-center">Income</label>
            <input type="checkbox" name="income" id="income">
        </div>
        <button type="submit" class="w-full mt-3 py-2 bg-slate-900">Add</button>
    </form>
</div>
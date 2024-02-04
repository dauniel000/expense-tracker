import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/prisma"



export const load: PageServerLoad = async () => {

    const incomes = await db.income.findMany()
    const expenses = await db.expense.findMany()

    let money = 0

    for(let x = 0; x < incomes.length; x++) {
        
        money += incomes[x].income
    }

    for(let i = 0; i < expenses.length; i++) {
        money -= expenses[i].cost
    }

    return {
        incomes,
        expenses,
        money
    }
}
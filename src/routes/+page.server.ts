import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/prisma"



export const load: PageServerLoad = async () => {

    const incomes = await db.income.findMany()
    const expenses = await db.expense.findMany()



    return {
        incomes,
        expenses
    }
}
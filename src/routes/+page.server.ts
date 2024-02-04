import type { Actions, PageServerLoad } from "./$types";
import { db } from "$lib/server/prisma"
import { z } from "zod"
import { superValidate } from 'sveltekit-superforms/server';


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


const schema = z.object({
    name: z.string().min(1).max(30),
    cost: z.number().int().min(1).max(1000000),
    income: z.boolean()
})

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, schema)

        if (!form.valid) return "Form is not valid"

        if(form.data.income == true) {
            const income = await db.income.create({
                data: {
                    job: form.data.name || "Job",
                    income: form.data.cost
                }
            })
            return income
        }
        
        const expense = db.expense.create({
            data: {
                title: form.data.name,
                cost: form.data.cost 
            }
        })
        return expense

    }
} satisfies Actions
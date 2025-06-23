export const calculateTotals = (transactions) => {
    let income = 0
    let expense = 0

    transactions.forEach(tx => {
        if (tx.type === 'income') {
            income += tx.amount
        } else if (tx.type === 'expense') {
            expense += tx.amount
        }
    })
    return {
        income,
        expense,
        balance: income - expense
    }
}
/* Lab Exercise 2 */

let account = {
    Name : "JoshuaSandag",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Beli kameja', 100000);
account.addExpenses('Beli celana jeans', 200000);
console.log("Total pengeluaran " + name + "adalah Rp." + account.getAccountSummary());

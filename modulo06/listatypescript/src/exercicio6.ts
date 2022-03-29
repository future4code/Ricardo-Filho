type StudyingCustomer  = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const customerGroup: StudyingCustomer[]  = 
[
    {
        cliente: "João",
        saldoTotal: 1000,
        debitos: [100, 200, 300]
    },
    {
        cliente: "Paula",
        saldoTotal: 7500,
        debitos: [200, 1040]
    },
    {
        cliente: "Pedro",
        saldoTotal: 10000,
        debitos: [5140, 6100, 100, 2000]
    },
    {
        cliente: "Luciano",
        saldoTotal: 100,
        debitos: [100, 200, 1700]
    },
    {
        cliente: "Artur",
        saldoTotal: 1800,
        debitos: [200, 300]
    },
    {
        cliente: "Soter",
        saldoTotal: 1200,
        debitos: []
    }
]

function NeedLoan (list: StudyingCustomer[] ): StudyingCustomer[] {

    const UpdatedList: StudyingCustomer[] = list.map((cliente)=>{
        let debts:number = 0;

        for(let i = 0; i < cliente.debitos.length; i++) {
            debts += cliente.debitos[i]; 
        }
         cliente["saldoTotal"] -= debts; 
         return cliente

    })

    const ListOfApprovedClients  : StudyingCustomer[] = UpdatedList
    .filter((client)=> {
        return client.saldoTotal < 0
    })

return ListOfApprovedClients 
}


console.log(NeedLoan(customerGroup))
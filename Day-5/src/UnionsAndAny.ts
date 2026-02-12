let subs: number | string = '1'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'



const orders = ['12', '20', '28', '42']

let currentorder

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
}

currentorder = 42

console.log(currentorder);

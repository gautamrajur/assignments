/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  if(transactions.length ==0)
    {
      return []
    }

  let categoryArray = [transactions[0]['category']]
  let objectArray = [{category : transactions[0]['category'], 
                      totalSpent : transactions[0]['price']}]

  for(let i = 1; i < transactions.length; i++){
    if(!categoryArray.find((category) => {
      return category == transactions[i]['category']
    })){
      categoryArray.push(transactions[i]['category'])
      objectArray.push({category : transactions[i]['category'],
                       totalSpent: transactions[i]['price']})
    }
   else{
     let index = categoryArray.findIndex((category)=>{
       return category == transactions[i]['category']
     })
     objectArray[index]['totalSpent'] += transactions[i]['price']
   }
  }

  return objectArray

}

// const transactions1 = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: "Clothing",
//     itemName: "T-Shirt",
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: "Electronics",
//     itemName: "Headphones",
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: "Clothing",
//     itemName: "Jeans",
//   },
// ];

// console.log(calculateTotalSpentByCategory())
module.exports = calculateTotalSpentByCategory;

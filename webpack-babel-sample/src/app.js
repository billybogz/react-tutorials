//
// import {checkBills} from "./check-bills"
//
// checkBills()
// import json from "./products.json"
// const word = data.items
// console.log(info)
const info = {
  "items": {
    "c001": {
      "parent": "c000",
      "title": "Phones"
    },
    "c002": {
      "parent": "c000",
      "title": "Laptops"
    },
    "c003": {
      "parent": "c000",
      "title": "Accessories"
    },
    "c004": {
      "parent": "c100",
      "title": "Cameras"
    },
    "p001": {
      "parent": "c001",
      "manufacturer": "Apple",
      "title": "iPhone 10",
      "price": 499,
      "releaseDate": "2018-04-23T18:25:43.511Z"
    },
    "p002": {
      "parent": "c002",
      "manufacturer": "Apple",
      "title": "Macbook Pro 2017",
      "price": 1999,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p003": {
      "parent": "c002",
      "manufacturer": "Dell",
      "title": "XPS 13",
      "price": 1399,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p004": {
      "parent": "c001",
      "manufacturer": "Samsung",
      "title": "Samsung Galaxy S10",
      "price": 399,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p005": {
      "parent": "c003",
      "manufacturer": "Apple",
      "title": "Apple Charger 12W",
      "price": 99,
      "releaseDate": "2016-12-23T18:25:43.511Z"
    },
    "p006": {
      "parent": "c003",
      "manufacturer": "Samsung",
      "title": "Samsung Charger 12W",
      "price": 89,
      "releaseDate": "2017-04-23T18:25:43.511Z"
    },
    "p007": {
      "parent": "c005",
      "manufacturer": "Samsung",
      "title": "Samsung VR Headset",
      "price": 699,
      "releaseDate": "2018-04-23T18:25:43.511Z"
    }
  }
};
let mitems = []
Object.keys(info.items).forEach(key => {
  if(info.items[key].price==undefined){
    mitems.push({ id: key, children: []})
    mitems[mitems.length-1].children.push(getChildren(key))
  }
})
function getChildren(parent){
  let result = []
  Object.keys(info.items).forEach( key => {
    if(parent==info.items[key].parent) result.push(info.items[key])
  } )
  return result
}
console.log(JSON.stringify(mitems,null,2))
// Object.keys(info.items).forEach(key => {
//   const parentKey = key
//   console.log(`${parentKey} - ${JSON.stringify(info.items[parentKey].parent,null,2)}`)
//
// })

function openMenu(){
    let burger = document.getElementById("burger")
    burger.classList.toggle("hidden")
}


function showMenu(){
    console.log("yes")
    if(menu.style.right ==="-200px") {
        menu.style.right ="0";
    } else{
        menu.style.right ="-200px";
    }
}


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");

function addItem(){
    event.preventDefault()
    console.log('sdfghjkgh');
    modal.classList.remove("hidden")    
}

function closeModal(){
    modal.classList.add("hidden")
}
    



// console.log(openModal)

let itemName = document.getElementById("item-name");
let powerRating = document.getElementById("power-rating");
let quantity = document.getElementById("quantity");
// const serial = document.getElementById("serial");
// const list = document.getElementById("list");
// const power = document.getElementById("power");
// const quant = document.getElementById("quant");
// const action = document.getElementById("action");
let tbody = document.getElementById("tbody");
let btnSubmit = document.getElementById("submit")
let btnDel = document.getElementById("btn")


let itemLists = JSON.parse(localStorage.getItem("itemList")) || []
let jsonItemList;
// let itemListsObj = [];


console.log(itemLists)
function renderItems(){
    tbody.innerHTML = []
    console.log(itemLists.length)
    if (itemLists.length > 0){
        itemLists.forEach((item,index) => {
            console.log(item)
            let row = document.createElement('tr');
            let sn = document.createElement("td")
            let itemNameCell = document.createElement('td');
            let powerRatingCell = document.createElement('td');
            let quantityCell = document.createElement('td');
            let deleteBtn = document.createElement('td')
    
            sn.textContent = index+1
            itemNameCell.textContent = item.itemName;
            powerRatingCell.textContent = item.powerRating;
            quantityCell.textContent = item.quantity;
            deleteBtn.innerHTML = `<button onclick="removeItem(${itemLists[index].sn})" class='bg-[#818ED0] p-1 w-20 text-white rounded-md'>DELETE</button>`
    
            row.appendChild(sn)
            row.appendChild(itemNameCell)
            row.appendChild(powerRatingCell)
            row.appendChild(quantityCell)
            row.appendChild(deleteBtn)
            row.classList.add("p-5", "text-center", "bg-white", "h-10", "border-2", "mt-4")
    
            tbody.appendChild(row) 
            calculate();
    
            
        });
    }
   
}

renderItems()

// function clearItems() {
//     itemName.value = ""
//     powerRating.value = ""
//     quantity.value = ""

// }
// itemListsObj = JSON.parse(itemLists);
function removeItem(){
    // console.log(rec, '..rec')
    document.getElementById("tbody").deleteRow(0);
    // window.localStorage.setItem("locateData", JSON.stringify(itemLists))
    // itemListsObj.splice(index,1);
    // localStorage.setItem('itemLists', JSON.stringify(itemListsObj));
}

btnSubmit.addEventListener("click",function (event){
    event.preventDefault()
    console.log(itemLists)
    let  item =  {
    itemName: itemName.value,
    powerRating: powerRating.value,
    quantity: quantity.value,
    }

    itemLists.push(item)
    itemName.value = ""
    powerRating.value = ""
    quantity.value = ""
    console.log(itemLists)
    localStorage.setItem("itemList", JSON.stringify(itemLists))
    closeModal()
   
renderItems()
})

//summary

function calculate(){
    summary = itemLists;

    totalQty = summary.map(sum => Number(sum.quantity))
    totalQuantity = totalQty.reduce((accumulate, current)=>{
        return current + accumulate
    })
    console.log(typeof(totalQty))

    totalPower = summary.map(sum => Number(sum.powerRating))
    totalPowered = totalPower.reduce((accumulate, current)=>{
        return current + accumulate
    })
    console.log(typeof(totalPowered))


    let quant = document.getElementById('quant')
    quant.innerHTML = totalQuantity
    // quant.append(totalQuantity)
    let rate = document.getElementById('rate')
    rate.innerHTML = totalPowered
    // power.append(totalQuantity)
    let energy = document.getElementById('energy')
    energy.innerHTML = totalQuantity * totalPowered
    // energy.append(totalQuantity * totalPowered)
    let cost = document.getElementById('cost')
    let tCost = document.getElementById('total')
    let work = document.getElementById('work')
}

 

    
// function submitForm (event){
//     event.preventDefault()
//     console.log(itemLists)
//     const  item =  {
//     itemName: itemName.value,
//     powerRating: powerRating.value,
//     quantity: quantity.value,
//     }

//     itemLists.push(item)
//     itemName.value = ""
//     powerRating.value = ""
//     quantity.value = ""
//     console.log(itemLists)
//     localStorage.setItem("itemList", JSON.stringify(itemLists))
//     closeModal()
   
// renderItems()
// }

// submit.addEventListener("click", submitForm)

// renderItems()

// //  

    
//     closeModal()
//     console.log(itemLists.length)
// if (itemLists.length > 0){

//     itemLists.forEach((item,index) => {
//         const tr = document.createElement("tr")
//         const td1 = document.createElement("td")
//         const td2 = document.createElement("td")
//         const td3 = document.createElement("td")
//         const td4 = document.createElement("td")
//         const td5 = document.createElement("td")
//         td1.textContent = index+1
//         td2.textContent = item.itemName
//         td3.textContent = item.powerRating
//         td4.textContent = item.quantity
//         td5.innerHTML = `<button class='bg-[#818ED0] p-1 w-20 text-white rounded-md'>DELETE</button>`
//         tr.append(td1)
//         tr.append(td2)
//         tr.append(td3)
//         tr.append(td4)
//         tr.append(td5 )
//         tr.classList.add("p-5", "text-center", "bg-white", "h-10", "border-2", "mt-4")
        
//                        tbody.appendChild(tr)
                       
//     } )
// }


// }



// submit()





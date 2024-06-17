var productName = document.getElementById("productNameInput");
var productPrice = document.getElementById("productPriceInput");
var productCategory = document.getElementById("productCategoryInput");
var productDescription = document.getElementById("productDescriptionInput");
var bodyRowTag = document.getElementById("bodyRows");
var addBtn =document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");
var tmp;
var productList;


if (localStorage.getItem("myProducts") != null) {
  productList = JSON.parse(localStorage.getItem("myProducts"));
  displayProduct(productList);
} else {
  productList = [];
}

// for Creating object collecting all values taken from user over input and push it to productList
function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    Category: productCategory.value,
    Desc: productDescription.value,
  };

  productList.push(product);
  localStorage.setItem("myProducts", JSON.stringify(productList));
  clearForm();
  displayProduct(productList);
}

// for Clearing function after Adding the product object to productList

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}
//Displaying
function displayProduct(productContainer) {
  var cartoona = ``;
  for (let i = 0; i < productContainer.length; i++) {
    cartoona += `<tr>
                <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].Category}</td>
                <td>${productContainer[i].Desc}</td>
                <td><button onclick="updateProduct(${i})"  class="btn btn-sm btn-outline-warning">update</button> </td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">delete</button></td>
                
            </tr>`;
  }
  bodyRowTag.innerHTML = cartoona;
}

// sessionStorage.setItem("userName","Khaled")
function searchProduct(searchItem) {
  var searchList = [];
  for (let i = 0; i < productList.length; i++) {
    if (
      productList[i].name.toLowerCase().includes(searchItem.toLowerCase()) ==
      true
    ) {
      searchList.push(productList[i]);
    }
  }
  displayProduct(searchList);
}

function deleteProduct(deletedIndex) {
  productList.splice(deletedIndex, 1);
  localStorage.setItem("myProducts", JSON.stringify(productList));
  displayProduct(productList);
  // console.log("hello");
}
function updateProduct(updatedItem)
{ tmp=updatedItem;
  productName.value = productList[updatedItem].name;
  productPrice.value = productList[updatedItem].price;
  productCategory.value = productList[updatedItem].Category;
  productDescription.value = productList[updatedItem].Desc;

updateBtn.classList.replace('d-none','d-inline-block');
addBtn.classList.add('d-none');


}
function updateOnModifiedUpdateButton()
{
  productList[tmp].name=productName.value;
  productList[tmp].price=productPrice.value;
  productList[tmp].Category=productCategory.value;
  productList[tmp].Desc=productDescription.value;
  localStorage.setItem("myProducts", JSON.stringify(productList));
  updateBtn.classList.replace('d-inline-block','d-none');
  addBtn.classList.replace('d-none','d-inline-block');
  clearForm();
  displayProduct(productList);

}
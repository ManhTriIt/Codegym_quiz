
    let arrayProduct = ['Nokia', 'Iphone', 'Samsung']
    let value

    const displayProduct = () => {
    let data = `<table><tr><th>Product Name</th><td colspan="2" id="amount">${arrayProduct.length} products</td></tr>`
    for (let i = 0; i < arrayProduct.length; i++) {
    data += `<tr>`
    data += `<td>${arrayProduct[i]}</td>`
    data += `<td><button onclick="editProduct(${i})">Edit</button></td>`
    data += `<td><button onclick="deleteProduct(${i})">Delete</button></td>`
    data += `</tr>`
}
    data += `<table>`
    document.getElementById('display').innerHTML = data
}
    displayProduct()

    const addProduct = () => {
    let product = document.getElementById('add').value
    arrayProduct.push(product)
    document.getElementById('add').value = ''
    displayProduct()
}

    const editProduct = (index) => {
    document.getElementById('edit').value = arrayProduct[index];
    value = index
}

    const replace = () => {
    let editProduct = document.getElementById('edit').value
    arrayProduct[value] = editProduct
    document.getElementById('edit').value = ''
    displayProduct()
}

    const deleteProduct = (index) => {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
    arrayProduct.splice(index, 1)
}
    displayProduct()
}
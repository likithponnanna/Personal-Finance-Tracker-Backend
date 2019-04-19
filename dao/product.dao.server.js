const productModel = require('../models/product.model.server')

createProduct = product =>{
    product.status="PENDING";
    return productModel.create(product)
}

findAllProducts = () =>
    productModel.find()

findProductById = productId =>
    productModel.find({_id: productId})

updateProduct = (productId, product) =>
    productModel.update({_id: productId}, {$set: product})

deleteProduct = productId =>
    productModel.remove({_id: productId})

approveProduct = productId =>
    productModel.update({_id: productId},{status: "APPROVED"})

rejectProduct = productId =>
    productModel.update({_id: productId},{status: "REJECTED"})

findApprovedProduct = () =>
    productModel.find({status: "APPROVED"})

findRejectedProduct = () =>
    productModel.find({status: "REJECTED"})

findPendingProduct = () =>
    productModel.find({status: "PENDING"})

module.exports = {
    createProduct,
    findAllProducts,
    findProductById,
    updateProduct,
    deleteProduct,
    approveProduct,
    rejectProduct,
    findApprovedProduct,
    findRejectedProduct,
    findPendingProduct
}

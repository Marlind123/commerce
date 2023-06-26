const Product = require("../models/Product");

const getProducts = async (req, res) => {
  console.log(Product)
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const createProduct= async(req,res)=>{
  try{
    const product=new Product({
      name: "productx",
      description:"aghasfas",
      price:20,
      countInStock:4,
      imageUrl:"https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"

    })
    const res1=await product.save()
    if(res1){
      res.send({message:"created"})
    }

  }
  catch(error){
    console.log(error)
    res.status(500).json({ message: "Error "})
  }
}

module.exports = {
  getProducts,
  getProductById,
  createProduct
};

import React from 'react'

const UpdateProduct = () => {  const [product, setProduct] = useState({
    name: "",
    price: 0,
    image: "",
    description: ""
});
const [image, setImage] = useState(null);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
        ...product,
        [name]: value
    });
};

const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProduct({
        ...product,
        image: file
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(product);
};
const Get_Product = async ()=>{
    
}
const Add_Product = async ()=>{
    let responseData;
    let prod = product;

    let formData = new FormData();
    formData.append('product',image)

    await fetch(`${server_location}/upload`,{
        method:'POST',
        headers:{
            Accept:'application/json'
        },
        body:formData,
    }).then((res)=>res.json()).then((data)=>{responseData=data});

    if(responseData.success){
        product.image = responseData.image_url;
        console.log(product);
        await fetch(`${server_location}/addproduct`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(product),
        }).then((res)=>res.json()).then((data)=>{
          data.success?alert("Product Added"):alert("Failed to add")
        });

    }
    

}

return (
    <div className='add-product-page'>
        <div className="add-product-container">
            <form onSubmit={handleSubmit}>
                <div className="detail">
                    <div className="name-product form-container">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='Type the Name of the Product' 
                            value={product.name} 
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className="price-product form-container">
                        <label>Price</label>
                        <input 
                            type="number" 
                            name='price' 
                            placeholder='Enter the Price of the Product' 
                            value={product.price} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>
                <div className="description-product form-container">
                        <label>Description</label>
                        <textarea 
                            type="text" 
                            name='description' 
                            placeholder='Enter the Description of the Product' 
                            value={product.description} 
                            onChange={handleInputChange} 
                        />
                    </div>
                <div className="image-product">
                    <label htmlFor="file-input">
                        <img className='file-img' src={image ? URL.createObjectURL(image) : upload_img} alt="" />
                    </label>
                    <input 
                        onChange={imageHandler} 
                        type="file" 
                        name='image' 
                        id='file-input' 
                        hidden 
                    />
                </div>
                <button onClick={()=>Add_Product()} type="submit">Add Product</button>
            </form>
        </div>
    </div>
);
}

export default UpdateProduct
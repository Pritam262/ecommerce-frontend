'use client'
import styles from '@/app/page.module.css'
import {useState} from 'react';
export default function FileUpload() {

  const [product, setProduct] = useState({productType:'', title:"", description:"", qty:"", price:"", color:"", images:[] as File[]});

  const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setProduct({...product,[e.target.name]:e.target.value});
  };

  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files;
    if(files){
      const imagesArray = Array.from(files);
      // setProduct({...product,images:imagesArray});
      setProduct({ ...product, images: imagesArray });
    }
  }

  const uploadProduct = async () => {
    // const formData = new FormData();
    // formData.append('productType', product.productType);
    // formData.append('title', product.title);
    // formData.append('description', product.description);
    // formData.append('qty', product.qty);
    // formData.append('price', product.price);
    // formData.append('color', product.color);
    
    // // Append each image to the FormData object
    // product.images.forEach((image, index) => {
    //   formData.append(`images`, image);
    //   console.log(image);
    // });

    const formData = new FormData();
formData.append('productType', product.productType);
formData.append('title', product.title);
formData.append('description', product.description);
formData.append('qty', product.qty);
formData.append('price', product.price);
formData.append('color', product.color);

for (let i = 0; i < product.images.length; i++) {
  formData.append(`images`, product.images[i]);
}

    const response = await fetch('http://127.0.0.1:3000/api/product/upload', {
      method: 'POST',
      headers: {
        'seller-token': localStorage.getItem('seller-token') || '', // Add token here
      },
      body: formData,
    });

    const data = await response.json();
    console.log("Upload response",data)
    // Handle response as needed
  };
  return (
    <main className={styles.main}>
      <input type="text" name="productType" id="" placeholder='Product type' onChange={handleInputChange} required/>
      <input type="text" name="title" id="" placeholder='Title' onChange={handleInputChange} required/>
      <input type="text" name="description" id="" placeholder='Description' onChange={handleInputChange} required/>
      <input type="text" name="qty" id="" placeholder='Qty' onChange={handleInputChange} required/>
      <input type="text" name="price" id="" placeholder='Price' onChange={handleInputChange} required/>
      <input type="text" name="color" id="" placeholder='Color' onChange={handleInputChange} />
      <input type="file" name="images" id="" multiple onChange={handleImageChange}/>
      <button onClick={uploadProduct}>Upload</button>
    </main>
  )
}

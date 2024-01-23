"use client"
export default function Button(id:any){

    const cartProduct = async (id:string)=>{

        console.log("Cart product", id);
    }
    console.log("Product ID Show",id);

    return(
        <div style={{ margin: "15px", cursor: "pointer", border: " 1px solid #000", width: "max-content", padding: " .5rem 1.5rem" }} onClick={()=>cartProduct(id.id)}>Cart</div>
    )
}
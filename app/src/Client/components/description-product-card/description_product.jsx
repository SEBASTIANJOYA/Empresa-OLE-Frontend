import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./description_product.css";
import WindowAlert from "sweetalert";
const DescripitionProduct = ({product}) => {

  const [amount,setAmount]=useState(1);
  const {addItemToCart}=useContext(CartContext)
  var route = "http://empresa-ole-backend.vercel.app/" + product.file_img;

  const Disamount=() => {
    if(amount!=1){
      setAmount(amount-1);
    }
  }

  const CloseModalDescription=(e)=>{
    e.preventDefault();

    const modal=document.querySelector('.modal')
    modal.classList.remove('modal__product-description--show')
    setAmount(1);
    
  }
  
  const Total=() => {

    
    var total=product.price*amount;

    return total;
  }

  return (
    <>
      <section className="modal modal__product-description">
       
        <div className="modal__container">
          <i className="fa-solid fa-xmark fa-2xl" onClick={CloseModalDescription}></i>
          <img src="https://media.licdn.com/dms/image/D4E03AQGtqxFgtsjaQQ/profile-displayphoto-shrink_800_800/0/1664400648584?e=2147483647&v=beta&t=tRpuk4rhV9qyUdKjBtDJvL6dwbTxds5qZ0OUy-D5jIc"></img>
          <div>
            <div className="modal__title">{product.name}</div>
            <div className="modal__description">
              {product.description}
            </div>
            <div className="modal__prize">
              <button className="btn__amount" onClick={Disamount}>-</button>
              <input type="number" value={amount}  readOnly="true"></input>
              <button className="btn__amount"onClick={e=>{setAmount(amount+1)}}>+</button>
              <button className="btn__add btn btn-primary" onClick={()=>{
                addItemToCart(product,amount)
                WindowAlert({
                  title:"Carrito",
                  text: "Producto Añadido Correctamente",
                  icon: "success",
                  timer:"3000"
                })
                }}>Agregar</button>
              <div className="prize__product">$ {Total()}</div> 
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DescripitionProduct;

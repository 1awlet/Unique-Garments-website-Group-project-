import "./styleItem.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { useSelector } from "react-redux";
import { addToWishList } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Store/Reducers/CartReducer/cartActions";
const DisplayItem = ()=> {
  const {itemId} = useParams();
  const [selectedItem, setselectedItem] = useState();
  const AllCatagories = useSelector(SelectAllCatagories);
  const currentUser = useSelector((state)=> state.user.currentUser);
  const cartItems = useSelector((state)=> state.cart.cartItems);
  
  const dispatch =useDispatch();
  const addItemtoWish = async ()=> {
    if(currentUser){
      await addToWishList(currentUser.id, selectedItem);
      
    }
  }
  const addSelectedItemToCart = ()=>{
    
    dispatch(addItemToCart(selectedItem,cartItems ))
  }

  useEffect( ()=>{
    const findSelectedItem = async() => {
      const item= await AllCatagories.find((item) => item.id == itemId);
      setselectedItem(item)

    }
    findSelectedItem();
  },[])


    return(
      <> { 
       selectedItem &&
    <div className="container">

   <div className="itemImage">
        
        <img id="item" src={selectedItem.image}/>
    </div>

    <div className="itemclassName">
     
    <h1 id="title">{selectedItem.title}</h1>
    <h4>{selectedItem.descripton}</h4>
    <br/>
    <p>${selectedItem.price}</p>
    <p>Colour: {selectedItem.color}</p>
    <br/>

    <div className="sizeGroup">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
    </div>


<div className="itembtns">
<button className="addItemToWishList"  onClick={addItemtoWish}>
    Add to Wishlist
</button>

<button className="addItemTocart" onClick={addSelectedItemToCart}>
    Add to shopping cart
</button>
</div>

</div>


    </div>
  }
    </>
    )
}

export default DisplayItem;

import { useEffect, useState } from "react"
import MenuItem from "./MenuItem"

const Cart = () => {

    const [firstItem, setFirstItem] = useState({
        name:"Briyani", quantity:2
    });
//     useEffect(() => {
//         setTimeout(()=>{
//             setFirstItem(item => {
//                 return {
//                     ...item,
//                     quantity:20
//                 }
//             })
//         }, 3000000000)   

//    });

return (    
    <section className="max-w-md">
        <h1 className="mt-5">Cart Items</h1>
        <ul>
            <MenuItem item={firstItem}/>
            <MenuItem item={{name:"Pulao",quantity:3}}/>
            <MenuItem item={{name:"Qorma",quantity:4}}/>
        </ul>
        
    </section>
    
    
)
}

export default Cart
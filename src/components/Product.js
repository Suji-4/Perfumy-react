import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

//product component 

function Product(){
    return(
      <div className="products">
        <div className="box">
        <img src={one} alt="one"></img>
        <p>MYOP,Long-lasting Perfume,Fabulous 500ML</p>  
        </div>
  
        <div className="box">
        <img src={two}alt="two"></img>
        <p> Carlton,Women Overose Perfume 100Ml </p>  
        </div>
       
        <div className="box">
        <img src={three} alt="three"></img>
        <p>Fancy Perfume Glass Bottle 100ML</p>  
        </div>
      </div>
    )
  }
  export default Product
import one from "../assets/images/one.jpeg"
import two from "../assets/images/two.jpeg"



// products component

function Product()
{
  return(
    <div class="products">
    <div class="box">
        <img src={one} alt="one"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, suscipit. Ad deserunt  </p>
    </div>
    <div class="box">
        <img src={two} alt="two"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, suscipit. Ad deserunt  </p>
    </div>
    <div class="box">
        <img src={one} alt="three"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, suscipit. Ad deserunt  </p>
    </div>
    </div>
  )
}
export default Product
import proyecto1 from "./../../assets/images/bochinchehtml.png";
import proyecto2 from "./../../assets/images/bochincheReact.png";
import "./work.scss";

function Work (){
return(
<>
  <div className="gallery img-fluid">
 <a href="https://erie31.github.io/bochinche/"><img link to src={proyecto1} alt="landpage de inflables"/></a>
 <a href="https://bochinchereact.vercel.app/"> <img src={proyecto2} alt="ecommerce inflables"/></a>
  </div>

 </>     
)



}
      export default Work;

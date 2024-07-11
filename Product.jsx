import Price from './Price.jsx';
import "./Product.css";


export default function Product ({title, idx}){


  
    let oldPrice=["5000","6000","7000","8000"];
  let newPrice=["4000","5000","6000","7000"];
  let discription=["Samsung phone","vivo phone","oppo phone","mi phone"  ];
return (
  <div class = "product">
  <h4> {title}</h4>
  <p>{discription [idx]}</p>
  <Price oldprices={oldPrice[idx]} newprices={newPrice[idx]} />
  </div>

    
  );


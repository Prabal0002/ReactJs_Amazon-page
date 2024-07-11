import Product from './Product.jsx';

export default function ProductTab(){
  let style ={
  display:"flex",
  flexBox:"wrap",
  justifyContent:"center",
  alignItems:"center",
}
    return(
<div style={style}>
  <Product title="samsung" idx={0} />
    <Product title="vivo" idx={1} />

  <Product title="oppo" idx={2}/>

  <Product title="mi" idx={3} />
</div>
  
);

}

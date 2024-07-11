export default function Price({oldprices,newprices}){
let oldStyle={
  textDecoration:"line-through",
};
  let newStyle={
    fontWeight:"bold",
  };
  let style={
    backgroundColor:"#e0c367",
    height:"30px",
    borderBottomLeftRadius:"14px",
    borderBottomRightRadius:"14px",
  };
return(
  <div style={style}>
    <spam style={oldStyle}>{oldprices}</spam>
    &nbsp;&nbsp;nbsp;
    <spam style={newStyle}>{newprices}</spam>
      </div>
      );

}

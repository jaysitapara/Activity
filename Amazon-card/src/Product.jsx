import './Product.css'
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrice = ["12,495", "11,990", "1,599", "599" ];
    let newPrice = ["8,999", "9,199", "899", "270"];
    let description = [
        ["8000 DPI", "5 Programmable buttons"],
        ["intutive surface", "designed for iPad"],
        ["designed for iPad", "intutive surface"],
        ["Wireless", "optical orientation"],
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}
export default Product;
import React from "react";
import { Button, Card } from "react-bootstrap";
import { FormatCurr } from "./FormateCurr";
import { useShoppingCart } from "../Context/ShoppingCartContext";
export default function StoreItem({ id, price, name, imgUrl }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div>
      <Card className="h-100 p-1">
        <Card.Img
          src={imgUrl}
          alt="img"
          variant="top"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}></Card.Img>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <span className="fs-2">{name}</span>
            <span className="text-muted m-2">{FormatCurr(price)}</span>
          </Card.Title>
        </Card.Body>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="btn btn-primary w-100 "
              onClick={()=>increaseCartQuantity(id)}>
              Add to cart
            </Button>
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="d-flex align-items-center justify-content-center p-1">
                  <Button className="m-3" variant="outline-primary"
                  onClick={()=>decreaseCartQuantity(id)}
                  >
                  -
                </Button>
                <span className="fs-3">{quantity} in cart</span>
                  <Button className="m-3" variant="outline-primary"
                  onClick={()=>increaseCartQuantity(id)}
                  >
                  +
                </Button>
              </div>
                <Button className="m-2 " variant="outline-danger" size="small"
                onClick={()=>removeFromCart(id)}
                >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

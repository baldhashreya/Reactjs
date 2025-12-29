import { useState } from "react";
import { FormValidation } from "./FormValidation";

export function ShowData() {
  const [items, setItems] = useState([
    {
      productName: "Books",
      Quantity: 10,
    },
    {
      productName: "Pens",
      Quantity: 20,
    },
  ]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.productName} - {item.Quantity}
          </li>
        ))}
      </ul>

      <FormValidation setItems={setItems} />
    </div>
  );
}

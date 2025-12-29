import { useState } from "react";

export function FormValidation({ setItems }) {
  const [formData, setFromData] = useState({
    productName: "",
    Quantity: "",
  });

  const handleChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems(prev => [
      ...prev,
      {
        productName: formData.productName,
        Quantity: Number(formData.Quantity),
      },
    ]);

    setFromData({
      productName: "",
      Quantity: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="productName"
        placeholder="product name"
        value={formData.productName}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="Quantity"
        placeholder="Quantity"
        value={formData.Quantity}
        onChange={handleChange}
        required
        min="1"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

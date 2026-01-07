import { useState } from "react";

export function FormValidation({ setItems }) {
  const [formData, setFromData] = useState({
    productName: "",
    Quantity: "",
  });
  const [isValidName, setIsValidName] = useState(true);
  const validateForm = (name: string) => {
    console.log(name);
    console.log(name.length);
    if (!name || name.length < 3) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  const handleChange = (e) => {
    validateForm(e.target.value);
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems((prev) => [
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
        // required
      />
      {!isValidName ? <p>Invalid name</p> : null}
      <input
        type="number"
        name="Quantity"
        placeholder="Quantity"
        value={formData.Quantity}
        onChange={handleChange}
        // required
        // min="1"
      />
      <button
        type="submit"
        disabled={!isValidName}
      >
        Submit
      </button>
    </form>
  );
}

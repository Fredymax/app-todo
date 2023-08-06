import { useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const updateForm = ({ target }) => {
    if (!target) return;
    const property = target.getAttribute("name");
    setForm((prev) => ({
      ...prev,
      [property]: target.value,
    }));
  };

  return [form, updateForm];
};

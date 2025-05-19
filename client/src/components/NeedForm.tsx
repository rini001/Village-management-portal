import { useState } from "react";
import { postNeed } from "../api/api";
import type { Need } from "../types";

const NeedForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const enums = [
    "Roads",
    "Water",
    "Electricity",
    "Healthcare",
    "Education",
    "Other",
  ];
  const [form, setForm] = useState<Need>({
    category: "",
    description: "",
    villageName: "",
    priority: "Medium",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postNeed(form);
    alert("Need submitted!");
    setForm({
      category: "",
      description: "",
      villageName: "",
      priority: "Medium",
    });
    onSuccess(); // Reload the list
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8 space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Submit a Village Need</h2>
      {/* 
      <input
        className="w-full border p-2 rounded"
        name="category"
        placeholder="Category (e.g. Roads, Water)"
        value={form.category}
        onChange={handleChange}
        required
      /> */}
      <select
        className="w-full border p-2 rounded"
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        {enums.map((enumValue) => (
          <option key={enumValue} value={enumValue}>
            {enumValue}
          </option>
        ))}
      </select>
      <input
        className="w-full border p-2 rounded"
        name="villageName"
        placeholder="Village Name"
        value={form.villageName}
        onChange={handleChange}
        required
      />

      <textarea
        className="w-full border p-2 rounded"
        name="description"
        placeholder="Describe the issue"
        value={form.description}
        onChange={handleChange}
        required
      />

      <select
        className="w-full border p-2 rounded"
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default NeedForm;

import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./ExpenseForm.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "amount field is required." })
    .min(0, { message: "Must be at least 18." }),
  category: z.enum(["entertainment", "utilities", "groceries"], {
    message: "Category is required",
  }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const spread = { ...data };
    console.log(spread);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="error-message">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="error-message">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <select
          {...register("category")}
          id="categories"
          className="form-select"
          aria-label="Default select example"
        >
          <option id="default-option" value="default">
            Categories
          </option>
          <option id="category-option" value="utilities">
            Utilities
          </option>
          <option id="category-option" value="entertainment">
            Entertainment
          </option>
          <option id="category-option" value="groceries">
            Groceries
          </option>
        </select>
      </div>
      {errors.category && (
        <p className="error-message">{errors.category.message}</p>
      )}
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;

import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./Form.css";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "amount field is required." })
    .min(18, { message: "Must be at least 18." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

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
          id="categories"
          className="form-select"
          aria-label="Default select example"
        >
          <option id="default-option" value="default">
            Categories
          </option>
          <option id="category-option" value="1">
            Utilities
          </option>
          <option id="category-option" value="2">
            Entertainment
          </option>
          <option id="category-option" value="3">
            Groceries
          </option>
        </select>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

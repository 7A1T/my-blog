"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Field, Input, Textarea, Button } from "@headlessui/react";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data:", data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Field>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <Input
              {...field}
              id="name"
              className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white focus:outline-none"
            />
          )}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </Field>

      <Field>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              id="email"
              type="email"
              className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white focus:outline-none"
            />
          )}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </Field>

      <Field>
        <label htmlFor="message" className="block mb-1">
          Message
        </label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <Textarea
              {...field}
              id="message"
              rows={4}
              className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white focus:outline-none"
            />
          )}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </Field>

      <Button
        type="submit"
        className="px-6 py-2 bg-white text-primary-dark font-medium rounded hover:bg-white/90 transition-colors"
      >
        Send Message
      </Button>
    </form>
  );
}

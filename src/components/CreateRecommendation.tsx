"use client";

import React, { useState } from 'react';
import { createRecommendation } from '@/services/api';

interface RecommendationForm {
  type: string;
  image: string;
  title: string;
  description: string;
  url: string;
}

const CreateRecommendation: React.FC = () => {
  const [form, setForm] = useState<RecommendationForm>({
    type: '',
    image: '',
    title: '',
    description: '',
    url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createRecommendation(form);
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="url" value={form.url} onChange={handleChange} placeholder="URL" />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateRecommendation;

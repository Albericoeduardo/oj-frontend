import React, { useState } from 'react';
import { createNews } from '@/services/newsService/newsService';

const CreateNews: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    try {
      // Realizar o upload da imagem para o Pics Shade
      const formData = new FormData();
      formData.append('file', image);

      const response = await fetch('https://pics.shade.cool/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 4j9bdm8b86chzakdywlsun', // Substitua pelo token de acesso da API
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();

      const imageUrl = data.url; // O campo 'url' contém o link da imagem, de acordo com a documentação

      // Criar a notícia com o link da imagem
      const news = {
        title,
        description,
        image: imageUrl,
      };

      await createNews(news);
      alert("News created successfully!");

      // Limpar o formulário após a submissão
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error creating news:', error);
      alert("Failed to create news");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit">Create News</button>
    </form>
  );
};

export default CreateNews;

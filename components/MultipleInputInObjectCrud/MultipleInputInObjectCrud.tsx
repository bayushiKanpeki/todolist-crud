import React from 'react';
import styled from 'styled-components';
import { ChangeEvent } from 'react';
import MultipleInputList from './MulitpleInputList';

let nextId = 0;

interface Iforms {
  articleName: string;
  articleContent: string;
}

export interface Iarticle {
  id?: number;
  articleName: string;
  articleContent: string;
}

const MultipleInputInObjectCrud = () => {
  const [form, setForm] = React.useState<Iforms>({
    articleName: '',
    articleContent: '',
  });
  const [articles, setArticles] = React.useState<Iarticle[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ADD ARTICLE
  const handleAddArticle = e => {
    e.preventDefault();
    setArticles([
      ...articles,
      {
        id: nextId++,
        articleName: form.articleName,
        articleContent: form.articleContent,
      },
    ]);
  };

  // DELETE ARTICLE
  const handleDelete = (articleId: number) => {
    setArticles(articles.filter(a => a.id !== articleId));
  };

  return (
    <>
      <Form>
        <Label>
          <h6>Article Name</h6>
          <Input
            type="text"
            name="articleName"
            value={form.articleName}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <h6>Article Content</h6>
          <Input
            type="text"
            name="articleContent"
            value={form.articleContent}
            onChange={handleChange}
          />
        </Label>
        <AddButton onClick={handleAddArticle}>Submit</AddButton>
      </Form>
      {/* ARTICLE LIST */}
      <MultipleInputList list={articles} handleDelete={handleDelete} />
    </>
  );
};

const Form = styled.form``;
const Label = styled.label``;

const Input = styled.input`
  margin-bottom: 12px; ;
`;

const AddButton = styled.button`
  background: gainsboro;
  padding: 12px 16px;
  border-radius: 4px;

  font-size: 1.2rem;
`;

export default MultipleInputInObjectCrud;

import React from 'react';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import TwoInputCrudList from './TwoInputCrudList';

type Props = {};

let nextId = 0;

export interface IarticleList {
  id: number;
  articleName: string;
  articleContent: string;
}

const TwoInputCrud = (props: Props) => {
  const [articleName, setArticleName] = React.useState<string>('');
  const [articleContent, setArticleContent] = React.useState<string>('');
  const [articleList, setArticleList] = React.useState<IarticleList[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'articleName') {
      setArticleName(e.target.value);
    } else {
      setArticleContent(e.target.value);
    }
  };

  // ADD ARTICLE
  const handleAddArticle = e => {
    e.preventDefault();
    setArticleList([
      ...articleList,
      {
        id: nextId++,
        articleName: articleName,
        articleContent: articleContent,
      },
    ]);
    setArticleName('');
    setArticleContent('');
  };

  // DELETE ARTICLE
  const handleDelete = (articleListId: number): void => {
    setArticleList(articleList.filter(a => a.id !== articleListId));
  };

  return (
    <>
      <Form>
        <Label>
          <h6>Article Name</h6>
          <Input
            type="text"
            name="articleName"
            value={articleName}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <h6>Article Content</h6>
          <Input
            type="text"
            name="articleContent"
            value={articleContent}
            onChange={handleChange}
          />
        </Label>
        <AddButton onClick={handleAddArticle}>Submit</AddButton>
      </Form>
      {/* ARTICLE LIST */}
      <TwoInputCrudList list={articleList} handleDelete={handleDelete} />
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

export default TwoInputCrud;

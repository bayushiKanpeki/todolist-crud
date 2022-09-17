import Spacer from 'components/Spacer';
import React from 'react';
import styled from 'styled-components';
import SingleInputCrudList from './SingleInputCrudList';

export interface IList {
  id: number;
  listTitle: string;
}

let nextId = 0;

const SingleInputCrud = () => {
  const [singleValueForm, setSingleValueForm] = React.useState<string>('');
  const [list, setList] = React.useState<IList[]>([]);

  // ADD A LIST
  const handleAddList = e => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: nextId++,
        listTitle: singleValueForm,
      },
    ]);
    setSingleValueForm('');
  };

  const handleChange = e => {
    setSingleValueForm(e.target.value);
  };

  // DELETE
  const handleDelete = (listId: number): void => {
    setList(list.filter(l => l.id !== listId));
  };

  return (
    <>
      {/* FORM ADDER */}

      <Form>
        <Label>
          <h6>Article</h6>
          <Input type="text" value={singleValueForm} onChange={handleChange} />
        </Label>
        <AddButton onClick={handleAddList}>Submit</AddButton>
      </Form>
      {/* LIST */}

      <SingleInputCrudList list={list} handleDelete={handleDelete} />
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
  padding: 8px 16px;
  border-radius: 4px;

  font-size: 1.2rem;
`;

export default SingleInputCrud;

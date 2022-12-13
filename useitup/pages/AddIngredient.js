import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';

function  AddIngredientNoLogin() {
  const [ingredient, setIngredient] = useState('');
  // const [ts, setTs] = useState('');

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  }

  const handleIngredientSubmit = (e) => {
    console.log(ingredient)
  }

  

// useEffect(() => {
//   var f = async () => {
//     var r = await fetch('/api/x');
//     var y = await r.json(); 
//     setTs(y.name);
//   }
//   f();

// }, []);




  return (
    <>
      <InputGroup className="mb-3 w-25">
        <Form.Control
          onChange={handleIngredientChange}
          type="text"
          aria-label="Ingredient to search"
          aria-describedby="ingredient-search"
        />
        <Button onClick={handleIngredientSubmit} variant="outline-secondary" id="AddIngredientNoLoginButton"
        type='submit'>
          Find Recipies
        </Button>
      </InputGroup>

    </>
  );
}

export default AddIngredientNoLogin;
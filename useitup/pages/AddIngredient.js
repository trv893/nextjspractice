import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddIngredientNoLogin() {
  return (
    <>
      <InputGroup className="mb-3 w-25">
        <Form.Control
          placeholder="Type Ingredient Here..."
          aria-label="Ingredient to search"
          aria-describedby="ingredient-search"
        />
        <Button variant="outline-secondary" id="AddIngredientNoLoginButton"
        type='submit'>
          Find Recipies
        </Button>
      </InputGroup>

    </>
  );
}

export default AddIngredientNoLogin;
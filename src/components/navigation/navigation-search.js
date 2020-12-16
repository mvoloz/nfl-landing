import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NavigationSearch = ({ handleSubmit, handleInputChange }) => {
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={handleInputChange}
      />
      <Button variant="outline-success" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
};

export default NavigationSearch;

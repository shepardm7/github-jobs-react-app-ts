import React, {ChangeEvent} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export type SearchParams = {
  description: string;
  location: string;
  full_time: boolean;
}

type SearchFormProps = {
  params: { [key: string]: any };
  onParamChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchForm({params, onParamChange}: SearchFormProps) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={onParamChange} value={params.description} name="description" type="text"/>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control onChange={onParamChange} value={params.location} name="location" type="text"/>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time"
                      label="Only Full Time" type="checkbox" className="mb-2"/>
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

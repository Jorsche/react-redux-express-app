import React, {useState} from 'react';
import './AddCardForm.css';
import { Button, Checkbox, Form } from 'semantic-ui-react'
const AddCardForm = ({setCardInfor, cardInfor, setButtonState}) => {

    const [value,setValue]= useState({});

    const onChange =(key,e,headerKey)=>{
            setCardInfor(
                { ...cardInfor,
                    [headerKey]: { [key]:e.target.value}}
            );
        }



    return (
            <Form>
                <Form.Field>
                    <label>Header</label>
                    <input
                        placeholder='Header'
                        onChange={(e)=>{onChange("header")}}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input
                        placeholder='Price'
                        onChange={(e)=>{onChange("price",e)}}

                    />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input
                        placeholder='Description'
                        onChange={(e)=>{onChange("description",e)}}

                    />
                </Form.Field>
                <Button
                    type='submit'
                    onClick={()=>{setButtonState(true)}}
                >
                    Add
                </Button>
            </Form>
    )
        ;}



export default AddCardForm;

import React from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddProduct = () => 
{

    const [user] = useAuthState(auth);
    const handleaddProduct = (event) =>
    {
        event.preventDefault();

        const name = event.target.name.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sale = event.target.sale.value;
        const supplier = event.target.supplier.value;
        const newItem = {
            name : name,
            img : img,
            description : description,
            price : price,
            quantity : quantity,
            supplier : supplier,
            sale : sale,
            user_Name : user.displayName,
            user_Email : user.email
        }

        fetch('http://localhost:5000/addnewitem' ,{
            method : 'POST',
            headers:
            {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data =>
            {
                console.log(data);
            })

        /*  */
    }

    return (
        <div className='mar-20'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 ">
                    <div className="col mx-auto">
                        <div className="card border-0 p-5  shadow-lg">
                            <h2 className="card-title text-center">Add New Item Here</h2>
                            <div className="card-body text-center mt-5">
                                <Form onSubmit={handleaddProduct}>
                                    <Form.Group className="mb-3" controlId="formProductName">
                                        <Form.Control type="text" name="name" placeholder="Enter product Name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" name="img" placeholder="Enter product's image url" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicDescription">
                                        <Form.Control type="text" name="description" placeholder="Enter product's description" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicquantity">
                                        <Form.Control type="text" name="quantity" placeholder="Enter product's quantity" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPrice">
                                        <Form.Control type="text" name="price" placeholder="Enter product's price" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                                        <Form.Control type="text" name="Supplier" placeholder="Enter Supplier name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicSale">
                                        <Form.Control type="text" name='sale'  placeholder="Enter product's sale" required />
                                    </Form.Group>
                                    <button type="submit">
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;
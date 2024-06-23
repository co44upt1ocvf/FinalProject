import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { CREDENTIALS } from './CREDENTIALS';
import { Form, Button } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const sendEmail = (data) => {
    const emailData = {
      name: data.name,
      email: data.email,
      message: data.message
    };

    emailjs.send(CREDENTIALS.serviceId, CREDENTIALS.templateId, emailData, CREDENTIALS.userId)
      .then((result) => {
        console.log(result.text);
        console.log("SVO");
        reset();
      }, (error) => {
        console.error(error.text);
      });
  };

  return (
    <Form className="feedback-form" onSubmit={handleSubmit(sendEmail)}>
      <Form.Group controlId="name">
        <Form.Control placeholder='Name' type="text" {...register('name', { required: true })} />
        {errors.name && <Form.Text className="text-danger">Поле обязательно для заполнения</Form.Text>}
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Control placeholder='Email' type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <Form.Text className="text-danger">Введите корректный email</Form.Text>}
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Control placeholder='Your messege...' as="textarea" rows={3} {...register('message', { required: true })} />
        {errors.message && <Form.Text className="text-danger">Поле обязательно для заполнения</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">Отправить</Button>
    </Form>
  );
};

export default ContactForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { CREDENTIALS } from './CREDENTIALS';

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
    <form className="feedback-form" onSubmit={handleSubmit(sendEmail)}>
      <div>
        <label htmlFor="name">Имя</label>
        <input id="name" {...register('name', { required: true })} />
        {errors.name && <span>Поле обязательно для заполнения</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Введите корректный email</span>}
      </div>

      <div>
        <label htmlFor="message">Сообщение</label>
        <textarea id="message" {...register('message', { required: true })} />
        {errors.message && <span>Поле обязательно для заполнения</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;

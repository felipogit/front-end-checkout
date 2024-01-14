
import { Control, Controller, useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, schema } from "./validator";
import { StyledForm, StyledMain } from "./styled";
import { DatePickerCalender } from "../DatePicker";
import { Modal } from "../Modal";
import { Total } from "../Total";
import { Input } from "../Input/Index";
import { today, getLocalTimeZone } from '@internationalized/date';
import { EmailIcon } from "../Icons";

export const FormCheckout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);


  const { register, handleSubmit, setValue, control, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      childPassenger: 0,
      adultPassenger: 0,
      departureDate: today(getLocalTimeZone()),
      returnDate: today(getLocalTimeZone()),
    }
  });

  const onSubmit = (data: FormData) => {
    setIsOpenModal(true);
    console.log(data)
    // reset();


  };

  return (
    <StyledMain>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="container-date">
         <div>
         <Controller
            name="departureDate"
            control={control}
            render={({ field }) => {
              return (
                <DatePickerCalender value={field.value} onChange={field.onChange} label="Data de ida" />
              )
            }} />
         </div>
          <div>
          <Controller
            name="returnDate"
            control={control}
            render={({ field }) => {
              return (
                <DatePickerCalender value={field.value} onChange={field.onChange} label="Data de volta" />
              )
            }} />
          </div>
        </div>
        <div className="container">
          <div>
            <Input type="text" label="Origem" placeholder="Origem" src="../src/assets/Children.svg" {...register("origin")} />
            {errors.origin?.message}
          </div>
          <div>
            <Input type="text" label="Destino" placeholder="Destino" src="../src/assets/Children.svg" {...register("destination")} />
            {errors.destination?.message}
          </div>
        </div>
        <h2>informações dos passageiros</h2>
        <div className="top-container">
          <Controller
            name="adultPassenger"
            control={control}
            render={({ field }) => {
              return (
                <div className="top-passengers">
                  <h4 onClick={() => { field.onChange(field.value > 0 ? field.value - 1 : 0) }}>-</h4>
                  <div className="passengers">
                    <img src="../src/assets/Children.svg" alt="" />
                    <img src="" alt="" />
                    <p>Adultos</p>
                    <span>{field.value}</span>
                  </div>
                  <button onClick={() => { field.onChange(field.value + 1) }}>+</button>
                </div>
              )
            }}
          />
          <Controller
            name="childPassenger"
            control={control}
            render={({ field }) => {
              return (
                <div className="top-passengers">
                  <h4 onClick={() => { field.onChange(field.value > 0 ? field.value - 1 : 0) }}>-</h4>
                  <div className="passengers">
                    <img src="../src/assets/Children.svg" alt="" />
                    <img src="" alt="" />
                    <p>Crianças</p>
                    <span>{field.value}</span>
                  </div>
                  <button onClick={() => { field.onChange(field.value + 1) }}>+</button>
                </div>
              )
            }} />
          <Total control={control} />
        </div>
        <div>
        {errors.adultPassenger?.message}
        </div>
        <div className="container">
          <div>
            <Input type="text" label="Nome completo" placeholder="Origem"  {...register("name")} />
            {errors.name?.message}
          </div>
          <div>
            <Input type="email" label="E-mail" placeholder="Destino" rightElement={<EmailIcon width={20} height={20} />}  {...register("email")} />
            {errors.email?.message}
          </div>
        </div>
        <button type="submit" className="button-checkout" >Enviar Checkout</button>
      </StyledForm>

      {isOpenModal && <Modal isOpen={isOpenModal} onOpenChage={setIsOpenModal} delay={1000} >
        <h1>Checkout efetuado com sucesso!</h1>
        <img src="../src/assets/Success.svg" alt="" />
      </Modal>}

    </StyledMain>
  );
};




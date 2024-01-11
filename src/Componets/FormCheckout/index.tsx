
import { Control, Controller, useForm, useWatch } from "react-hook-form";
// import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, schema } from "./validator";
import { StyledForm, StyledMain } from "./styled";
import { DatePickerCalender } from "../DatePicker";
export const FormCheckout = () => {

  const { register, handleSubmit, setValue, control } = useForm<FormData>({
    
    defaultValues: {
      childPassenger: 0,
      adultPassenger: 0,
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('apareci', data);
  };

  


  return (
    <StyledMain>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <DatePickerCalender label="Ida" {...register("departureDate")} />
          <DatePickerCalender label="Volta" {...register("returnDate")} />
        </div>
        <div className="container">
          <input type="text" placeholder="Origem" {...register("origin")} />
          <input type="text" placeholder="Destino" {...register("destination")} />
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
                  <h4 onClick={() => { field.onChange(field.value + 1) }}>+</h4>
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
                  <h4 onClick={() => { field.onChange(field.value + 1) }}>+</h4>
                </div>
              )
            }} />
          <Total control={control} />
        </div>
        <div className="container">
          <input type="text" placeholder="Nome" {...register("name")} />
          <input type="text" placeholder="Email " {...register("email")} />
        </div>
        <button type="submit">Enviar Checkout</button>
      </StyledForm>
    </StyledMain>
  );
};



function Total({ control }: { control: Control<FormData> }) {
  const children = useWatch({
    control,
    name: "childPassenger",

  })
  const adults = useWatch({
    control,
    name: "adultPassenger",

  })

  const total = children + adults

  return <div className="passengers-total">
    <h2>Total</h2>
    <h5>{total}</h5>
    <div className="passengers-value">
      <p>{adults}</p> <span>adultos</span>
    </div>
    <div className="passengers-value">
      <p>{children}</p> <span>Crianças</span>
    </div>
  </div>
}
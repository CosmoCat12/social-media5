import "./RegistrationPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/UI";

export const RegistrationPage = () => {
  return (
    <div className="LoginPage">
      <Heading variant={"h1"} text={"Регистрация"} />
      <form action="#">
        <Input type={"email"} placeholder={"Электронная почта"} />
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"} />
        <Input type={"password"} placeholder={"Подтверждение пароля"} />
        <Button text={"Зарегистрироваться"} />
      </form>
      <RegistrationInfo
        linkText={"Aвторизоваться"}
        hasAccountText={"У вас есть аккаунт?"}
        authWithText={"Зарегистрироваться с помощью"}
      />
    </div>
  );
};

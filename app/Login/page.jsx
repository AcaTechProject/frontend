"use client";
import LoginLayout from "./layout";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import DataTable from "../components/Table";
import Table2 from "../components/TableInput";
import { useForm } from "react-hook-form";

const LoginBody = styled.div`
  text-align: center;
  margin-top: 127px;
`;
const LoginForm = styled.form`
  display: block;
`;
const FormGroup = styled.div`
  margin-bottom: 16px;
  padding: 40px;
`;
const Label = styled.label`
  font-size: 20px;
  margin-right: 40px;
`;
const Password = styled.label`
  font-size: 20px;
  margin-right: 25px;
`;
const Input = styled.input`
  width: 350px;
  height: 42px;
  font-size: 14px;
`;

const P = styled.p`
  font-size: 14px;
  margin-top: 30px;
`;
const JoinBtn = styled.button`
  font-size: 14px;
  color: #3629b7;
  margin-left: 30px;
  margin-top: 15px;
  border: none;
  border-bottom: 1px solid #3629b7;
  background: white;
`;
const JoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.button`
  border-radius: 5px;
  color: white;
  background: #6956e5;
  width: 109px;
  height: 33px;
  margin-top: 70px;
  border: 0;
  font-size: 14px;
`;

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    const { email, pwd } = data;

    console.log(data);
  };
  const onErrorHandler = (error) => {
    console.log(error, "error");
  };

  const handleJoin = () => {
    router.push("/Join");
  };
  return (
    <LoginBody>
      <h1>prama 로그인</h1>

      {/* <Table2 /> */}
      <LoginForm onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="text"
            id="email"
            placeholder="이메일(아이디)를 입력해주세요"
            {...register("email", {
              required: {
                value: true,
                message: "이메일을 입력해주세요",
              },
            })}
          ></Input>
          <p style={{ fontSize: "12px", color: "red", marginLeft: "-140px" }}>
            {errors?.email?.message}
          </p>
        </FormGroup>
        <FormGroup>
          <Password htmlFor="pwd">비밀번호</Password>
          <Input
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력해주세요"
            {...register("pwd", {
              required: {
                value: true,
                message: "비밀번호를 입력해주세요",
              },
            })}
          ></Input>
          <p style={{ fontSize: "12px", color: "red", marginLeft: "-140px" }}>
            {errors?.pwd?.message}
          </p>
          <JoinWrapper>
            <P>신규회원이라면 회원가입을 먼저 진행해주세요</P>
            <JoinBtn onClick={handleJoin}>회원가입</JoinBtn>
          </JoinWrapper>
          <Btn>로그인</Btn>
        </FormGroup>
      </LoginForm>
    </LoginBody>
  );
};
export default LoginPage;

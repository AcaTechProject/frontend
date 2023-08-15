"use client";
import SelectBox from "../components/Select";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
//import Select from "../components/Select";
const JoinBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;
const H1 = styled.h1`
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 40%;
`;
const LoginForm = styled.form`
  margin-top: 32px;
`;
const FormGroup = styled.div`
  margin-bottom: 16px;

  padding: 40px;
  display: flex;
  flex-direction: column; /* 세로로 정렬되도록 설정 */
  align-items: flex-start;
`;
const Label = styled.label`
  margin-right: 20px;
  flex-shrink: 0; /* 라벨이 줄어들지 않도록 설정 */
  width: 100px;
  font-size: 16px;
`;
const Input = styled.input`
  width: 350px;
  height: 42px;
  font-size: 14px;
  flex: 1;
  border: 1px solid #d3d2d2;
  border-radius: 3px;
`;
const Input1 = styled(Input)`
  width: 120px;
`;
const Tel = styled(Input)`
  width: 50px;
  font-size: 14px;
  height: 32px;
  border: 1px solid #d3d2d2;
  border-radius: 3px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
const JoinBtn = styled.button`
  border-radius: 5px;
  color: white;
  background-color: #6956e5;
  width: 109px;
  height: 30px;
  margin-left: 50%;
`;
const Auth = styled.button`
  width: 110px;
  border: 2px solid #6956e5;
  background: white;
  width: 112px;
  height: 42px;
  margin-left: 10px;
  border-radius: 3px;
`;
const P = styled.p`
  font-size: 12px;
  color: red;
  margin-left: 120px;
`;
const JoinPage = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const handleAuth = (e) => {
    alert("이메일 인증이 완료되었습니다");
  };

  const onSubmitHandler = async (data) => {
    const { name, email, pwd, confirm } = data;

    if (pwd !== confirm) {
      setError("confirm", {
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    console.log(data);
  };
  const onErrorHandler = (error) => {
    console.log(error, "error");
  };

  return (
    <JoinBody>
      <LoginForm onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
        <H1>학원이름 회원가입</H1>
        <FormGroup>
          <Row>
            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              id="name"
              placeholder="이름을 입력해주세요"
              {...register("name", {
                required: {
                  value: true,
                  message: "필수요소 입니다",
                },
              })}
            ></Input>
          </Row>
          <P>{errors?.name?.message}</P>
          <Row>
            <Label htmlFor="email">이메일</Label>
            <Input1
              type="text"
              id="email"
              placeholder="id"
              {...register("email", {
                required: {
                  value: true,
                  message: "이메일을 입력해주세요",
                },
              })}
            ></Input1>
            @
            <SelectBox
              style={{ height: "30px" }}
              options={[
                { value: "naver", label: "naver.com" },
                { value: "google", label: "google.ac.kr" },
                { value: "gmail", label: "gmail.com" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            ></SelectBox>
            <Auth onClick={handleAuth}>이메일 인증</Auth>
          </Row>
          <P>{errors?.email?.message}</P>
          <Row>
            <Label htmlFor="pwd">비밀번호</Label>
            <Input
              type="password"
              id="pwd"
              placeholder="비밀번호를 입력해주세요"
              {...register("pwd", {
                required: {
                  value: true,
                  message:
                    "기호, 대문자, 소문자 중 2개를 반드시 포함해 최소 8자 이상이어야 합니다",
                },
                minLength: {
                  value: 8,
                  message: "최소 8자 이상이어야 합니다",
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  message: "기호, 대문자, 소문자 중 2개를 반드시 포함해주세요",
                },
              })}
            ></Input>
          </Row>
          <P>{errors?.pwd?.message}</P>
          <Row>
            <Label htmlFor="confirm">비밀번호 확인</Label>
            <Input
              type="password"
              id="confirm"
              placeholder="비밀번호를 다시 입력해주세요"
              {...register("confirm", {
                required: {
                  value: true,
                  message: "비밀번호를 다시 입력해주세요",
                },
              })}
            ></Input>
          </Row>
          <P>{errors?.confirm?.message}</P>
          <Row>
            <Label htmlFor="tel">전화번호 </Label>
            <Tel type="text" id="tel" maxLength={3}></Tel> --{" "}
            <Tel type="text" id="tel" maxLength={4}></Tel> --{" "}
            <Tel type="text" id="tel" maxLength={4}></Tel>
          </Row>
          <Row>
            <Label htmlFor="sub">담당과목</Label>
            <SelectBox
              placeholder="담당과목을 선택해주세요"
              options={[
                { value: "kor", label: "국어A" },
                { value: "kore", label: "국어B" },
                { value: "math", label: "수학" },
              ]}
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            ></SelectBox>
          </Row>
          <Row>
            <Label htmlFor="code">학원코드</Label>
            <Input
              type="text"
              id="code"
              placeholder="학원코드를 입력해주세요"
            ></Input>
          </Row>
        </FormGroup>
        <JoinBtn>회원가입</JoinBtn>
      </LoginForm>
    </JoinBody>
  );
};
export default JoinPage;

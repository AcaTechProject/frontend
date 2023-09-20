"use client";
import SelectBox from "../components/Select";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { formDataState, selectedSubjectState } from "@/recoil/atom";
import { useRouter } from "next/navigation";
//import Select from "../components/Select";
const JoinBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;
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
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedSubject, setSelectedSubject] =
    useRecoilState(selectedSubjectState);
  const [formData, setFormData] = useRecoilState(formDataState);
  const [code, setCode] = useState("");

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
    const { name, email, pwd, confirm, sub, tel1, tel2, tel3 } = data;

    const emails = `${email}@${selectedValue}`;
    const tel = `${tel1}-${tel2}-${tel3}`;
    if (pwd !== confirm) {
      setError("confirm", {
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    //폼 데이터를 recoil에 저장
    setFormData({
      name,
      email,
      pwd,
      confirm,
      tel,
      sub,
    });
    const JoinStudent = {
      user_name: name, // name을 바로 사용
      user_email: emails, // email을 바로 사용
      user_pwd: pwd, // pwd를 바로 사용
      user_phone: tel, // tel을 사용
      user_major: selectedSubject, // sub를 사용
      user_code: code,
    };
    axios
      .post(`http://localhost:8080/user/signup`, JoinStudent)
      .then(function (response) {
        console.log("회원가입 성공", response.data);
        sessionStorage.setItem("userId", response.data);
        router.push("/AcademyManagement/StudentManagement/acamember");
      })
      .catch(function (error) {
        console.log("정보 수정 error", error);
      });
  };
  const onErrorHandler = (error) => {
    console.log(error, "error");
  };

  const handleCode = (event) => {
    setCode(event.target.value);
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
                { value: "naver.com", label: "naver.com" },
                { value: "google.ac.kr", label: "google.ac.kr" },
                { value: "gmail.com", label: "gmail.com" },
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
            <Tel
              type="text"
              id="tel1"
              maxLength={3}
              {...register("tel1", {
                required: {
                  value: true,
                  message: "전화번호 입력해주세요",
                },
              })}
            ></Tel>{" "}
            --{" "}
            <Tel
              type="text"
              id="tel2"
              maxLength={4}
              {...register("tel2", {
                required: {
                  value: true,
                  message: "전화번호 입력해주세요",
                },
                maxLength: {
                  value: 4,
                },
              })}
            ></Tel>{" "}
            --{" "}
            <Tel
              type="text"
              id="tel3"
              maxLength={4}
              {...register("tel3", {
                required: {
                  value: true,
                  message: "전화번호 입력해주세요",
                },
                maxLength: {
                  value: 4,
                },
              })}
            ></Tel>
          </Row>
          <P>{errors?.tel1?.message}</P>
          <Row>
            <Label htmlFor="sub">담당과목</Label>
            <SelectBox
              id="sub"
              placeholder="담당과목을 선택해주세요"
              options={[
                { value: "국어", label: "국어A" },
                { value: "수학", label: "수학A" },
                { value: "영어", label: "영어A" },
              ]}
              // value={selectedValue}
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
              }}
            ></SelectBox>
          </Row>
          <Row>
            <Label htmlFor="code">학원코드</Label>
            <Input
              type="text"
              id="code"
              value={code}
              onChange={handleCode}
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

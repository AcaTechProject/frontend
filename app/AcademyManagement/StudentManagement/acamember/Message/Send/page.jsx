"use client";
import React, { useState , useEffect } from "react";
import styled from "styled-components";
import AttendSelect from "@/app/components/AttendSelect";
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";
import MessageSendingComponent from "@/app/components/MessageSendingComponent";
import Modal from '@/app/components/Modal';
import Axios from 'axios';
import { useRouter } from "next/navigation";
const Container = styled.div`
  padding: 116px 70px 55px 85px;
`;

const Tab1 = styled.button`
  border-radius: 5px;
  width: 105px;
  height: 40px;
  border: 2px solid #8146ff;
  color: #8146ff;
  background: #fff;
  &:hover {
    color: white;
    background: #8146ff;
  }
`;

const Tab2 = styled(Tab1)``;

const Row = styled.div`
  display: flex;
  gap: 23px;
`;

const TableContainer = styled.div`
 margin-top: 32px;
    width: 40%;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 3px;
    border: 1px solid #D3D2D2;
}
`;

const MessageSendingWrapper = styled.div`
  width: 50%; /* 오른쪽 MessageSendingComponent 영역의 너비 설정 */
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  flex-shrink: 0;
  border-radius: 5px 5px 0 0;
  background: #eceafe;
  padding: 0 10px;
`;

const HeaderItem = styled.p`
  font-size: 14px;
  color: #555;
`;

const CheckBoxHeaderItem = styled(HeaderItem)`
  width: 50px;
  text-align: center;
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  flex-shrink: 0;
  border-bottom: 1px solid #d3d2d2;
  padding: 0 10px;
`;

const DataItem = styled.p`
  font-size: 14px;
  color: #555;
`;

const CheckBoxContainer = styled.div`
  width: 50px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Tab = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-top: 15px;
  border: none;
  background: white;
  &:hover {
    color: #3629B7;
    background: white;
    border-bottom: 2px solid #3629b7;
`;

const D = styled.div`
  display: flex;
  gap: 23px;
`;
const Div = styled.div`
  margin-top: 15px;
  display: flex;
  position: relative;
  align-items: center;
`;

const Send = () => {
  const router = useRouter();
  
  const [isChecked, setIsChecked] = useState(false); 
  const [stuList, setStuList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  let userData = []; 
  const userId = sessionStorage.getItem("userId");
  const [userClass, setUserClass] = useState(""); 
  const [classId, setClassId] = useState("");
  const [userClassId, setUserClassId] = useState(null);
  const [classList, setClassList] = useState([]); 
  const [selectedClass, setSelectedClass] = useState("");
  const [dummyData, setDummyData] = useState([]);
  const handleSubjectChange = (selectedOption) => {
    
    setSelectedClass(selectedOption.value);
  };
  
  const [inputValue, setInputValue] = useState(''); 

  const [isCheckedList, setIsCheckedList] = useState(dummyData.map(() => false));

  const [message, setMessage] = useState('');
  const [messAddress, setMessAddress] = useState(''); 
  const [messResult, setMessResult] = useState(''); 

  const [attendanceMessages, setAttendanceMessages] = useState([]);
  
  const handleCheckBoxChange = (index) => {
    const updatedIsCheckedList = [...isCheckedList];
    updatedIsCheckedList[index] = !updatedIsCheckedList[index];
    setIsCheckedList(updatedIsCheckedList);
  
   
    const updatedData = [...dummyData];
    updatedData[index].학부모.체크 = updatedIsCheckedList[index];
  
    if (updatedIsCheckedList[index]) {
      const studentId = updatedData[index].id;
      const studentInfo = dummyData.find((student) => student.id === studentId);
  
      if (studentInfo) {
        
        updatedData[index].학부모.전화번호 = studentInfo.parentPhone;
        setDummyData(updatedData);
      }
    } else {
      
      updatedData[index].학부모.전화번호 = ""; 
      setDummyData(updatedData);
    }
  };
  
useEffect(() => {
  // userId에 해당하는 userClass 값을 가져오는 API 호출
  Axios
    .get(`http://localhost:8080/user/class/${userId}`)
    .then((response) => {
      const userClassData = response.data;
      if (userClassData.length > 0) {
        // userId에 해당하는 userClass 데이터가 존재한다면
        const firstUserClassId = userClassData[0].classId;
        setUserClassId(firstUserClassId);
        const studentsInSelectedClass = userData.filter(
          (student) => student.classId === firstUserClassId
        );
        setStuList(studentsInSelectedClass);
       
        const apiUrl = `http://localhost:8080/student/byClass/message/${firstUserClassId}`;
        return fetch(apiUrl);
      } else {
        throw new Error("User class data not found.");
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const formattedData = data.map((student, index) => ({
        이름: student.name,
        분반: student.division,
        학부모: {
          체크: isCheckedList[index] || false, // isCheckedList를 기반으로 초기값 설정
          전화번호: student.parentPhone,
        },
        selected: false, // 선택 상태 추가
      }));
      setDummyData(formattedData);
    })
    .catch((error) => {
      console.error('API 호출 중 오류 발생:', error);
    });
}, [userId, isCheckedList]); 



// 메시지 카테고리를 상태로 관리
const [messageCategory, setMessageCategory] = useState("출결");

// API로부터 받아온 메시지 데이터를 상태로 관리
const [messageData, setMessageData] = useState([]);
const [selectAll, setSelectAll] = useState(false);



const handleToggleAll = () => {
  const updatedIsCheckedList = isCheckedList.map(() => !selectAll);
  setIsCheckedList(updatedIsCheckedList);

  // 모든 학부모 체크박스의 상태를 업데이트
  const updatedData = dummyData.map((item, index) => ({
    ...item,
    학부모: {
      ...item.학부모,
      체크: updatedIsCheckedList[index],
    },
  }));
  setDummyData(updatedData);
  setSelectAll(!selectAll);
};

const selectedStudentNames = dummyData
  .filter((item, index) => isCheckedList[index])
  .map((student) => student.이름)
  .join(', '); // 체크된 학생들의 이름을 쉼표로 구분하여 문자열로 조합

// mt_text에 @@@ 대신에 선택된 학생들의 이름을 대체
const mtText = messageData.find((message) => message.mt_type === messageCategory)?.mt_text || '';

const mtTextWithNames = mtText.replace(/@@@/g, selectedStudentNames);


// API 엔드포인트
const apiUrl = 'http://localhost:8080/student/message_text';

useEffect(() => {
  fetch(apiUrl)
  
    .then((response) => response.json())
    .then((data) => {
      setMessageData(data); 

      const attendanceMessages = getMessagesByCategory("출결");
      setAttendanceMessages(attendanceMessages);
      
      console.log(data); 
    })
    .catch((error) => {
      console.error('API 호출 중 오류 발생:', error);
    });
}, []);
useEffect(() => {
  //select 부분-> 유저의 담당수업이 불러와짐.
  Axios
    .get(`http://localhost:8080/user/class/${userId}`)
    .then((response) => {
      userData = response.data; // userData에 데이터 저장
      const classList = [
      new Set(userData.map((student) => student.className)),
      ];
      setSelectedClass(classList[0]); // 기본적으로 첫 번째 수업을 선택하도록 설정


      setClassList(classList);
      setSelectedValue(classList[0]); // 기본적으로 첫 번째 수업을 선택하도록 설정
      console.log("사용자 정보: ", userData);
      const firstUserClassId = userData[0].classId; // 클래스의 ID를 가져옴
      setUserClassId(firstUserClassId); // 클래스의 ID를 설정,첫번째 id 받아옴.
      console.log("id", firstUserClassId);

      const studentsInSelectedClass = userData.filter(
        (student) => student.classId === firstUserClassId
      );

      setStuList(studentsInSelectedClass);
    })
    .catch((error) => {
      console.log("요청 실패", error);
    });
}, [userId, userClass]);   

// 메시지 카테고리 변경 함수
const handleCategoryChange = (category) => {
  setMessageCategory(category);
};
// 현재 카테고리에 해당하는 메시지를 필터링하여 가져오는 함수
const getMessagesByCategory = () => {
  return messageData.filter((message) => message.mt_type === messageCategory);
};

// 메세지 발송 확인 모달 열기 함수
const openModal = () => {
setIsModalOpen(true);
};

// 메세지 발송 확인 모달 닫기 함수
const closeModal = () => {
setIsModalOpen(false);
};

const handleSendMessage = (message) => {
  
  console.log("Sending message:", message);
  
  openModal();

  // 메세지 데이터 생성 및 서버로 전송
  const selectedStudentNames = dummyData
    .filter((item, index) => isCheckedList[index])
    .map((student) => student.이름);

  const messageData = {
    user: {
      id: 1, 
    },
    mess_address: messAddress, 
    mess_content: `${message} [선택한 학생들: ${selectedStudentNames.join(', ')}]`,
    mess_result: messResult, 
  };

  Axios.post('http://localhost:8080/student/message/save', messageData)
    .then((response) => {
      if (response.status === 200) {
        
        console.log('메시지 전송 성공:', response.data);
      }
    })
    .catch((error) => {
      console.error('메시지 전송 오류:', error);
    });

  // 필요한 상태 초기화 작업 수행
  setMessage('');
  setMessAddress('');
  setMessResult('');
};


// 메시지를 전송하는 함수
const sendMessages = (messages) => {
fetch('http://localhost:8080/students/message/multi-send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(messages),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다');
    }
    return response.json();
  })
  .then((data) => {
    // 필요한 대로 응답 데이터 처리
    console.log('응답:', data);
  })
  .catch((error) => {
    console.error('API 호출 오류:', error);
  });
};

return (
    <Container>
      <p>
        {" "}
        원생관리 {">"} 학생관리 {">"} 수강생관리 {">"} 메시지발송
      </p>

      <Row>
        <AMBtn />
        <SMBtn />
      </Row>

      <D>
        <Tab>메세지발송</Tab>
        <Tab
          onClick={() =>
            router.push(
              "/AcademyManagement/StudentManagement/acamember/Message/Manage"
            )
          }
        >
          메시지관리
        </Tab>
      </D>

      <Row style={{ marginTop: "36px" }}>
      <AttendSelect
  options={classList.map((userClass) => ({
    value: userClass,
    label: userClass,
  }))}
  onChange={handleSubjectChange}
  value={selectedClass}
/>

      </Row>

      <ContentWrapper>
  <TableContainer>
    <HeaderRow>
      <HeaderItem>이름</HeaderItem>
      <HeaderItem>분반</HeaderItem>
      <CheckBoxHeaderItem>학부모</CheckBoxHeaderItem>
    </HeaderRow>
    {dummyData.map((item, index) => (
  <DataRow key={index}>
    <DataItem>{item.이름}</DataItem>
    <DataItem>{selectedClass}</DataItem>
    <CheckBoxContainer>
      <input
        type="checkbox"
        name={`학부모_${index}`}
        checked={isCheckedList[index] || ""}
        onChange={() => handleCheckBoxChange(index)}
      />
    </CheckBoxContainer>
  </DataRow>
))}
</TableContainer>
        <MessageSendingWrapper>
<MessageSendingComponent
  messageData={messageData}
  onSendMessage={handleSendMessage}
  dummyData={dummyData}
  isCheckedList={isCheckedList}
/>

    
        </MessageSendingWrapper>
      </ContentWrapper>
      
      {isModalOpen && (
        <Modal
          onCheck={closeModal} 
          onClose={closeModal} 
          message="메세지를 발송하시겠습니까?" 
        />
      )}
    </Container>
  );
};

export default Send;
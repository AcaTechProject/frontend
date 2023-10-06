"use client"
import { useEffect, useState } from "react";
import styled from "styled-components";
import List from '../../../app/components/List';
import MessagePopup from '../../../app/components/MessagePopup';
import AttendSelect from '../../../app/components/AttendSelect';
import Modal from '../../../app/components/Modal';
import PastAttendanceList from '../../../app/components/PastAttendanceList';
import ListPopup from '../../../app/components/ListPopup';
import Axios from 'axios';
import SMBtn from "@/app/components/SMBtn";
import AMBtn from "@/app/components/AMBtn";
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
  gap: 40px;
`;

const Button = styled.button`
  width: 100px;
  height: 34px;
  border-radius: 5px;
  color: #fff;
  background: #8146ff;
  border: 0;
  font-size: 14px;
  margin-left:
`;

const Row2 = styled(Row)`
  margin-top: 19px;
`;

const DateLabel = styled.p`
  font-size: 17px;
  margin-top: 17px;
`;


const Attendance = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [stuList, setStuList] = useState([]); //학생 이름,분반.학교 정보가 들어있음.
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedAttendanceData, setSelectedAttendanceData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showPastAttendance, setShowPastAttendance] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  let userData = []; // userData를 선언
  const userId = sessionStorage.getItem("userId");
  const [userClass, setUserClass] = useState(""); 
  const [patchedData, setPatchedData] = useState(null);
  const [userClassId, setUserClassId] = useState(null);
  const [classList, setClassList] = useState([]); // 빈 배열로 초기화

// 나중에 어딘가에서 classList를 설정하면, setClassList를 사용하여 업데이트
// 현재 날짜를 가져오는 함수
const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 포맷팅
  const day = currentDate.getDate().toString().padStart(2, '0'); // 일자를 두 자리로 포맷팅
  return `${year}년 ${month}월 ${day}일`;
};
  
  
  const [apiData, setApiData] = useState([]); 
  const [attendanceData, setAttendanceData] = useState([]); // 출결 데이터를 저장할 상태
  const [classId, setClassId] = useState(3); // 클래스 ID 상태
  const handleClassChange = (selectedOption) => {
    const classId = parseInt(selectedOption.value); // 문자열을 정수로 변환
  
    setSelectedClass(selectedOption.value);
  
    // 사용자가 수업을 선택할 때 API 호출을 실행
    Axios.get(`http://localhost:8080/user/class2/${classId}`)
      .then((response) => {
        // API 요청이 성공하면 데이터를 상태에 설정
        setAttendanceData(response.data.students);
      })
      .catch((error) => {
        // API 요청이 실패하면 에러 처리
        console.error("API 호출 중 오류 발생:", error);
      });
  };
  
  const handlePatchRequest = (data) => {
    // PATCH 요청 보내기
    Axios.patch(`http://localhost:8080/user/${classId}/prevclass`, data)
      .then((response) => {
        // PATCH 요청이 성공하면 응답 데이터를 상태에 설정
        console.log("PATCH 요청 성공:", response.data);
        setPatchedData(response.data); // 응답 데이터를 상태에 설정
        // 이후 필요한 처리 작업 수행
      })
      .catch((error) => {
        // PATCH 요청이 실패하면 에러 처리
        console.error("PATCH 요청 중 오류 발생:", error);
        // 실패한 경우에 대한 처리 작업 수행
      });
  };

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


  useEffect(() => {
   
    fetch(`http://localhost:8080/user/class2/${classId}`)
      .then((response) => response.json())
      .then((data) => {
        // API에서 가져온 데이터를 출결 데이터 상태에 설정
        setAttendanceData(data.students);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, [classId]); // 클래스 ID가 변경될 때마다 API 호출

  // 나머지 컴포넌트 렌더링 및 이벤트 핸들러 등
  
  useEffect(() => {
    // API 호출
    Axios.get(`http://localhost:8080/user/${classId}/prevclass`)
      .then((response) => {
        // API 요청이 성공하면 데이터를 상태에 설정
        setApiData(response.data);
      })
      .catch((error) => {
        // API 요청이 실패하면 에러 처리
        console.error("API 호출 중 오류 발생:", error);
      });
  }, [classId]); // classId가 변경될 때마다 API 호출
  
  

  
  const handlePastAttendanceRowClick = (rowIndex) => {
    setShowPastAttendance(true);
    setSelectedRow(rowIndex);
  };

  const handlePastAttendanceClick = () => {
    setShowPastAttendance(true);
  };

  const handleModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleParentClick = (parentInfo) => {
    setSelectedParent(parentInfo);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  

  const handleSave = () => {
    console.log("Saved attendance data:", selectedAttendanceData);
  };

  
  const handleSaveButtonClick = () => {
    // 출결 데이터 생성
    const updatedData = attendanceData.map((row, index) => {
      const updatedRow = {
        stId: row.id,
        classId: classId,
        attO: document.querySelector(`input[name=출석_${index}]`).checked ? 1 : 0,
        attLate: document.querySelector(`input[name=지각_${index}]`).checked ? 1 : 0,
        attX: document.querySelector(`input[name=결석_${index}]`).checked ? 1 : 0,
        attEtc: document.querySelector(`input[name=기타_${index}]`).checked ? 1 : 0,
        attReason: "",
        attResult:  document.querySelector(`input[name=출석_${index}]`).checked ? "출석" :
        document.querySelector(`input[name=지각_${index}]`).checked ? "지각" :
        document.querySelector(`input[name=결석_${index}]`).checked ? "결석" :
        document.querySelector(`input[name=기타_${index}]`).checked ? "기타" : ""
      };
      return updatedRow;
    });
  
    // 출결 저장 모달 열기
    const modalMessage = `총 ${updatedData.length}명의 출결을 저장하시겠습니까?`;
    handleModal(modalMessage);
    setSelectedAttendanceData(updatedData);
  
    
    Axios.post(`http://localhost:8080/user/class2/${classId}`, updatedData)
      .then((response) => {
        if (response.status === 200) {
          // 성공적으로 저장되었을 때 처리
          console.log("출결 데이터가 성공적으로 저장되었습니다.");
        } else {
          // 저장 실패시 처리
          console.error("출결 데이터 저장 실패:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };
  
  return (
    <Container>
      <p>
        원생관리 {">"} 출결관리
        {showPastAttendance && " > 지난 출결관리"}
      </p>
      <Row>
      <AMBtn />
        <SMBtn />
      </Row>

      <Row style={{ marginTop: "36px" }}>
      <AttendSelect
  options={classList.map((userClass) => ({
    value: userClass,
    label: userClass,
  }))}
  onChange={handleClassChange}
  value={selectedClass}
/>

      </Row>

      {showPastAttendance ? (
  <PastAttendanceList
    data={apiData} // API에서 가져온 데이터를 사용
    onRowClick={handlePastAttendanceRowClick}
    currentPage={currentPage}
    totalPages={Math.ceil(apiData.length / itemsPerPage)}
    onPageChange={handlePageChange}
    itemsPerPage={itemsPerPage}
  />
) : (
        <>
          <Row2>
            <Button onClick={handlePastAttendanceClick}>지난출결관리</Button>
            <Button onClick={handleSaveButtonClick}>저장</Button>
          </Row2>
          <DateLabel>{getCurrentDate()}</DateLabel>
          <List data={attendanceData} onParentClick={handleParentClick} />

{selectedParent && (
  <MessagePopup
    studentName={selectedParent} // Pass the student name here
    onClose={() => setSelectedParent(null)}
  />
)}
          {isModalOpen && (
            <Modal onClose={closeModal} message={modalMessage} onSave={handleSave} />
          )}
        </>
      )}

      
{selectedRow !== null && (
        <ListPopup
          data={attendanceData}
          selectedRowIndex={selectedRow}
          onClose={() => {
            setSelectedRow(null);
            setShowPastAttendance(false);
          }}
          onParentClick={handleParentClick}
          onPatchRequest={handlePatchRequest} // PATCH 요청 함수를 전달
        />
      )}

      
      {patchedData && (
        <div>
          수정된 데이터:
          <pre>{JSON.stringify(patchedData, null, 2)}</pre>
        </div>
      )}
    </Container>
  );


};

export default Attendance;
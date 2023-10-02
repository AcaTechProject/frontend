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

const Container = styled.div`
  padding: 40px 70px 55px 80px;
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

  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedAttendanceData, setSelectedAttendanceData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showPastAttendance, setShowPastAttendance] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  
  
  const [apiData, setApiData] = useState([]); 
  const [attendanceData, setAttendanceData] = useState([]); // 출결 데이터를 저장할 상태
  const [classId, setClassId] = useState(3); // 클래스 ID 상태
  const handleClassChange = (selectedOption) => {
    setSelectedClass(selectedOption.value);
  
    // 사용자가 수업을 선택할 때 API 호출을 실행
    fetchAttendanceData(selectedOption.value);
  };
  useEffect(() => {
    // API 호출
    Axios.get("http://localhost:8080/user/3/prevclass") // API의 URL을 여기에 입력
      .then((response) => {
        // API 요청이 성공하면 데이터를 상태에 설정
        setAttendanceData(response.data);
      })
      .catch((error) => {
        // API 요청이 실패하면 에러 처리
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []); // 빈 배열을 두 번째 인자로 전달하여 컴포넌트가 마운트될 때 한 번만 호출하도록 설정

  // 나머지 컴포넌트 렌더링 및 이벤트 핸들러 등


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

  const subjectOptions = [
    { value: "국어a", label: "국어A 김민지" },
    { value: "수학a", label: "수학A 민지김" },
    { value: "수학b", label: "수학B 민지" },
  ];

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
        <Tab1>출결관리</Tab1>
        <Tab2>수강생 관리</Tab2>
      </Row>

      <Row style={{ marginTop: "36px" }}>
        <AttendSelect
          options={subjectOptions}
          onChange={handleClassChange}
          value={subjectOptions.find((option) => option.value === selectedClass)}
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
          <DateLabel>2023년 7월 7일</DateLabel>

          <List data={attendanceData} onParentClick={handleParentClick} />


          {selectedParent && (
            <MessagePopup
              parentInfo={selectedParent}
              subject={selectedSubject}

            
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
          data={dummyData}
          selectedRowIndex={selectedRow}
          onClose={() => {
            setSelectedRow(null);
            setShowPastAttendance(false);
          }}
          onParentClick={handleParentClick}
        />
      )}
    </Container>
  );


};

export default Attendance;  

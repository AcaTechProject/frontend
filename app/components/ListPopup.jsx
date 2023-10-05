import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  width: 746px;
  height: 395px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #d3d2d2;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Tr = styled.tr`
  border: 1px solid #ddd;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #eceafe;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  float: right;
`;


const ListPopup = ({ data, selectedRowIndex, onClose, onParentClick }) => {
  const selectedRowData = data[selectedRowIndex];
  const [selectedReasonIndex, setSelectedReasonIndex] = useState(null);

  const handlePatchRequest = () => {
    // 선택한 데이터에서 필요한 정보 추출
    const classId = selectedRowData.classId;
    const attDate = selectedRowData.일시;

    // students 데이터 형식을 수정된 JSON 파일 형식에 맞춰 생성
    const students = [
      {
        stId: selectedRowData.id,
        att_o: 1, // 출석 여부
        att_late: 0, // 지각 여부
        att_x: 0, // 결석 여부
        att_etc: 0, // 기타 여부
        att_reason: "2명 테스트중",
      },
      // 또 다른 학생 데이터 추가 가능
    ];

    // PATCH 요청 보내기
    Axios.patch(`http://localhost:8080/user/${classId}/prevclass`, {
      classId: classId,
      attDate: attDate,
      students: students,
    })
      .then((response) => {
        // PATCH 요청이 성공하면 응답 데이터를 상태에 설정
        console.log("PATCH 요청 성공:", response.data);
        // 이후 필요한 처리 작업 수행
      })
      .catch((error) => {
        // PATCH 요청이 실패하면 에러 처리
        console.error("PATCH 요청 중 오류 발생:", error);
        // 실패한 경우에 대한 처리 작업 수행
      });
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        <h2>출결 정보</h2>
        
<p>날짜: {selectedRowData ? selectedRowData.일시 : '날짜 없음'}</p>

        <TableContainer>
          <thead>
            {/* 테이블 헤더 부분 */}
          </thead>
          <tbody>
            <Tr>
            <Td>{selectedRowData ? selectedRowData.이름 : '이름 없음'}</Td>
<Td>{selectedRowData ? selectedRowData.분반 : '분반 없음'}</Td>
<Td>{selectedRowData ? selectedRowData.출결 : '출결 없음'}</Td>

              <Td>
               
                <RadioContainer>
                  <label>
                    <input
                      type="checkbox"
                      name={`출결_${selectedRowIndex}`}
                      value="출석"
                    />{' '}
                    출석
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name={`출결_${selectedRowIndex}`}
                      value="지각"
                    />{' '}
                    지각
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name={`출결_${selectedRowIndex}`}
                      value="결석"
                    />{' '}
                    결석
                  </label>
                  
                </RadioContainer>
              </Td>
            </Tr>
          </tbody>
        </TableContainer>
      </PopupContent>
    </PopupContainer>
  );
};

export default ListPopup;

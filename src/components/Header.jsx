import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black; // 배경은 고정

  h1 {
    color: ${(props) => (props.isLightMode ? "black" : "white")}; // 글씨 색 반전
  }

  ul {
    display: flex;
    gap: 20px;
    li {
      list-style: none;
      color: ${(props) => (props.isLightMode ? "black" : "white")}; // 글씨 색 반전
    }
  }
`;

export default function Header({ isLightMode }) {
  return (
    <HeaderContainer isLightMode={isLightMode}>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}

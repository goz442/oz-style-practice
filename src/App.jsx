import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import { contents } from "./assets/data/data.js";
import styled from "styled-components";

// Main 컨테이너
const MainContainer = styled.main`
  background-color: ${(props) => props.bgColor || "#121212"};
  min-height: 100vh;
  color: ${(props) => (props.bgColor === "#ffffff" ? "black" : "white")};
  padding: 0;
  margin: 0;
`;

// 콘텐츠 섹션
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;
`;

// 모드 전환 버튼
const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  background-color: ${(props) => (props.isLightMode ? "#ffffff" : "#121212")};
  color: ${(props) => (props.isLightMode ? "black" : "white")};
  transition: all 0.3s ease;
`;

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <MainContainer bgColor={isLightMode ? "#ffffff" : "#121212"}>
      <Header />

      <Section>
        {contents.map((el, idx) => (
          <Content
            key={`${el.id}-${idx}`}
            content={el}
            isLightMode={isLightMode} // 🔹 여기서 props 전달
          />
        ))}
      </Section>

      <ToggleButton isLightMode={isLightMode} onClick={toggleMode}>
        {isLightMode ? "다크 모드" : "라이트 모드"}
      </ToggleButton>
    </MainContainer>
  );
}

export default App;
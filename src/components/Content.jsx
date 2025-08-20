import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const ContentImage = styled.img`
  width: 300px;
  min-height: 225px;
  border-radius: 10px;
  margin-bottom: 3px;
  object-fit: cover;
`;

// 모집중 태그
const Tag = styled.span`
  font-size: 12px;
  color: ${(props) => (props.isLightMode ? "#d7a700" : "#d7fa00")}; // 글씨 색 반전
  border: 1px solid ${(props) => (props.isLightMode ? "#d7a700" : "#d7fa00")};
  padding: 4px 5px;
  border-radius: 3px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.isLightMode ? "black" : "white")};
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: ${(props) => (props.isLightMode ? "gray" : "rgb(160, 160, 160)")};
`;

export default function Content({ content, isLightMode }) {
  return (
    <ContentContainer>
      <ContentImage src={content.img} alt={content.title} />
      <Tag isLightMode={isLightMode}>모집중</Tag> {/* 🔹 props 전달 */}
      <Title isLightMode={isLightMode}>{content.title}</Title>
      <Subtitle isLightMode={isLightMode}>{content.subtitle}</Subtitle>
    </ContentContainer>
  );
}
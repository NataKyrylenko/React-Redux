import styled from "@emotion/styled";
import { css } from "@emotion/react";

const commonFeedbackStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FeedbackContainer = styled.div`
  ${commonFeedbackStyles};
`;

export const FeedbackComponent = styled.div`
  ${commonFeedbackStyles};
  flex-direction: row;
  background-color: rgb(230, 232, 248);
  padding: 20px;
`;

export const FeedbackCounter = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

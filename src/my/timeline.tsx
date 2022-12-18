
import * as React from "react"
import styled from 'styled-components';
import TimelineItem from "./TimelineItem";

const Container = styled.div`
  color: white;
  max-width: 800px;
  margin: 40px auto 0;
  padding: 40px;
  box-sizing: border-box;
  background: #3e4149;
`;

const TimelineList = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 2px solid #fec8c9;
  list-style: none;
`;

export const Timeline =() => {
    return (
        <Container>
            <TimelineList>
                <TimelineItem url="/journal/2020"  tag="2020" title="2020 회고"  contents="2020년 10월 입사 후 2개월간 기록 "/>
                <TimelineItem url="/journal/2021"  tag="2021" title="2021 회고" contents="2021년 기록"/>
                <TimelineItem url="/journal/2022"  tag="2022" title="2022 회고" contents="2022년 기록"/>
            </TimelineList>
        </Container>
    );
};


export default Timeline;
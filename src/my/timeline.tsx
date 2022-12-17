
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
                <TimelineItem url="/" tag="2020" title="test" />
                <TimelineItem url="/"  tag="2021" title="test" />
                <TimelineItem url="/"  tag="2022" title="test" />
            </TimelineList>
        </Container>
    );
};


export default Timeline;
import {memo} from 'react';
import * as React from "react"
import styled from 'styled-components';
import {Link} from "gatsby"

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

const TimelineItemContainer = styled.li`
  list-style: none;
`;

const TimelineItemHeader = styled.div`
    display : flex
`;

const Date = styled.div`
  padding: 4px 10px;
  background: rgba(105, 105, 105, 0.6);
  color: #fec8c9;
  border-radius: 16px;
`;

const Title = styled.div`
  margin: 5px 10px 0;
  padding: 0;
  color: #fec8c9;
  opacity: 0.8;
  flex-shrink: 0;
  width: 100px;
  flex-grow: 1;
`;


const Contents = styled.p`
  margin: 8px 0 0;
  color: #444f59;
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 28px 20px;
  &:hover {
    ${Date} {
      background: #3e4149;
      border: #fd999a solid 2px;
      color: white;
      font-weight: bold;
    }
    ${Title} {
      color: #fd999a;
      font-weight: bold;
    }
    ${Contents} {
      color: #fec8c9;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: -7px;
    width: 12px;
    height: 12px;
    background: #fec8c9;
    border-radius: 50%;
    box-shadow: #444f59 0 0 10px rgba(0, 0, 0, 1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 40px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: #fd999a;
    border-radius: 50%;
    box-shadow: #fec8c9 0 0 10px rgba(0, 255, 0, 1);
    box-shadow: #fec8c9 0 0 10px rgba(0, 255, 0, 1);
    opacity: 0;
  }
  &:hover::after {
    opacity: 1
  }
`;

export const Timeline = memo(() => {
    return (
        <Container>
            <TimelineList>
                <TimelineItemContainer>
                    <Link
                        style={{
                            fontWeight: 'bold',
                            textDecoration: 'none'
                        }}
                        to={"https://github.com/users/gwiyeomgo/projects/4/views/1?filterQuery=year%3A2020"}
                    >
                        <TimelineItem>
                            <TimelineItemHeader>
                                <Date>2020</Date>
                                <Title>디지털 전환을 시작하다</Title>
                            </TimelineItemHeader>
                            <Contents>
                            </Contents>
                        </TimelineItem>
                    </Link>
                </TimelineItemContainer>
            </TimelineList>
        </Container>
    );
});


export default Timeline;
import * as React from "react"
import styled from 'styled-components';
import {Link} from "gatsby"


const Header = styled.div`
    display : flex
`;

const Date = styled.div`
  padding: 4px 10px;
  background: #fd999a;
  color: #444f59;
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

const Item = styled.div`
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


type ItemProps = {
    url: string
    tag: string
    title: string
    contents: string
}

const TimelineItem = ({url, tag, title, contents}: ItemProps) => {
    return (
        <Link
            style={{
                fontWeight: 'bold',
                textDecoration: 'none'
            }}
            to={url}
        >
            <Item>
                <Header>
                    <Date>{tag}</Date>
                    <Title>{title}</Title>
                </Header>
                <Contents>
                    {contents}
                </Contents>
            </Item>
        </Link>
    );
};


export default TimelineItem;
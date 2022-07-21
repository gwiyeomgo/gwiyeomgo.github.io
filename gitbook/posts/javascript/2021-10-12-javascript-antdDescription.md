# 배경
index.js:1 Warning: antd: Descriptions Sum of column `span` in a line not match `column` of Descriptions. 

# 코드
```
 <Descriptions title="상세정보" bordered>
      <Descriptions.Item label="이름" span={4}>김영희</Descriptions.Item>
      <Descriptions.Item label="핸드폰" span={4}>***-***-***</Descriptions.Item>
 </Descriptions>
```

# 문서를 보니
> span	The number of columns included	number

> column	The number of DescriptionItems in a row,could be a number or a object like { xs: 8, sm: 16, md: 24},(Only set bordered={true} to take effect)	number

column 의 default 값은 3이라는 사실을 알게되었다.



https://github.com/ant-design/ant-design/issues/20769

# 개선
```
 <Descriptions title="상세정보" bordered>
      <Descriptions.Item label="이름" span={3}>김영희</Descriptions.Item>
      <Descriptions.Item label="핸드폰" span={3}>***-***-***</Descriptions.Item>
 </Descriptions>
```


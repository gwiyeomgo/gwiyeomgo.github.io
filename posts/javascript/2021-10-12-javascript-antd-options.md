


# 배경
antd를 사용해서 어드민 화면을 만들고 있다.
어드민 화면 작업에 목표는 warning을 없애는 것이다.


## warning
`index.js:1 Warning: `value` of Option should not use number type when `mode` is `tags` or `combobox`.`


# 실제 사용한 데이터 
```
[
 {
 "label": "마곡점",
 "value": 1
 },
 {
 "label": "마곡점",
 "value": 2
 },
 {
 "label": "공항점",
 "value": 3
 }
]
```

```
 useEffect(() => {
     SiteService.getSites({
     page: 0,
     pageSize: 10000,
     }).then((response) => {
     const allStores = response.data.result
     .map((obj) => ({
     label: obj.name,
     value: obj.id.toString(),
     }))
     .sort((a, b) => a.value - b.value);
     setStores(allStores);
     });
 }, []);

```


### antd 문서를 찾아보니

```
options Select options. Will get better perf than jsx definition { label, value }[]
    antd v4
    options = [
     { value: 'light', label: 'Light' },
     { value: 'bamboo', label: 'Bamboo' },
    ];
```



### 왜? warning을 없애고 깨끗한 console을 유지해야 할까요?
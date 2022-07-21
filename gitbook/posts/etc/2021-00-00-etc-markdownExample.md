
# 0.블록 적용 

``` go
int val = 10;
printf(%s,"Hello, World!");
```

```javascript 
function test() { 
 console.log("hello world!"); 
} 
```
# 1.Header 
# 헤더 크기 (h1) 
## 헤더 크기 (h2) 
### 헤더 크기 (h3) 
#### 헤더 크기 (h4) 
##### 헤더 크기 (h5) 
###### 해더 크기 (h6)



# 3.Task Lists 
- [x] this is a complete item 
- [ ] this is an incomplete item 
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported 
- [x] list syntax required (any unordered or ordered list supported)

* [x] this is a complete item 
* [ ] this is an incomplete item 
* [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported 
* [x] list syntax required (any unordered or ordered list supported)

# 4.Inline code   X

문단 중간에 `Code`를 넣을 수 있습니다. 
예를 들어 `printf("hello world!");` 이런 식으로 들어갑니다.

# 5.수평선 
--- 
*** 
___


# 6.Backslash Escapes ?


*literal asterisks* 


_＼_Tom＼__


# 7.Header 적용 X

이건.. 모르겠음 size 조정은 css에서 하자


<img src="https://github.com/gwiyeomgo/gwiyeom-blog-app/blob/main/public/logo192.png?raw=true" width="400px" alt="sample image">

public 폴더에 있는 이미지 적용됨

![ react logo](https://image.flaticon.com/icons/png/512/919/919851.png)


# 8.Lists -Unordered 

Unordered 

* Item 1 
* Item 2 
    * Item 2a 
    * Item 2b 

Ordered 

1. Item 1 
1. Item 2 
1. Item 3 
    1. Item 3a 
    1. Item 3b


# 9.Blockquotes  
As Grace Hopper said: 

> I’ve always been more interested. 
> in the future than in the past.

# 10 Emphasis 

*This text will be italic* 
_This will also be italic_ 

**This text will be bold** 
__This will also be bold__ 

*You **can** combine them*


# 11 TABLES 

First Header | Second Header 
------------ | ------------- 
Content cell 1 | Content cell 2 
Content column 1 | Content column 2


| a | b  |  c |  d  |
| - | :- | -: | :-: |
| a | b  | c  | d   |

# 12 Autolink literals

www.example.com, https://example.com, and contact@example.com.

# 13 Strikethrough

~one~ or ~~two~~ tildes.



# 20220610 html을 markdown 에 추가

css
```
<style type='text/css'>
  [class*="box"] { display: flex; width: 20%; height: 50px; }
</style>
```
html

javascript

```
<script>
function hexText() {
  for(let i = 0; i <= 100; i++) {
    let num = Math.round(255/100*i);
    let hexNum = decimalToHex(num, 2);
    document.getElementsByClassName(`hex${i}`)[0].innerHTML = `HEX<br>${hexNum}`;
  }
}
hexText();
</scrip>

```
[출처](https://seochanh.github.io/jekyll/2020/08/21/html-in-markdown/)
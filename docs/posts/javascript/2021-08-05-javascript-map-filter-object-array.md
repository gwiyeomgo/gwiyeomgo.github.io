


# 배경

react로 코드를 쓸 때
api에서 호출받은 결과를 가공하는 일이 많다고 느꼈다

간단한 예시와 MDN에서 찾은 내용을 정리하려고 한다.




console.log([1, 2, 3].map(e => {
        return e + 1
    }).filter((e) => e > 2))

    console.log([1, 2, 3].map(e => e + 1).filter((e) => e > 2))


    console.log([1, 2, 3].map(e => {
        e = e + 1;
        e = e + 2;
        return e    }).filter((e) => e > 2))


        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

        https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

        https://www.codegrepper.com/code-examples/javascript/javascript+sort+array+of+objects

        https://stackoverflow.com/questions/47841899/js-map-return-object

      
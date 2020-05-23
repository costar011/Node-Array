import express from "express";

const app = express();
const PORT = 7777;


app.listen(PORT, () => {
    console.log(`✅ Server Start PORT : ${PORT}`);

    // 배열 arr을 초기화 한다.
    const arr = new Array();

    // 초기화 된 배열 arr을 출력한다.
    console.log(arr);

    // arr에 데이터를 추가한다.
    arr.push("딸기");

    // 데이터가 추가 된 arr을 출력한다.
    console.log(arr);

    // arr에 데이터를 추가한다.
    arr.push("바나나");
    arr.push("멜론");
    arr.push("바나나");
    arr.push("오렌지");
    arr.push("배");
    arr.push("복숭아");

     
    // 데이터가 추가 된 arr을 출력한다. .
    console.log(arr);
    

    // 4번 인덱스를 출력해 본다.
    console.log(arr[4]);

    // 배열의 갯수를 출력한다.
    console.log(arr.length);

    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i]} 팔아요.`);
    }

  });



// alert("i am back")
fetch('https://fakestoreapi.com/products')
.then((res)=>{
    return res.json();//converted to object
    
})
.then((data)=>{
    console.log(data[0].title)
    let tableData="";
    data.map((ele)=>{
        tableData+=`<tr>
        <td>${ele.title}</td>
        <td>${ele.description}</td>
        <td>${ele.price}</td>
        <td><img src="${ele.image}"/></td>
    </tr>`
    });
    document.getElementById("table_body").innerHTMl=tableData;
})

function JsonGetData() {
    var data = fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var htmltablethead = "";
            htmltablethead += "<tr><td>User Id</td><td>Id</td><td>Title</td><td>Completed</td></tr>";
            document.getElementById("jsontablethead").innerHTML = htmltablethead;
            var htmltablebody = "";
            data.forEach(element => {
                htmltablebody += "<tr><td>" + element.userId + "</td ><td>" + element.id + "</td><td>" + element.title + "</td><td>" + element.completed + "</td></tr> ";

            });
            document.getElementById("jsontablebody").innerHTML = htmltablebody;
        })
}
function JsonDeleteData() {
    document.getElementById("jsontablethead").innerHTML = "";
    document.getElementById("jsontablebody").innerHTML = "";
}


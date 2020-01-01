var countriesCodes=
[
    { name:'Egypt' , code:'eg'},
    { name:'Italy' , code:'it'},
    { name:'Japan' , code:'jp'},
    { name:'France' , code:'fr'},
    
]
var countryName ;
var allDate;
var countryCode;
var links = document.getElementsByClassName("nav-link")
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e){
        var countryName =e.target.text;

        for(var i=0;i<countriesCodes.length ; i++)
{
    if(countriesCodes[i].name== countryName)
    {
        countryCode = countriesCodes[i].code;
        getPosts(countryCode)
    }
}

    })
}
getPosts("us")

function getPosts(code)
{



var req = new XMLHttpRequest();

req.open
 ("GET","https://newsapi.org/v2/top-headlines?country="+code+"&category=business&apiKey=695cad5da82346c586ec268fa46c8750");
req.send();
req.onreadystatechange =function()
{
    if(req.readyState == 4 && req.status == 200)
    {
        allDate =JSON.parse( req.response).articles;
        displayData();
    }
}
}
function displayData(){
    var temp =``;
    for(var i=0; i<allDate.length;i++)
    {
        temp +=` <div class="col-md-3">
        <div class="post">
            <img class="img-fluid" src="`+allDate[i].urlToImage+`"/>
            <h5>`+allDate[i].title+`</h5>
            <p>`+allDate[i].content+`</p>
        </div>
    </div>
    </div>`;
    }
    document.getElementById("rowData").innerHTML = temp;
    }



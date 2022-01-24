var ins = document.getElementById("insert");
var id_arr = [0,1];

for(var i=0;i<arr.length;i++){
    var show="<div Id="+i+" class='note'><h1>"+arr[i].title+"</h1><p>"+arr[i].content+"</p><button name="+i+" onclick='removeFun(name)' class='delete' >X</button></div>";
 
    ins.insertAdjacentHTML("afterend",show);
}

var btn = document.getElementById("create-note");
btn.onclick = function(){
    var title=document.getElementById("title-input").value;
    var note=document.getElementById("note-input").value;
    document.getElementById("title-input").value="";
    document.getElementById("note-input").value="";
    
    var idd=-1;
    if(id_arr.length==0){
        idd=0;
        id_arr.push(0);
    }else{
        for(var i=0;i<id_arr.length;i++){
            if(id_arr[i]===-1) { id_arr[i]=i; idd=i; break;}
        }
        if(idd===-1) {idd=id_arr.length; id_arr.push(idd);}
    }

    if(title.length!=0 && note.length!=0){
        var show="<div id="+idd+" class='note'><h1>"+title+"</h1><p>"+note+"</p><button name="+idd+" onclick='removeFun(name)' class='delete' >delete</button></div>";
        ins.insertAdjacentHTML("afterend",show); 
    } 
    else{
        alert(" Please Enter title and notes");
    }
    

}

function removeFun(param){
   
    var myobf=document.getElementById(param);
    console.log(myobf);
    if(myobf!=null){
        myobf.remove();
        for(var i=0;i<id_arr.length;i++){
            if(id_arr[i]==param){ id_arr[i]=-1; break;}
        }
        
    }
}





correctPassword = "iamthehost";
function checkPassword(){
  var inputPassword = window.prompt("This is a private website please exit");
  if(inputPassword == correctPassword){
    window.open("index.html");
  }else{
    alert("This is a private website please exit");
  }
}

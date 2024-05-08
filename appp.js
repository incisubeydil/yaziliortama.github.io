function hesapla(){
    var  s1=document.getElementById("s1").value;
    var  s2=document.getElementById("s2").value;
    var  s3=document.getElementById("s3").value;
    /* girilen sayıların 0-100 arasında olup olmadığını bulun*/
    if (s1<0 || s1>100)
    {alert ("1. yazılı notu 0-100 aralığında olmalıdır")}
    document.getElementById("s1").value="";
    if (s2<0 || s2>100)
    {alert ("2. yazılı notu 0-100 aralığında olmalıdır")}
    document.getElementById("s2").value="";
    if (s3<0 || s3>100)
    {alert ("3. yazılı notu 0-100 aralığında olmalıdır")}
    document.getElementById("s3").value="";
    
    var ortalama=(Number(s1)+Number(s2)+Number(s3))/3;
    alert("girilen notların ortalaması" +ortalama);
    document.getElementById("sonuc").value="ortalamanız+ ort"
     
    

}
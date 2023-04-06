 let a = prompt("enter the number");
    for(i=1;i<=a;i++){
        for(j=1;j<=i;j++){
            if(i==1 || i==a){
                document.write("*&nbsp");
            }
            else if(j==1 || j==a || j==i){
                document.write("*&nbsp");
            }
            else{
                document.write("&nbsp &nbsp");
            }
        }
        document.write("<br>");
    }
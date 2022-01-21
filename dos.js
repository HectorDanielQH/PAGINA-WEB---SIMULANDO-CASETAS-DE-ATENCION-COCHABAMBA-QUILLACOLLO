let texto="";
let datol="";
let fila=0;
function llamada(objeto){
    if(objeto=='filanone')
    {
        texto="Por favor ingrese el número de autos y genere la tabla";
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }
    else{
        let auto=$(`.${objeto}`);
        for(let f=0;f<19;f++){
            datol=auto[0].getElementsByTagName('td')[f].innerHTML;
            if(f==0)
            {
                texto=" El "+datol.replace(".",",")+" ";
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
            }
            if(f==1)
            {
                texto=" es de tipo general";
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
            }
            if(f==2){
                texto=" el tiempo de interllegada es "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==3){
                texto=" el tiempo de llegada es "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==4 && datol!="-"){
                fila=4;
                texto=" el tiempo de servicio en la caseta 1 es de "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==5 && datol!="-"){
                fila=5;
                texto=" el tiempo de servicio en la caseta 2 es de "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==6 && datol!="-"){
                fila=6;
                texto=" el tiempo de servicio en la caseta 3 es de"+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if((f==7 || f==8 || f==9)&&datol!="-"){
                texto=" este auto se irá en "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==10 && datol!="-"){
                texto=" el tiempo de espera en la caseta 1 es de "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==11 && datol!="-"){
                texto=" el tiempo de espera en la caseta 2 es de "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==12 && datol!="-"){
                texto=" el tiempo de espera en la caseta 3 es de "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
            if(f==13 && fila==4){
                if(datol=="0"){
                    texto="En este moomento no hay fila en la caseta 1";
                    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                }
                else{
                    texto=" existen "+datol.replace(".",",") + " autos en la fila de la caseta 1";
                    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                }
            }
            if(f==14 && fila==5){
                if(datol=="0"){
                    texto="En este moomento no hay fila en la caseta 2";
                    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                }
                else{
                    texto=" existen "+datol.replace(".",",") + " autos en la fila de la caseta 2";
                    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                }
            }
            if(f==15 && fila==6){
                if(datol=="0"){
                    texto="En este moomento no hay fila en la caseta 3";
                    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                }
                else{
                    texto=" existen "+datol.replace(".",",") + " autos en la fila de la caseta 3";
                    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
                }
            }
            if((f==16 || f==17 || f==18)&&datol!="-"){
                texto=" este vehículo se quedará en el sistema "+datol.replace(".",",");
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto+" segundos"));
            }
        }
    }

    //speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    texto="";
    datol="";
    fila=0;
}
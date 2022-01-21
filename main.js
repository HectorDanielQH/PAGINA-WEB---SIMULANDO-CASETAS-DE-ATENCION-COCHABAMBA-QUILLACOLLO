let cadena='';
let matriz_total=[];
let bandera_tiempo_servicio=4;
$('.boton-generar').click(function(){
    let matriz=[];
    for(let i=0;i<parseInt($('#auto').val());i++)
        matriz[i]=new Array();
    for(let i=0;i<parseInt($('#auto').val());i++){
        matriz[i][0]="Auto "+(i+1);
        matriz[i][1]="General";
        if(i==0){
            matriz[i][2]='-';
            matriz[i][3]=0;
            matriz[i][4]=tiempo_servicio().toFixed(3);
            matriz[i][5]="-";
            matriz[i][6]="-";
            matriz[i][7]=matriz[i][4];
            matriz[i][8]="-";
            matriz[i][9]="-";
            matriz[i][10]=0;
            matriz[i][11]='-';
            matriz[i][12]='-';
            matriz[i][13]=0;
            matriz[i][14]="-";
            matriz[i][15]="-";
            matriz[i][16]=matriz[i][4];
            matriz[i][17]="-";
            matriz[i][18]="-";
        }
        if(i==1){
            matriz[i][2]=((-1.0/9.0)*60.0*Math.log(1.0-Math.random())).toFixed(3);
            matriz[i][3]= (parseFloat(matriz[i-1][3])+parseFloat(matriz[i][2])).toFixed(3);
            matriz[i][4]="-";
            matriz[i][5]=tiempo_servicio().toFixed(3);
            matriz[i][6]="-";
            matriz[i][7]="-";
            matriz[i][8]=matriz[i][5];
            matriz[i][9]="-";
            matriz[i][10]='-';
            matriz[i][11]=0;
            matriz[i][12]='-';
            matriz[i][13]=0;
            matriz[i][14]=0;
            matriz[i][15]="-";
            matriz[i][16]="-";
            matriz[i][17]=matriz[i][5];
            matriz[i][18]="-";
        }
        if(i==2){
            matriz[i][2]=((-1.0/9.0)*60.0*Math.log(1.0-Math.random())).toFixed(3);
            matriz[i][3]= (parseFloat(matriz[i-1][3])+parseFloat(matriz[i][2])).toFixed(3);
            matriz[i][4]="-";
            matriz[i][5]="-";
            matriz[i][6]=tiempo_servicio().toFixed(3);;
            matriz[i][7]="-";
            matriz[i][8]="-";
            matriz[i][9]=matriz[i][6];
            matriz[i][10]='-';
            matriz[i][11]='-';
            matriz[i][12]=0;
            matriz[i][13]=0;
            matriz[i][14]=0;
            matriz[i][15]=0;
            matriz[i][16]="-";
            matriz[i][17]='-';
            matriz[i][18]=matriz[i][6];
        }
        if(i>2){
            matriz[i][2]=((-1.0/9.0)*60.0*Math.log(1.0-Math.random())).toFixed(3);
            matriz[i][3]= (parseFloat(matriz[i-1][3])+parseFloat(matriz[i][2])).toFixed(3);
            if(bandera_tiempo_servicio==4)
            {
                matriz[i][4]=tiempo_servicio().toFixed(3);
                matriz[i][5]="-";
                matriz[i][6]="-";

                matriz[i][7]=(parseFloat(matriz[i-3][7])+parseFloat(matriz[i][4])).toFixed(3);
                matriz[i][8]="-";
                matriz[i][9]="-";

                matriz[i][10]=(parseFloat(matriz[i-3][7])-parseFloat(matriz[i][3])).toFixed(3);
                matriz[i][11]="-";
                matriz[i][12]="-";

                matriz[i][13]=parseInt(matriz[i-1][13])+1;
                matriz[i][14]=matriz[i-1][14];
                matriz[i][15]=matriz[i-1][15];

                matriz[i][16]=(parseFloat(matriz[i][10])+parseFloat(matriz[i][4])).toFixed(3);
                matriz[i][17]="-";
                matriz[i][18]="-";

                bandera_tiempo_servicio++;
            }
            else
            {
                if(bandera_tiempo_servicio==5)
                {
                    matriz[i][4]="-";
                    matriz[i][5]=tiempo_servicio().toFixed(3);
                    matriz[i][6]="-";

                    matriz[i][7]="-";
                    matriz[i][8]=(parseFloat(matriz[i-3][8])+parseFloat(matriz[i][5])).toFixed(3);
                    matriz[i][9]="-";

                    matriz[i][10]="-";
                    matriz[i][11]=(parseFloat(matriz[i-3][8])-parseFloat(matriz[i][3])).toFixed(3);
                    matriz[i][12]="-";

                    matriz[i][13]=matriz[i-1][13];
                    matriz[i][14]=parseInt(matriz[i-1][14])+1;
                    matriz[i][15]=matriz[i-1][15];


                    matriz[i][16]="-";
                    matriz[i][17]=(parseFloat(matriz[i][11])+parseFloat(matriz[i][5])).toFixed(3);
                    matriz[i][18]="-";

                    bandera_tiempo_servicio++;
                }
                else
                {
                    if(bandera_tiempo_servicio==6)
                    {
                        matriz[i][4]="-";
                        matriz[i][5]="-";
                        matriz[i][6]=tiempo_servicio().toFixed(3);

                        matriz[i][7]="-";
                        matriz[i][8]="-";
                        matriz[i][9]=(parseFloat(matriz[i-3][9])+parseFloat(matriz[i][6])).toFixed(3);
                        
                        matriz[i][10]="-";
                        matriz[i][11]="-";
                        matriz[i][12]=(parseFloat(matriz[i-3][9])-parseFloat(matriz[i][3])).toFixed(3);
                        
                        matriz[i][13]=matriz[i-1][13];
                        matriz[i][14]=matriz[i-1][14];
                        matriz[i][15]=parseInt(matriz[i-1][15])+1;

                        matriz[i][16]="-";
                        matriz[i][17]="-";
                        matriz[i][18]=(parseFloat(matriz[i][12])+parseFloat(matriz[i][6])).toFixed(3);

                        bandera_tiempo_servicio=4;
                    }
                }
            }
        }
    }
    for(let i=0;i<parseInt($('#auto').val());i++){
        cadena+=`<tr class='fila${i}'>`;
        for(let j=0;j<19;j++){
            cadena+=`<td>${matriz[i][j]}</td>`;
        }
        cadena+=`<td><button class='btn btn-success' id="" onclick="llamada('fila${i}')"><i class='fas fa-microphone'></i></button></td>`;
        cadena+="</tr>"
    }
    $('.cambio').html(cadena);
    matriz_total=matriz;
});

function tiempo_servicio(){
    let R=Math.random();
    let Valor_retorno=0.0;
    if(R>=0.0 && R<0.5)
    {
        Valor_retorno=20.0+40.0*(R/0.5);
    }
    else
    {
        if(R>=0.5 && R<0.9)
        {
            Valor_retorno=60.0+60.0*((R-0.5)/0.4);
        }
        else
        {
            if(R>=0.9 && R<1.0)
            {
                Valor_retorno=120.0+240.0*((R-0.9)/0.1);
            }
        }
    }
    return Valor_retorno;
}


let t_esp="";
let t_regenerativo="";
let t_esp_fin=[];

let tabla_regen=[];
$(".analisis-regenerativo").click(function(){
    let inc=0;
    for(let i=0;i<parseInt($('#auto').val());i++){
        for(let j = 10; j <= 12; j++){
            if(matriz_total[i][j]!="-"){
                if(parseFloat(matriz_total[i][j])<=0.0){
                    t_esp_fin[inc]=0;
                }
                else{
                    t_esp_fin[inc]=matriz_total[i][j];
                }
                inc++;
            }
        }
    }
    for(let i=0;i<parseInt($('#auto').val());i++){
        t_esp+="<tr>";
        t_esp+=`
            <td>${i+1}</td>
            <td>${t_esp_fin[i]}</td>
        `;
        t_esp+="</tr>";
    }
    $('.cambio-dos').html(t_esp);

    let tamaño_ciclo=[];
    let suma_añadir=0.0;
    for(let i=0;i<t_esp_fin.length;i++){
        if(i==0 || i==1){
            tamaño_ciclo.push(t_esp_fin[i]);
        }
        else{
            if(i==t_esp_fin.length-1)
            {
                if(parseFloat(t_esp_fin[i])== 0)
                {
                    tamaño_ciclo.push("0");
                }
                else
                {
                    suma_añadir+=parseFloat(t_esp_fin[i]);
                    tamaño_ciclo.push(suma_añadir);
                    suma_añadir=0;
                }
            }
            else
            {
                if(parseFloat(t_esp_fin[i+1])!= 0 && parseFloat(t_esp_fin[i])>0)
                {
                    suma_añadir+=parseFloat(t_esp_fin[i]);
                }
                else{
                    if(suma_añadir<=0.0 && parseFloat(t_esp_fin[i])<=0 && parseFloat(t_esp_fin[i+1])<=0){
                        tamaño_ciclo.push('0');
                        suma_añadir=0;}
                    else
                    {
                        suma_añadir+=parseFloat(t_esp_fin[i]);
                        tamaño_ciclo.push(suma_añadir);
                        suma_añadir=0;
                    }
                }
            }
        }
    }


    for(let i=0;i<tamaño_ciclo.length;i++){
            if(parseFloat(tamaño_ciclo[i])>0.0){
                tamaño_ciclo.splice(i-1,1);
            }
    }
    console.log(tamaño_ciclo);
//    alert(tamaño_ciclo);
});
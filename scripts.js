"use strict"
let checkMove;
let timer;
let timerDos;
let timerTres;

$(document).ready(function() {
    let num = 0;
    $(".miClip").css({
        "opacity":"0"  
    })
    $(".miClipDos").css({
        "opacity":"0"
        
    })
    timer = setTimeout(function(){
        num ++;
        if(checkMove=="left"){
            $(".miClip").css({
                "opacity":"1"  
            })
        }else if(checkMove=="right"){
            $(".miClipDos").css({
                "opacity":1  
            })
        }

    },500)

});

$(".main.left").on({
    mousemove:function(miEvento){
  
        checkMove = "left";
        let alto = miEvento.pageY - $(".wrapperClip").offset().top;
        // console.log(alto);
        let ancho = miEvento.pageX - $(".wrapperClip").offset().left;
        // console.log(ancho);

        $(".cambiaValor.izq").attr("cx", ancho);
        $(".cambiaValor.izq").attr("cy", alto);
        $(".miClip").css({
            "opacity":"1"  
        })
        $(".miClipDos").css({
            "opacity":"0"
            
        })
    }
});


$(".main.right").on({
    mousemove:function(miEvento){

        checkMove = "right";
        let alto = miEvento.pageY - $(".wrapperClipDos").offset().top;
        // console.log(alto);
        let ancho = miEvento.pageX - $(".wrapperClipDos").offset().left;
        // console.log(ancho);
        $(".cambiaValor.dcha").attr("cx", ancho);
        $(".cambiaValor.dcha").attr("cy", alto);
        $(".miClip").css({
            "opacity":"0"
        })
        $(".miClipDos").css({
            "opacity":"1"
            
        })
    }

});

let miRadio = 60;
let radioMayor = 60 + 50;

let i = 0;

$(".main").on({
    click:function(ev){
        
        $(".cambiaValor").removeClass("radioPeque");
        $(".cambiaValor").removeClass("radioGrande");
        $(".cambiaValor").css({
            "transition":"0.4s"
        })
        $(".cambiaValor").css({
            "transition":"0.4s"
        })

        i++;

        if(i > 2){  
            i= 1;
        }else{

        };

        if(i==1){      
            $(".cambiaValor").addClass("radioGrande");
            let numDos = 0;
            timerDos = setTimeout(function(){
                numDos ++;
                $(".cambiaValor.radioGrande").css({
                    "transition":"none"
                })
        
            },400)
        };
        if(i==2){
            $(".cambiaValor").addClass("radioPeque");
            let numTres = 0;
            timerTres = setTimeout(function(){
                numTres ++;
                $(".cambiaValor.radioPeque").css({
                    "transition":"none"
                })
        
            },400)
        }       
    }
});


       



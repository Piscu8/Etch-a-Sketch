const div = document.querySelector('.grid-container');
let multiColor = false;

creaGrilla(16);
pintaCelda();

    function creaGrilla(cantidad){
      
      for(let i=0; i<(cantidad*cantidad);i++){
        var celda = document.createElement('div');
        let ancho=0;
        ancho = 900 / cantidad;
        celda.style.cssText = 'width: ' + ancho + 'px ; height: ' + ancho + 'px';
        celda.classList.add('grid-item');
        div.appendChild(celda);
      }
    }

    function pintaCelda(){
        const cell = document.querySelectorAll('.grid-item');
        cell.forEach((celd)=>{
           celd.addEventListener('mouseenter',()=>{
            if(multiColor==false) {   
            celd.classList.add('pintado');
            }else{
                celd.classList.remove('pintado');
                celd.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 255)) + ',' + Math.floor((Math.random() * 255)) +',' + Math.floor((Math.random() * 255)) + ')';
                
            }
        })
      })
    }

    function resetGrilla(){
      while(div.hasChildNodes()){
       div.removeChild(div.lastChild);
      }
    
     multiColor=false;
     creaGrilla(cantidadCeldas());
     pintaCelda();
    }  

    function cantidadCeldas(){
        let cantCeldas=0;
        cantCeldas = prompt("Ingrese cantidad de celdas:")
        if (cantCeldas <= 0 || cantCeldas > 30 || isNaN(cantCeldas)){
            alert("Debe ingresar entre 1 y 30 celdas!");
            cantidadCeldas();
        }
        return parseInt(cantCeldas)
    }

    function rainbow(){
        multiColor = true;
    }
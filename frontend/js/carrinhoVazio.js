//Creacion del objeto de Prueba
const productoPrueba = [
    {
    Descripcion: "Tomates Frescos por Kilo",
    Precio : 125,
    Moneda: "R$",
    Cantidad: "1 kg",
    id: Date.now()
    },
      
    {
    Descripcion: "Tomates Frescos por Kilo",
    Precio: 215,
    Moneda: "R$",
    Cantidad: "1 kg",
    id: Date.now()
    }

];

console.log(productoPrueba);
console.log(productoPrueba[0].Descripcion);

const imagen = document.createElement('img');
    imagen.setAttribute('src', './assets/images/img-Jesus/Tomates.jpg');


//Insertar el objeto en el cuadro de compras

const Compras = document.querySelector('#compras');
insertarProducto();


function insertarProducto() {
    
    const totalProductos = productoPrueba.length;
    for (let i=0; i<totalProductos; i++) {

        const resumenProductos = document.createElement('tr');
            resumenProductos.appendChild(imagen);
    
            resumenProductos.innerHTML += 
            `
            <td>${productoPrueba[i].Descripcion}</td>
            <td>${productoPrueba[i].Precio}</td>
            <td>${productoPrueba[i].Moneda}</td>
            <td>${productoPrueba[i].Cantidad}</td>
            
            `;
    
            Compras.appendChild(resumenProductos);



    }

            
        };

        
        

       
    

    


// Calculo de Subtotal
calculosubtotal(productoPrueba);


function calculosubtotal(productoPrueba) {

    console.log('vamos a calcular el subtotal');

    let valorSubtotal = 0;
    let subtotal;
    console.log(valorSubtotal);
    console.log(productoPrueba.length);
    console.log(productoPrueba[0].Precio);
    
   
    for (let i=0; i < productoPrueba.length; i++) {
        subtotal = valorSubtotal + productoPrueba[i].Precio;
        valorSubtotal = subtotal;
        
            
            }

            
            
         
      
    };
    
    
       
        

       
    

    
 



    

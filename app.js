const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', () => {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'empleados.json', true);

  xhr.onload = function() {

    if(this.status === 200){      

      const personas = JSON.parse( this.responseText );      
      const empleados = document.getElementById('empleados')

      let htmlTemplate = '';

      personas.forEach(persona => {

        htmlTemplate += `
          <ul>
            <li>ID: ${persona.id}</li>
            <li>Nombre: ${persona.nombre}</li>
            <li>Empresa: ${persona.empresa}</li>
            <li>Trabajo: ${persona.trabajo}</li>
          </ul>
        `;

        empleados.innerHTML = htmlTemplate;          
        
      });
    }
  }
  
  xhr.send(); 

})

boton1.addEventListener('click', () => {

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'empleado.json', true);
  
  xhr.onload = function() {

    if(this.status === 200){

      const persona = JSON.parse( this.responseText );
      const empleado = document.getElementById('empleado')

      const htmlTemplate = `
        <ul>
          <li>ID: ${persona.id}</li>
          <li>Nombre: ${persona.nombre}</li>
          <li>Empresa: ${persona.empresa}</li>
          <li>Trabajo: ${persona.trabajo}</li>
        </ul>
      `;

      empleado.innerHTML = htmlTemplate;

    }

  }
  xhr.send(); 
  
})
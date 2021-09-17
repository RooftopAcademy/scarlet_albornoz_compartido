# BIENVENIDO A MI REPO

Aquí verás mi proyecto para el Onboarding de Rooftop Academy.

Para subir este repo utilicé GIT siguiendo los siguientes pasos:

1. Crear una carpeta - mkdir carpeta
2. Inicializar GIT en la carpeta - git init
3. Crear un gitignore - touch .gitignore
4. Crear un archivo readme - touch README.md
5. Modificar el archivo readme poniendo un título - code README.md
6. Agregar y commitear todos los cambios - git add . git commit -m 'First commit'

---

## Algunas preguntas interesantes:

### Sobre internet:

- ¿Qué es un DNS ?

  Domain Name Service, es un servicio de nombres de dominio, que se utiliza para resolver los nombres en la red. Traducen las URL en la correspondiente dirección IP.
  En internet, los dispositivos son rotulados con direcciones IP numéricas únicas. Los nombres de dominio fueron pensados para convertir éstas direcciones IP en nombres simples y reconocibles. DNS utiliza un conjunto distribuido de servidores para resolver los nombres asociados con estas direcciones numéricas.

- ¿Qué es una IP ?

  El protocolo de internet es un protocolo de comunicación de datos digitales clasificado funcionalmente en la capa de red según el modelo internacional OSI.
  La IP es una numeración única que identifica el equipo y permite que se pueda comunicar con otros equipos. Pueden ser estáticas o dinámicas:
  Las direcciones IP estáticas no cambian en ningún momento. Son un dato inalterable.
  Las direcciones IP dinámicas cambian, o al menos están diseñadas para cambiar. Cuando un sistema informático utiliza una dirección IP dinámica, anuncia a la red local dónde puede encontrarlo.

- ¿Qué es ISP ?

  Proveedor de Servicios de Internet es la empresa que brinda conexión a Internet a sus clientes.

### Sobre la web en general:

- ¿Cuáles son las diferencias entre frontend y backend ?

  Frontend es la interfaz con la que el usuario interactúa, mientras que el backend es el servidor, la aplicación y base de datos que trabaja tras bastidores para entregar la información al usuario.

- ¿Qué lenguajes son más comunes en frontend ?

  HTML, CSS, JavaScript

- ¿Y en backend ?

  JavaScript, Java, Ruby, Python, Go, PHP, .Net, etc.

- ¿Hay algún lenguaje que sea utilizable en ambos entornos ?

  JavaScript

### Sobre la terminal del sistema operativo:

- ¿Qué comando se utiliza para crear directorios ?

  mkdir

- ...para ingresar o salir de un directorio ?

  cd

- ...para crear archivos ?

  touch nombre_de_archivo

- ...para borrar el historial de comandos ejecutados ?

  clear

- ...para listar archivos y carpetas de la ubicación actual ?

  dir

### Sobre GIT:

- ¿Qué es una rama ?

  Es un entorno independiente para poder trabajar en un proyecto, utilizando los documentos disponibles, de manera que se pueda tener un control sobre el versionado de los cambios realizados y poder manejar distintos estados del proyecto de forma paralela.

- ¿Qué hacen los comandos add / commit / push ?

  - **add:** Agrega los cambios seleccionados al stage.
  - **commit:** Guarda los cambios hechos en el stage y solicita un mensaje descriptivo para los cambios guardados.
  - **push:** Envía los cambios al repositorio.

- Diferencia entre pull y push

  - **pull:** Se utiliza para recibir los datos que ya se encuentran en un repositorio.
  - **push:** Se utiliza para enviar cambios al repositorio.

- Diferencia entre clone e init

  - **clone:** Clona un repositorio existente.
  - **init:** Inicializa un repositorio en el directorio seleccionado.

### Sobre Markdown:

- ¿Es un lenguaje de programación ?

  No, es un lenguaje de marcado que se convierte en HTML al ser renderizado en una página web.

- ¿Para qué se suele usar comúnmente ?

  Se suele utilizar para elaborar textos de forma rápida y sencilla.

- ¿Qué otro lenguaje es similar ?

  Existe una gran variedad de lenguajes de marcado, como podemos ver en [Wikipedia](https://es.wikipedia.org/wiki/Lenguaje_de_marcado#Mapa_de_los_lenguajes_de_marcas "ir a Wikipedia").

  Sin embargo, algunos de los más conocidos son HTML y XML.

### Sobre los lenguajes de programación y JavaScript:

- ¿Qué tipos de estructuras existen?

  - **Estructura Secuencial:** Las instrucciones de un programa se ejecutan una después de la otra, en el mismo orden en el cual aparecen en el programa.
  - **Estructura condicional:** Selecciona entre dos alternativas con base en el resultado de la evaluación de una condición.
  - **Estructura iterativa condicional:** Corresponde a la ejecución repetida de una instrucción mientras que se cumple una determinada condición.

- ¿JS, es un lenguaje interpretado o compilado?

  JavaScript es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.

- ¿JS, es un lenguaje fuertemente tipado, débilmente tipado o no tipado?

  JS es un lenguaje de tipado dinámico, intérprete asigna a las variables un tipo durante el tiempo de ejecución basado en su valor en ese momento.

- ¿Conviene usar let o var? ¿Por qué?

  **let** permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.

  **var** define una variable global o local en una función sin importar el ámbito del bloque.

Por ende, es más recomendable usar **let**, ya que evita la sobreescritura de variables fuera del bloque en el que se encuentra declarada.

- ¿Cuáles son las características de la programación funcional?

  - No existen efectos colaterales: Una función, si tiene todos los parámetros definidos por valor y no se hacen asignaciones a variables globales, no tendrá efectos colaterales.
  - El valor de una lambda no depende de nada más que de los valores de sus subexpresiones, si las tuviera.
  - Tiene una semántica limpia:

    - Únicamente significa lo que dice, es decir, estamos ante un lenguaje declarativo y siempre devolverá el mismo resultado, mientras que el lenguaje imperativo no es así.

    - El almacenamiento de datos es implícito, por lo que las operaciones asignan almacenamiento sólo cuando es necesario y se libera automáticamente si se vuelve inaccesible.

    - Las funciones se vuelven valores de primera clase y estarán al mismo nivel que cualquier otro valor. Una función podrá ser el valor de una expresión, pasarse como argumento y colocarse en una estructura de datos.

- ¿Qué tipos de eventos existen en el navegador?

  - Eventos del mouse
  - Eventos del teclado
  - Eventos del elemento form
  - Eventos del documento
  - Eventos del CSS

- Menciona al menos 3 eventos de cada tipo

  - **Eventos del mouse:** onclick, oncontextmenu, ondblclick, onmouseup, onmousedown, onmouseover, onmouseenter, onmouseleave, onmousemove, onmouseout.
  - **Eventos del teclado:** onkeyup, onkeydown, onkeypress.
  - **Eventos del elemento form:** submit, reset, change.
  - **Eventos del documento:** abort, beforeunload, error, load, resize, scroll, select, unload.
  - **Eventos del CSS:** animationend, animationstart, transitionend.

- ¿Cuál es la diferencia entre método y función?

  Ambos son un conjunto de instrucciones que realizan una tarea, sin embargo, el método está directamente asociado con las instrucciones que puede realizar un objeto.

- ¿Cuándo se invoca al método constructor?

  El método constructor se utiliza para crear e inicializar un objeto creado a partir de una clase.

- ¿Qué son los métodos “estáticos”?

  Los métodos estáticos están compartidos en distintas instancias de una clase. Así que están asociados a una clase y no sólo a una instancia de la misma.

- Completar: Las propiedades deben ser **\_\_\_\_** y los métodos **\_\_\_\_**

- Mencionar al menos 5 objetos nativos que tiene el lenguaje JS

  - Number
  - Boolean
  - String
  - Array
  - Date
  - Math
  - RegExp
  - Class
  - Error
  - Global
  - Operators
  - Statements
  - JSON

- ¿Cuáles son los fundamentos de la POO?

  - Encapsulamiento
  - Abstracción
  - Polimorfismo
  - Herencia

- ¿Qué es lo que se busca al implementar POO?

  Busca que el código sea reutilizable, organizado y fácil de mantener.

- ¿POO reemplaza a la programación funcional?

  No, ambas se pueden utilizar en el mismo código y pueden coexistir perfectamente.

- ¿Qué es un closure?

  Es una función anidada en otra función y se suele utilizar para evitar problemas con el scope dentro del código. Retorna una función que referencia a las variables locales de la función en la que se encuentra.

  Ejemplo:

  ```javascript
  const hello = (name) => {
    const greeting = `Hello ${name}`;
    const greet = () => alert(greeting);
    return greet;
  };
  const helloJane = hello("Jane");
  helloJane();
  ```

- ¿Qué es un callback?

  Es una función que se pasa como parámetro a otra función. También puede ser retornada como resultado de otra función y puede utilizarse en código síncrono y asíncrono.

  Ejemplo:

  ```javascript
  const calculate = (x, y, callbackFn)=>{
  return callbackFn(x, y);
  })

  const add = (x, y) => x + y;

  const result = calculate(1, 2, add);
  ```

- ¿Qué similitudes y diferencias hay entre closures y callbacks?

  Ambas son funciones que se pueden utilizar dentro de otra función, la diferencia consiste en que, el callback se pasa como parámetro a otra función y el closure se declara dentro de otra función y su scope se limita a ella.

.

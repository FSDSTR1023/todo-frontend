# TODO app (frontend)

Repositorio para la parte frontend de la app de ToDo


Pasos a seguir:
1) yarn create react-app my-react-app
2) cd my-react-app
3) yarn add axios  # Para realizar solicitudes HTTP al servidor
4) yarn add react-router-dom

my-todo-app/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── TodoList.js
  │   │   ├── TodoItem.js
  │   │   ├── AddTodoForm.js
  │   │   └── ...
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── package.json
  ├── package-lock.json (o yarn.lock si estás usando Yarn)
  ├── README.md
  └── ...


public/: Esta carpeta contiene archivos estáticos que se servirán tal como están. El archivo index.html es el punto de entrada de tu aplicación React.

src/: Aquí es donde reside la mayor parte del código fuente de tu aplicación.

components/: Esta carpeta contiene componentes de React reutilizables que componen tu aplicación. Por ejemplo, TodoList.js podría ser un componente que muestra la lista de tareas, TodoItem.js podría representar un elemento individual de la lista, y AddTodoForm.js podría ser un formulario para agregar nuevas tareas.

App.js: El componente principal de tu aplicación. Aquí se definen las rutas y se organizan los componentes.

index.js: Punto de entrada de la aplicación donde se renderiza el componente principal en el elemento root del archivo index.html.

package.json: Archivo de configuración de tu proyecto que incluye información sobre las dependencias y scripts de inicio, entre otras cosas.

README.md: Documentación o instrucciones para tu proyecto.

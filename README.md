# angular_crud_books
Crud Angular

Development of an application with Angular 10, it was developed a simple application of a book register (CRUD) with Creation, Reading, Update and Exclusion of books.

# Technologies and Prerequisites</b>

<b>Challenges and learning acquired during development:</b>
Os principais conceitos do Angular 10: Componentes, Diretivas, Pipes, Services, RxJS, uso do [material](https://material.angular.io/) e etc, muito mais

# Preparing the environment
  Angular requires the following items:
  
* 

# Database
As our main focus is the frontend part so to simplify the backend and we will use JSOM SERVE

```
npm i json-server
```
json-server read the file that we will create (db.json) that will contain an object with all the endPoints and create an API based on this file.

We must create a file inside the backend folder that we will call (db.json) that will work as a database.

We must open the file and type the objects with all API endpoints.


```
{
  "books": [
    {
      "id": 1,
      "name": "O Pequeno Princie",
      "author": "Pedro de Alcantra",
      "price": 5.89
    },
    {
      "id": 2,
      "name": "O Rei e o rato",
      "author": "Jose de Anchieta",
      "price": "6"
    },
    {
      "id": 3,
      "name": "O Rei leao",
      "author": "Jose de Anchieta",
      "price": "7"
    }
  ]
}
```

# System screens
<img src="https://github.com/fvneto/angular_crud_books/blob/master/home.PNG" width="650" height="350">
<img src="https://github.com/fvneto/angular_crud_books/blob/master/books.PNG" width="650" height="350">
<img src="https://github.com/fvneto/angular_crud_books/blob/master/delete.PNG" width="650" height="350">
<img src="https://github.com/fvneto/angular_crud_books/blob/master/newbooks.PNG" width="650" height="350">
<img src="https://github.com/fvneto/angular_crud_books/blob/master/update.PNG" width="650" height="350">

**Cursos**
----
  Esse projeto tem como objetivo a inserção, alteração, exclusão e a consulta de cursos e usuários.
  <br /> 
  
  O sistema possui os seguintes endpoints REST com seus respectivos retornos:
* **(GET) Consultando todos os cursos**

    `/cursos`

    * **Method:**
  
        `GET`

* **(GET) Consultando um curso**

    `/cursos/{id}`

    * **Method:**
  
        `GET`

* **(POST) Inserindo um curso**

    `/cursos`

    * **Method:**
  
        `POST`
        
    * **Body:**  
    `{`<br />
        `"titulo": "TITULO",`<br />
        `"descricao": "DESCRIÇÃO",`<br />
        `"cargaHoraria": 1.0,`<br />
        `"valor": 2.0`<br />
    `}`<br />        

* **(PUT) Alterando um curso**

    `/cursos/{id}`

    * **Method:**
  
        `PUT`
        
    * **Body:**  
    `{`<br />
        `"titulo": "TITULO",`<br />
        `"descricao": "DESCRIÇÃO",`<br />
        `"cargaHoraria": 1.0,`<br />
        `"valor": 2.0`<br />
    `}`<br />            

* **Excluindo um curso**

    `/cursos/{id}`

    * **Method:**
  
        `DELETE`

* **Consultando todos os usuários**

    `/usuarios`

    * **Method:**
  
        `GET`
        
* **Consultando um usuário**

    `/usuarios/{id}`

    * **Method:**
  
        `GET`

* **Inserindo um usuário**

    `/usuários`

    * **Method:**
  
        `POST`
        
    * **Body:**  
        `{`<br />
            `"nome": "NOME",`        
             `"telefone": "(XX) XXXXX-XXXX",`<br />
             `"endereco": "ENDEREÇO",`<br />
             `"dataAdmissao": "XX/XX/XXXX"`<br />
         `}`<br />        

* **Alterando um usuário**

    `/usuarios/{id}`

    * **Method:**
  
        `PUT`
        
    * **Body:**  
        `{`<br />
            `"nome": "NOME",`        
             `"telefone": "(XX) XXXXX-XXXX",`<br />
             `"endereco": "ENDEREÇO",`<br />
             `"dataAdmissao": "XX/XX/XXXX"`<br />
         `}`<br />

* **Excluindo um usuário**

    `/usuarios/{id}`

    * **Method:**
  
        `DELETE`

* **Tecnologias Usadas:** <br /><br />
  O projeto está usando as seguintes tecnologias: <br />
  * **Java 8**
  * **Spring Boot**  
  * **AngularJS**  
  * **MySQL**
  * **MongoDB**
  * **Maven**
  * **Docker**

* **Como executar o projeto:** <br /><br />
  Para executar o projeto execute os seguintes comandos na pasta principal do projeto:
    <br />
    * **`mvn clean package -P prod -DskipTests`**<br />
    * **`docker-compose -f docker-compose.yml up -d`**

* **IMPORTANTE:** <br /><br />
  **Quando o sistema é executado pela primeira vez o banco de dados está sem nenhum registro.
  Para poder realizar a busca de dados, primeiramente, este deve ser inserido.**

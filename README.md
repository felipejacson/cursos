**Cursos**
----
  Esse projeto tem como objetivo a inserção, alteração, exclusão e a consulta de cursos e usuários.
  <br /> 
  
  O sistema possui os seguintes endpoints REST com seus respectivos retornos:
* **(GET) Consultando todos os cursos**

    `/cursos`

* **(GET) Consultando um curso**

    `/cursos/{id}`

* **(POST) Inserindo um curso**

    `/cursos`
        
    * **Body:**  
    `{`<br />
        `"titulo": "TITULO",`<br />
        `"descricao": "DESCRIÇÃO",`<br />
        `"cargaHoraria": 1.0,`<br />
        `"valor": 2.0`<br />
    `}`<br />        

* **(PUT) Alterando um curso**

    `/cursos/{id}`
        
    * **Body:**  
    `{`<br />
        `"titulo": "TITULO",`<br />
        `"descricao": "DESCRIÇÃO",`<br />
        `"cargaHoraria": 1.0,`<br />
        `"valor": 2.0`<br />
    `}`<br />            

* **(DELETE) Excluindo um curso**

    `/cursos/{id}`

* **(GET) Consultando todos os usuários**

    `/usuarios`
        
* **(GET) Consultando um usuário**

    `/usuarios/{id}`

* **(POST) Inserindo um usuário**

    `/usuários`
        
    * **Body:**  
        `{`<br />
            `"nome": "NOME",`        
             `"telefone": "(XX) XXXXX-XXXX",`<br />
             `"endereco": "ENDEREÇO",`<br />
             `"dataAdmissao": "XX/XX/XXXX"`<br />
         `}`<br />        

* **(PUT) Alterando um usuário**

    `/usuarios/{id}`
        
    * **Body:**  
        `{`<br />
            `"nome": "NOME",`        
             `"telefone": "(XX) XXXXX-XXXX",`<br />
             `"endereco": "ENDEREÇO",`<br />
             `"dataAdmissao": "XX/XX/XXXX"`<br />
         `}`<br />

* **(DELETE) Excluindo um usuário**

    `/usuarios/{id}`

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

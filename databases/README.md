# Databases concepts

1. Until now, data was stored in-memory, which is bad for few reasons:
 - There are multiple servers in real world, we can't be writing in memory data in all of them, and if server crashes then data is lost in it - basically inconsistency issues
 - Data won't be dynamic, if we update in memory objects and server crashes or process restarts => data will be lost and back to initial data

2. In real world, basic architecture looks like:

    `Browser ------->  Backend ---------> Database`

   - user hits the backends (there can be multiple)
   - backend hits the database
   - user can't directly access database

3. There are multiple types of Databases
   - **SQL DBs:** Stores data in form of rows, relational dbs where schemas is defined beforehand eg: **Postgres, MySQL**
   - **NoSql DBs:** Stores data in Schemaless fashion. eg: **MongoDB**
   - **Graph DBs:** Stores data in form of graph, useful where `relationships` are important. eg: **Neo4j**
   - **Vector DBs:** Stores data in form of vectors, useful in Machine learning, eg: **pinecone**
4. How does backends connect to Databases?
   - Using Libraries
   - Like below libraries: 
     - `Express` lets you create HTTP servers
     - `jsonwebtoken` lets you create JWT signed tokens
     - `Mongoose` lets you connect to your database

5. Few Questions:
   - Q: Why don't users directly hits Database?
     - Databases were created using protocols which browsers doesn't understand

      - Databases doesn't have Granular access (ability to access something user or group based) which makes DBs safe and persistent.
      - `firebase` is exception, it provides **fine grain** access to users without the need of http server => users can directly access certain resources after validation checks they are belongs to those certain user or groups who have provided with the access of those certain resources.
   - Q: What extra does HTTP server provides?
       - They provides security and authentication facility

## Databases

- What are **Databases?**
   - They usually allows 4 important operations in efficient manner
   - **CRUD** (**C**reate, **R**ead, **U**pdate, **D**elete)
   - We'll learn using `mongoose` library to talk to `mongodb`
   - Eventually we'll use `prisma`, which is **ORM** used to talk to databases.
   - Cluster > Database > Tables
   - Cluster is made up of multiple databases, databases are made up of multiple tables

## MongoDB & mongoose library

  - MongoDB is **schemaless**, can put any data without worrying about the structure of data.
  - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
  - In mongoose, 1st we **have to define schema**.
  - what is **schema**? schema is structure of data we are gonna put in DB.
  - So, mongoose taking perks of mongodb away? kinda yes but putting schemaless data in DB is very dangerous and mongoose prevents that.
  - It doesn't mean we can't put schemaless data in mongodb we still can, but mongoose provides benefits like:
    - Auto Completions
    - Validation data before it goes to DB
    - Making sure to use schemas to make mongoDB less dangerous
    - So, with mongoose, mongoDB becomes strict ? yes kinda but at nodejs level, not at the DB level, we still can put erroneous data in db that doesn't follow schema
  
  - Similar to `JavaScript` & `TypeScript` as TS provides more **type safety** on top of JS.
  - mongoDb let us put **nested complex objects** in DB, which **SQL DBs doesn't**. => easy is establish relationships between data.
  
  - MongoDB
    - We'll first do mongoose connection test example. refer file: `01.mongooseConnect.js` | [Example-js](https://github.com/princebansal7/Web-Development-Concepts/blob/main/databases/mongoDB/01.mongooseConnect.js)
    - MongoDb with Authentication, refer file `02.mongoDBwithAuthenticationAndInputValidation.js` | [Example-js](https://github.com/princebansal7/Web-Development-Concepts/blob/main/databases/mongoDB/02.mongoDBwithAuthenticationAndInputValidation.js)
         - Connect to mongoDB using `mongoose` library.
         - We'll have 3 routes: `/signup`, `/signin`, `/users`
           1. `/signup`: user will send `email`, `password`, `name`  in body and we'll put it in DB provided same user email doesn't exists
           2. `/signin`: we'll check if user exits in db or not with correct password, if it does => return JWT signed token.
           3. `/users`: user sends header with his jwt token, we'll return all the users present in db (except the logged in user itself)

## SQL database

- SQL databases have a strict schema. They require you to
   - Define your schema
   - Put in data that follows that schema
   - Update the schema as your app changes and perform `migrations`
 
- So there are 4 parts when using an SQL database (not connecting it to Node.js, just running it and putting data in it)
   1. Running the database. (use docker or get connection string from supabase, neonTech online providers)
   2. Using a library that let’s you connect and put data in it.
   3. Creating a table and defining it’s schema.
   4. Run queries on the database to interact with the data, perform CRUD (create, read, update, delete) operations

- SQL with Postgres (NOTE: code is in **TypeScript**)
  - install `pg` library to use in backend to do CRUD in postgres db (similar to mongoose)
    ```
      npm init -y
      npx tsc --init

      npm install pg
      npm install @types/pg
    ```
  - use `psql` library which provided terminal based front-end to postgresSQL (optional)
  - While putting data in DB, avoid adding data in the query itself and use separate values like $1, $2 etc to avoid `SQL injection`
  - CRUD operations | [main](https://github.com/princebansal7/Web-Development-Concepts/blob/main/databases/postgres/01.crud-operations/src/index.ts) | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/databases/postgres/01.crud-operations/src/CRUD)
  - Relationships & JOIN | [main](https://github.com/princebansal7/Web-Development-Concepts/blob/main/databases/postgres/02.relationship/src/index.ts) | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/databases/postgres/02.relationship/src/db-operations)

## ORM (Object Relational Mapping) & Prisma

- ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages. This technique creates a "virtual object database" that can be used from within the programming language.
- ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code.
- ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)

  - ORM provides simple syntax (converts objects to sql queries under the hood)
    - pg (without ORM)
      ```ts
        const query = "SELECT * FROM users WHERE email=$1";
        const result = await client.query(query,["prince.bansal@gmail.com"]);
      ```
    - with ORM
      ```ts
        User.find({
          email: "prince.basnal@gmail.com"
        })
      ```
  - Provides abstraction that lets you flip or change the database irrespective of what currently you are using (Unified API irrespective of database)   
  - It means our node code will remains the same and underlying ORM API will covert the code corresponding to the DB (mysql, postgres, mongodb) we need it to support.
  - Provides type safety/Auto completions, makes writing code easy

- `Auto Migrations`
  - What is **Migration?** 
  - Migration is updating the database with latest schema as the application grows
  - As application grows, schema changes, means hard to keep track of what all commands ran for creation of schema and when deploying to production databases or need to change databases, it's hard to keep track of all the commands which lead to current/final schema.
  - So, ORM helps in this and gives a central place for all the migrations and automatically keeps the track of all the migrations happened

- **Prisma**
  - Prisma is NodeJS specific ORM
  - It mainly provides `Data model`, `Type-Safety`, `Automated Migrations` & `Auto Completions`
    - `Data Model`: In a single file, define your schema. What it looks like, what tables you have, what field each table has, how are rows related to each other.
    - `Automated Migrations`: Prisma generates and runs database migrations based on changes to the Prisma schema.
    - `Type Safety`: Prisma generates a type-safe database client based on the Prisma schema.
    - `Auto Completions`: Helps in auto completion while writing code based on defined schema
  - Prisma Hands on | [Example](https://github.com/princebansal7/Web-Development-Concepts/tree/main/databases/prisma-orm#prisma-setup-and-commands)

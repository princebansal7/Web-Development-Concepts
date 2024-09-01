## Prisma Setup and commands

- Install prisma , typescript and related dependencies
    ```sh
        npm install prisma typescript ts-node @types/node --save-dev
    ```
- Initialize TS project
    ```sh
        npx tsc --init  
    ```
- Initialize Prisma
    ```sh
        npx prisma init 
    ```
- Write schema of application in `prisma/schema.prisma`
- Run below command for migration
    ```sh
        npx prisma migrate dev --name Initialize_first_schema
    ```
- Generating Prisma client (which auto generate User, Todo client or classes, using them we can perform CRUD )
   ```sh
        npx prisma generate
   ```

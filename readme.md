Implementation based on a tutorial https://www.freecodecamp.org/news/build-youtube-with-react/
1. Install Postgresql to the local drive with an installer https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database#setting-up-postgresql-on-windows   
2. Change the current directory to this project folder  
3. Install Prisma to the folder https://www.prisma.io/docs/concepts/components/prisma-cli/installation  
4. Form the tutorial, create "schema.prisma" on the project root. The tutorial says "prisma.schema" but it is not correct.
5. Install Prisma client via "npm install @prisma/client". It creates a database by reading the schema file.
6. Run "npx prisma migrate dev --name add-profile --preview-feature" in the schema folder on CMD. The database will be created. https://astatsuya.medium.com/jwt%E3%82%92prisma-postgresql-express-typescript%E3%81%A7%E4%BD%9C%E3%82%8B-2079048161c7 You can check database is created on GUI (pgAdmin 4)
7. Install Express framework: https://expressjs.com/en/starter/installing.html
8. Try a hello-world example https://expressjs.com/en/starter/hello-world.html. Rename app.helloworld.js to app.js and run it on Node.js from VSCode. Open "localhost:3000" from a browser, then you will see "Hello world".
9. Run "app.js" in server/src on VSCode, or Node prompt via "node app.js".
10. Open "http://localhost:3001/api/v1/video" or "http://localhost:3001/api/v1/video/trend" from a browser, it will show "{"videos":[]}".


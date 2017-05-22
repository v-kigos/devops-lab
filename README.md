# devops-lab
DevOps lab

## Lagom
The Lagom framework includes Java and Scala APIs to simplify development of microservices. Industry-standard build tools automatically download what you need to get started developing a Lagom system. Use a `Maven` archetype or an `sbt` template to create a new project with a simple Hello World service that you can test in your browser.

One simple command starts the Lagom development environment and runs:

- Cassandra
- Kafka
- A service locator
- A service gateway
- Your Lagom services

1. Create a new directory for your project.

2. Change into the new directory and enter the following (all on one line):

```
mvn archetype:generate -DarchetypeGroupId=com.lightbend.lagom
-DarchetypeArtifactId=maven-archetype-lagom-java -DarchetypeVersion=1.3.4
```

3. Maven prompts you for:

`groupId` - typically something like com.example.
`artifactId` - becomes the top-level folder name, for example, my-first-project.
`version` - the version for your project, press Enter to accept the default.
`package` - defaults to the same value as the groupId

4. Enter Y to accept the values. Maven creates the project.

5. Change into the top-level project folder and run it:

```
mvn lagom:runAll
```

The `runAll` command takes a bit of time. It starts Hello World microservices and registers them in a service directory. 
It also starts a Cassandra server and a web server.

6. When you see the message, `Services started, ...`, 
verify that the services are indeed up and running by invoking the hello service endpoint from any HTTP client, 
such as a browser: http://localhost:9000/api/hello/World

The request returns the message Hello, World!.

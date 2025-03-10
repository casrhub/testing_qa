# Testing and QA Course Repository

## Running the Backend
To start the project, first run the backend. Navigate to the `backend/spring-boot-backend` directory and execute the following command:

```sh
mvn spring-boot:run
```

## Running the Frontend
To launch the frontend, you can start a simple Python server with the following command:

```sh
python3 -m http.server 8000
```

You can change the port as needed and make the necessary modifications to accommodate the change.

## Troubleshooting
If you encounter any issues after modifying the backend, run the following command to ensure dependencies are correctly installed:

```sh
mvn clean install
```

After that, restart the backend as usual:

```sh
mvn spring-boot:run

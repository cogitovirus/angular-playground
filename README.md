# cogitovirus-app

Small angular app for playing around...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Cloud deploy with App engine

Run `ng build --prod`

Upload the yaml config and the app to the cogitovirus-app bucket. `gsutil cp -r dist/  gs://cogitovirus-app`

Open google console. `gsutil rsync -r gs://cogitovirus-app ./cogitovirus-dist`

Deploy `gcloud app deploy`

## Cloud deploy with cloud run
### Test the buld locally
Build an image for a dockerfile

`docker build -t cogitovirus-app .`

To run locally

`docker run -p 8080:8080 cogitovirus-app`

### Containerize the app and upload to Container Registry
Run the following command

`gcloud builds submit --tag gcr.io/cogitovirus/cogitovirus-app`

Deploy with Cloud Run (when deploying for the first time)

`gcloud run deploy --image gcr.io/cogitovirus/cogitovirus-app --platform managed`

To switch prod version to the latest build:
1. Make sure the latest build was submitted to the Container Registry
2. Go to Cloud Run
3. Select Edit & Deploy new revision
4. It should pull the latest version from the registry. Alternatively, you could select the specific docker image.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
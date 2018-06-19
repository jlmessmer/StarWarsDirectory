# README

## Requirements

* Python 3.6.5
* Django 2.0.6 and following dependencies:
  * requests
  * djangorestframework
  * django-cors-headers
* Node.js 8.11
* npm 5.6.0 (bundled with Node.js)

# Setup Angular

1. run `npm install` in `angular-star-wars-directory` - this will install ~1,000 packages
2. Run `npm install -g @angular/cli`
3. Run `npm install --save angular/material2-builds angular/cdk-builds` for google Material Design
4. Run `npm install --save @angular/animations`

## Running app

1. Open CLI, go to swdir directory, run `python manage.py runserver` (and navigate to http://127.0.0.1:8000/directory, if not using Angular)
2. Open another CLI, run `npm start` from `angular-star-wars-directory` and go to 127.0.0.1:4200

pipeline {
    agent any

    environment {
        NO_COLOR = '1'
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Cypress E2E') {
            steps {
                bat 'npx cypress run --browser chrome'
            }
        }
    }
}
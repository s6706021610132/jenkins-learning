pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'call npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'call npm test'
            }
        }

        stage('Cypress E2E') {
            steps {
                bat 'npx cypress run --browser chrome --config video=false'
            }
        }
    }
}
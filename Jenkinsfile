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

        stage('Build') {
            steps {
                bat 'echo Build completed'
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

        stage('Approval') {
            steps {
                input message: 'Deploy to Production?', 
                      ok: 'Deploy'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying application...'
                bat 'echo Deploy completed'
            }
        }
    }
}
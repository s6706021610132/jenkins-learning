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
    }
}
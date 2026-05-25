pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        DOCKER_IMAGE = 'hotel-booking-frontend'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Stepping into my-react-app folder to install packages...'
                /* This tells Jenkins to change directories into the folder where package.json actually lives */
                dir('my-react-app') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building React application...'
                dir('my-react-app') {
                    sh 'npm run build'
                }
            }
        }
    }
}

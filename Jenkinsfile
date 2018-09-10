pipeline{
    agent any
    stages {
        stage("Stage1"){
            steps{
                echo 'Hello World!'
                echo 'Hello World2'
            }
        }
        stage("stage2"){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '81bb2862-4bdd-401a-a094-30b228fb1f47', url: 'https://github.com/SandeepVaman/simple_node.git']]])

            }
        }
        stage("stage3"){
            steps{
                sh '''/Users/Shared/Jenkins/Home/tools/hudson.plugins.sonar.SonarRunnerInstallation/Sonar_Scanner_-_3.2/bin/sonar-scanner \\
  -Dsonar.projectKey=Simple-Node\\
  -Dsonar.sources=. \\
  -Dsonar.host.url=http://localhost:9000 \\
  -Dsonar.login=70aaa33a26be4f808e70ef28382db29c18ecb942'''

            }
        }
        
    }
}

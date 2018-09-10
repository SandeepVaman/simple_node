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
                echo 'In stage two'
                exit 1
                script {
                    properties([[$class: 'GithubProjectProperty',
                    projectUrlStr: '<GitHub repo URL>']])
                    }
 

 
        step([$class: 'GitHubIssueNotifier',
            issueAppend: true,
            issueLabel: '',
            issueTitle: '$JOB_NAME $BUILD_DISPLAY_NAME failed'])
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

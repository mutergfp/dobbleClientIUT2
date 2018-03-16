node {
    def app
    stage('Clone repository') {
        /*Repo is cloned*/
        checkout scm
    }
    stage('Build image') {
        app = docker.build("gi1/dobble_client")
    }
	stage('Run image') {
		sh 'docker stop dobbleClient'
		app.run('-p 80:80 -it --rm --name dobbleClient')
		sh 'docker network connect network dobbleClient --alias dobbleClient'
	}
}
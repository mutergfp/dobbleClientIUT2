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
		sh 'docker stop dobbleCartes'
		app.run('-p 80:4200 -it --rm --name dobbleClient')
	}
}
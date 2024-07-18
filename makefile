install:
	./shell/install.sh

runDocker:
	./shell/runDocker.sh

downDocker:
	docker compose down

clean:
	@docker images | grep prayer-player | awk '{print $$3}' | xargs -r docker rmi -f
	@echo 'Clean done'

updateDockerDNS:
	./shell/updateDockerDNS.sh

cleanDockerDNS:
	./shell/cleanDockerDNS.sh

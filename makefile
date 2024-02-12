#!make
install:
	./install.sh
runDocker:
	./runDocker.sh
downDocker:
	docker compose down
IMAGE_ID := ${shell docker images | grep prayer-player | awk '{print $$3}'}
clean: downDocker
ifneq ($(strip $(IMAGE_ID)),)
	docker rmi $(IMAGE_ID)
else
	@echo 'Clean already done'
endif

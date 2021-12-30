# Makefile

install: # установить зависимости
	npm ci

brain-games: # сгенерировать ключи
	node bin/brain-games.js


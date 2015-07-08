clean:
	rm -rf build
	rm -rf node_modules

install:
	npm install

dev:
	clear
	node dev-server.js

prod: 
	NODE_ENV=production node node_modules/webpack/bin/webpack.js --progress --profile --colors

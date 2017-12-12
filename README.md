Deploy Steps:

Local:

docker build -t bitcoinregret . && docker tag bitcoinregret sdupz/bitcoinregret:latest && docker push sdupz/bitcoinregret:latest


ON SERVER:

docker pull sdupz/bitcoinregret

docker stop -t 0 bitcoinregret

docker run -itd --rm -p 5000:5000 -e VIRTUAL_PORT=5000 -e VIRTUAL_HOST=bitcoinregret.net --net reverse-proxy --name bitcoinregret sdupz/bitcoinregret
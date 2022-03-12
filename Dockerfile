FROM node:latest

RUN apt update && apt install -y --no-install-recommends \
    git

USER node

WORKDIR /home/node/app

CMD ["sh", "-c", "npm install && tail -f /dev/null"]


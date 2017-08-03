FROM hypriot/rpi-node
COPY package2.json /src/package.json
COPY server.js /src/server.js
WORKDIR /src
RUN npm install
EXPOSE 80
CMD ["node", "server.js"]

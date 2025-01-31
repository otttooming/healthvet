FROM node:10.15.0

ARG PACKAGE_PATH=
ARG WORKING_DIR=

WORKDIR ${WORKING_DIR}

COPY ${PACKAGE_PATH}/package*.json ${WORKING_DIR}

RUN yarn install

COPY ${PACKAGE_PATH} ${WORKING_DIR}

VOLUME $WORKING_DIR/node_modules

CMD [ "yarn", "start" ]

# FROM node:8.11.3-alpine

# USER root

# RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories

# RUN mkdir -p /run/nginx
# RUN apk update
# RUN apk add nginx

# #设置npm淘宝镜像
# RUN npm config set registry https://registry.npm.taobao.org
# # RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
# # RUN npm install -g yarn

# # RUN cd $(npm root -g)/npm && npm install fs-extra && sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

# # 复制项目代码
# COPY . /src
# WORKDIR /src

# RUN yarn
# RUN npm run build:test 

# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
FROM ubuntu:16.04

USER root
#网易apt-get镜像
RUN sed -i 's/http:\/\/archive\.ubuntu\.com\/ubuntu\//http:\/\/mirrors\.163\.com\/ubuntu\//g' /etc/apt/sources.list

RUN apt-get update
RUN apt-get install -yqq nginx
RUN apt-get install -y curl wget

RUN wget http://npm.taobao.org/mirrors/node/v8.11.3/node-v8.11.3-linux-x64.tar.gz && \
    tar -C /usr/local --strip-components 1 -xzf node-v8.11.3-linux-x64.tar.gz && \
    rm node-v8.11.3-linux-x64.tar.gz 

#设置npm淘宝镜像
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

# RUN cd $(npm root -g)/npm && npm install fs-extra && sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

# 复制项目代码
COPY . /src
WORKDIR /src

RUN cnpm i 
RUN npm run build

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
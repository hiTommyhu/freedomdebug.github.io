教程：https://www.runoob.com/docker/docker-run-command.html

# docker

> 镜像（Images）
> Docker镜像是一个只读的模板。包含了容器运行时所需要的文件系统和一些参数。镜像是无状态的，也不会改变。镜像是用来创建容器的。你可以使用docker pull命令获取一个别人已创建好的镜像，或者使用dockerbuild来构建一个自己的镜像。
>
> 容器（Containers）
> Docker容器就像是一个文件夹，容器中包含了应用运行所需的一切。每个容器都是一个隔离的和安全的应用平台。容器是镜像的一个实例，它是有状态的，而且随时会改变，容器一般是短暂的。

### docker在centros7安装

```shell
su root
#  yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
yum install -y yum-utils device-mapper-persistent-data lvm2
# 设置yum源
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# 可以查看所有仓库中所有docker版本，并选择特定版本安装
yum list docker-ce --showduplicates | sort -r
# 安装一个版本
yum install docker-ce-17.12.0.ce

# 启动并加入开机启动
systemctl start docker
systemctl status docker
systemctl enable docker

# 验证安装是否成功(有client和service两部分表示docker安装启动都成功了)
docker version
```

###  docker玩法

```shell
docker search nginx 
docker pull nginx:latest
docker images

# --name nginx-test：容器名称。
# -p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。
# -d nginx： 设置容器在在后台一直运行。
docker run --name nginx-test -p 8080:80 -d nginx

# 查看正在运行的
docker ps

# 进入image内
docker exec -it 【CONTAINER ID】 /bin/bash
```

###  TC镜像

```
http://hub.xxx.com/hub/projects/374/repositories
http://wiki.xxx.com/pages/viewpage.action?pageId=37260969
unclewang
uncle123456
```

###  node镜像

```shell
docker pull node:latest
docker images
docker run -itd --name node-test node

# 进入image内
docker exec -it node-test /bin/bash

root@6c5d265c68a6:/# node -v
```

###  push node镜像到tc 镜像hub

```shell
# 登录TC hub
docker login hub.xxx.com
Username: [你的工号]
Password: [命令行密码]

# 通过 docker tag 命令重命名镜像，标记本地镜像，将其归入某一仓库。
docker tag [IMAGE ID] hub.xxx.com/unclewang/node:18.4.0

# 这里IMAGE ID 为057129cb5d6f
docker tag 057129cb5d6f hub.xxx.com/unclewang/node:18.4.0

# 通过 docker push 命令上传镜像
docker push hub.xxx.com/unclewang/node:18.4.0

# 查看image已经推送到hub
https://hub.xxx.com/hub/projects/374/repositories/unclewang%2Fnode
```

###  Dockerfile

```shell
docker build -f /path/to/Dockerfile

# Dockerfile必须以FROM指令开始，不过它支持在FROM之前由ARG指令定义一个变量：
ARG NG_VERSION=1.19.3
FROM nginx:${NG_VERSION}
CMD /bin/bash
```

#### FROM

多阶段构建1

> FROM XXX, 　首先如果什么都不带，默认latest(另外还有slim，标识最小安装包，alpine，表示基于`alpine linux`项目，这是一个社区开发的面向安全应用的轻量级Linux发行版。它的优点就是基于的linux操作系统非常轻量，因此构建出来的镜像也非常的轻量；它的缺点也十分的明显，就是不包含一些有可能会用到的包，并且使用的glibc包等都是阉割版；因此如果我们使用这个版本，也需要进行彻底的测试。
>
> 例如
>
> FROM node
>
> 即为
>
> FROM node:latest
>
> 或者 docker hub里的某个镜像
>
> FROM docker.xxx.com/base/node_10.7

```shell
FROM node

# ...一些操作

FROM nginx

# ...一些操作

COPY --from=0 . .
```

多阶段构建2

```shell
FROM node as compile

FROM nginx as serve

COPY --from=compile . .
```

####  RUN

> docker build构建镜像过程中要执行的命令，比如创建文件夹mkdir、安装程序apt-get等等）
>
> RUN指令将会在前一条命令创建出的镜像的基础之上创建一个容器，并在容器中运行命令，在命令结束运行后提交容器为新镜像，新镜像将被dockerfile中的下一条指令使用。

```shell
# shell 格式
RUN <command>
# exec 格式
RUN ["可执行文件", "参数1", "参数2"]
```

例如：

```shell
FROM ubuntu:18.04

# 多层写法
RUN apt-get update
RUN apt-get install -y curl wget

# Dockerfile的指令是分层构建的，每一层都有缓存
# 因此我们通常会把update和install写在一条指令，确保我们的Dockerfiles每次安装的都是包的最新的版本；同时也可以减少镜像层数，减少包的体积：
RUN apt-get update && apt-get install -y curl wget
```
####  CMD

> （docker run时运行而非docker build，也就是启动容器的时候，它的首要目的在于为启动的容器指定默认要运行的程序，程序运行结束，容器也就结束。）
>
> 【docker 不是虚拟机，容器就是进程。】既然是进程，那么在启动容器的时候，需要指定所运行的程序及参数。CMD 指令就是用于指定默认的容器主进程的启动命令的。它的主要目的是为执行中的容器提供默认值。
> CMD不同于RUN，CMD用于指定在容器启动时所要执行的命令，而RUN用于指定镜像构建时所要执行的命令

```shell
# CMD指令用于执行目标镜像中包含的软件，可以指定参数，它也有两种语法格式：

# shell格式
CMD <命令>
# exec格式（推荐）
CMD ["可执行文件", "参数1", "参数2"...]

# CMD和RUN都可以用来执行命令的，很相似，那他们两者有什么区别么？首先我们发现RUN是用来执行docker build构建镜像过程中要执行的命令，比如创建文件夹mkdir、安装程序apt-get等等。
# 而容器在run的时候只能创建一次，因此一个Dockerf中也只能有一个CMD指令；比如我们的容器运行node程序，最后需要启动程序：
CMD ["node", "app.js"]
# 或者
CMD npm run start

```

#### LABEL

> 向镜像添加标签，例如作者，版本等信息

```shell
LABEL multi.author="value1"
LABEL multi.version="value2"
LABEL other="value3"
或
LABEL multi.author="value1" multi.version="value2" other="value3"
或
LABEL multi.author="value1" \
      multi.version="value2" \
      other="value3"
```

####  EXPOSE

> EXPOSE指令通知docker容器在运行时监听指定的网络端口，可以指定端口是侦听TCP还是UDP，如果未指定协议，则默认值为TCP。

```shell
EXPOSE <port> [<port>/<protocol>...]
```

```shell
# EXPOSE指令是【声明】容器运行时提供服务的端口，这只是一个声明，在容器运行时并不会因为这个声明应用就会开启这个端口的服务；其语法如下：
EXPOSE <端口1> [<端口2>...]
在Dockerfile中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个好处则是在运行时使用随机端口映射时，也就是 docker run -P 时，会【自动随机映射 EXPOSE 的端口】。
```


####  WORKDIR

```shell
# WORKDIR指令可以用来指定工作目录，以后各层的当前目录就被改为指定的工作目录；如果该目录不存在，WORKDIR会自动创建目录。
FROM node:10.15.3-alpine

WORKDIR /app

RUN echo "hello" > world.txt
```



#### ADD

```shell
一.拷贝单个文件到指定目录
这个比较简单，用法是：ADD 宿主机文件的全路径 docker容器下的文件夹路径，示例如下：

#拷贝当前目录下的test.jar到/usr/bin目录下
ADD ./test.jar /usr/bin/

二.拷贝特定的多个文件到指定目录
ADD指令支持通配符，常用的示例如下：

#拷贝当前目录下的bin文件夹的所有sh文件到/usr/bin目录下

#拷贝当前目录下的bin文件夹的所有sh文件到/usr/bin目录下

ADD ./bin/*.sh /usr/bin/

#拷贝当前目录下的bin文件夹的所有带后缀的文件到/usr/bin目录下

ADD ./bin/*.* /usr/bin/

#拷贝当前目录下的bin文件夹的所有不带后缀的文件到/usr/bin目录下

ADD ./bin/* /usr/bin/

#拷贝当前目录下的bin文件夹的所有文件到/usr/bin目录下（/usr/bin目录原有的文件会保留）

ADD ./bin/ /usr/bin/

三.拷贝文件夹到指定目录
用法是：ADD 宿主机文件夹的全路径 docker容器下的文件夹路径+新文件夹名，示例如下：

#拷贝当前目录下的config文件夹到/usr/bin目录下

ADD ./config /usr/bin/config
```



####  COPY

```shell
# COPY指令用于从构建上下文目录中复制文件到镜像内的目标路径中，类似linux的cp命令，它的语法格式如下：
COPY src /app

# COPY指令只能复制文件夹下的文件，而不能复制文件夹本身，和linux的cp命令有区别, 如下可复制src；
COPY src /app/src
```



#### ADD VS COPY

> COPY 命令的超集
>
> ADD在执行 <源文件> 为 tar 压缩文件的话，压缩格式为 gzip, bzip2 以及 xz 的情况下，会自动复制并解压到 <目标路径>，但在不解压的前提下，无法复制 tar 压缩文件。
>
> COPY不支持URL作为参数，因此它不能用于从远程位置下载文件。
>
> 官方推荐使用 COPY进行指令操作。



####  ENV

```shell
# ENV指令用于设置环境变量，其语法有两种，支持多种变量的设置：
ENV <key> <value>
ENV <key1>=<value1> <key2>=<value2>...
这里的环境变量无论是后面的指令，如RUN指令，还是运行时的应用，都可以直接使用环境变量：
ENV NODE_VERSION 7.2.0

RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc"
这里定义了环境变量NODE_VERSION，后面的RUN指令中可以多次使用变量进行操作；因此如果我们后续想要升级node版本，只需要更新7.2.0即可
```


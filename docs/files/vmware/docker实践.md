教程：https://www.runoob.com/docker/docker-run-command.html

docker在centros7安装

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

docker玩法

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

TC镜像

```
http://hub.xxx.com/hub/projects/374/repositories
http://wiki.xxx.com/pages/viewpage.action?pageId=37260969
unclewang
uncle123456
```

node镜像

```shell
docker pull node:latest
docker images
docker run -itd --name node-test node

# 进入image内
docker exec -it node-test /bin/bash

root@6c5d265c68a6:/# node -v
```

push node镜像到tc 镜像hub

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


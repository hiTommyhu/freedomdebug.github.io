查看内核

```
uname -a
uname -srm
uname -r
```

查看系统版本

```
cat /etc/os-release
```

在新主机首次安装 Docker Engine-Community之前，需要设置Docker仓库，之后，您可以从仓库安装和更新 Docker。

设置仓库，需要安装所需的软件包。`yum-utils` 提供了 `yum-config-manager` ，并且 `device mapper` 存储驱动程序需要 `device-mapper-persistent-data` 和 `lvm2`。

```shell
su root

yum install -y yum-utils

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 查看yum源
yum repolist

cp CentOS-Base.repo CentOS-Base-repo.bak
```



### yum错误

```
File contains no section headers. file: file:///etc/yum.repos.d/CentOS-Base.repo, line: 1 '<!DOCTYPE html>\n'
```

网络上的鸡肋解决方法

```
方法1：配置yum源，修改/etc/yum.repos.d/CenOS-Base.repo文件
方法2：删除原文件重新下载
删除原有的文件 rm -f  /etc/yum.repos.d/CentOS-Base.repo  
重新下载，wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo  
清理缓存 yum clean all   
```

实际问题，wget下载的文件格式不对，手动下载然后传到服务器中即可

```
rm -f  /etc/yum.repos.d/CentOS-Base.repo  
下载http://mirrors.aliyun.com/repo/Centos-7.repo
xftp以管理员打开，上传到/etc/yum.repos.d
yum clean all
yum update
```

### xftp无权限

> window以管理员运行



### yum无法update和makcache

```
使用了桥接模式
可以ping通
无法yum update

更改网络适配器为NAT,桥接模式需要上网任务，同程管家，，，fk！！

改为NAT后，重启虚拟机，yum makcache搞定
```



> 1、首先备份 CentOS-Base.repo sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
>
> 2.将yum源配置文件/etc/yum.repos.d/CentOS-Base.repo改为清华源，内容如下:
>
> # CentOS-Base.repo
> #
> # The mirror system uses the connecting IP address of the client and the
> # update status of each mirror to pick mirrors that are updated to and
> # geographically close to the client.  You should use this for CentOS updates
> # unless you are manually picking other mirrors.
> #
> # If the mirrorlist= does not work for you, as a fall back you can try the
> # remarked out baseurl= line instead.
> #
> #
>
> [base]
> name=CentOS-$releasever - Base
> baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/os/$basearch/
> #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
> gpgcheck=1
> gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
>
> #released updates
> [updates]
> name=CentOS-$releasever - Updates
> baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/updates/$basearch/
> #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates
> gpgcheck=1
> gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
>
> #additional packages that may be useful
> [extras]
> name=CentOS-$releasever - Extras
> baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/extras/$basearch/
> #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
> gpgcheck=1
> gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
>
> #additional packages that extend functionality of existing packages
> [centosplus]
> name=CentOS-$releasever - Plus
> baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/centosplus/$basearch/
> #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus
> gpgcheck=1
> enabled=0
> gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7
> 3、清除缓存
>
> yum clean all
>
> rm -rf  /var/cache/yum/
>
> 4、生成缓存
>
> yum makecache
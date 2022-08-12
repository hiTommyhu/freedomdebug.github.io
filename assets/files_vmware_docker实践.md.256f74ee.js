import{_ as s,c as n,o as a,a as l}from"./app.251642fe.js";const D=JSON.parse('{"title":"yum-util \u63D0\u4F9Byum-config-manager\u529F\u80FD\uFF0C\u53E6\u5916\u4E24\u4E2A\u662Fdevicemapper\u9A71\u52A8\u4F9D\u8D56\u7684","description":"","frontmatter":{},"headers":[],"relativePath":"files/vmware/docker\u5B9E\u8DF5.md"}'),p={name:"files/vmware/docker\u5B9E\u8DF5.md"},e=l(`<p>\u6559\u7A0B\uFF1A<a href="https://www.runoob.com/docker/docker-run-command.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/docker/docker-run-command.html</a></p><p>docker\u5728centros7\u5B89\u88C5</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">su root</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#  yum-util \u63D0\u4F9Byum-config-manager\u529F\u80FD\uFF0C\u53E6\u5916\u4E24\u4E2A\u662Fdevicemapper\u9A71\u52A8\u4F9D\u8D56\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y yum-utils device-mapper-persistent-data lvm2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6Eyum\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u53EF\u4EE5\u67E5\u770B\u6240\u6709\u4ED3\u5E93\u4E2D\u6240\u6709docker\u7248\u672C\uFF0C\u5E76\u9009\u62E9\u7279\u5B9A\u7248\u672C\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">yum list docker-ce --showduplicates </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sort -r</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u4E00\u4E2A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install docker-ce-17.12.0.ce</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u542F\u52A8\u5E76\u52A0\u5165\u5F00\u673A\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start docker</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status docker</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u9A8C\u8BC1\u5B89\u88C5\u662F\u5426\u6210\u529F(\u6709client\u548Cservice\u4E24\u90E8\u5206\u8868\u793Adocker\u5B89\u88C5\u542F\u52A8\u90FD\u6210\u529F\u4E86)</span></span>
<span class="line"><span style="color:#A6ACCD;">docker version</span></span>
<span class="line"></span></code></pre></div><p>docker\u73A9\u6CD5</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker search nginx </span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull nginx:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --name nginx-test\uFF1A\u5BB9\u5668\u540D\u79F0\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -p 8080:80\uFF1A \u7AEF\u53E3\u8FDB\u884C\u6620\u5C04\uFF0C\u5C06\u672C\u5730 8080 \u7AEF\u53E3\u6620\u5C04\u5230\u5BB9\u5668\u5185\u90E8\u7684 80 \u7AEF\u53E3\u3002</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -d nginx\uFF1A \u8BBE\u7F6E\u5BB9\u5668\u5728\u5728\u540E\u53F0\u4E00\u76F4\u8FD0\u884C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name nginx-test -p 8080:80 -d nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165image\u5185</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it \u3010CONTAINER ID\u3011 /bin/bash</span></span>
<span class="line"></span></code></pre></div><p>TC\u955C\u50CF</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http://hub.xxx.com/hub/projects/374/repositories</span></span>
<span class="line"><span style="color:#A6ACCD;">http://wiki.xxx.com/pages/viewpage.action?pageId=37260969</span></span>
<span class="line"><span style="color:#A6ACCD;">unclewang</span></span>
<span class="line"><span style="color:#A6ACCD;">uncle123456</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>node\u955C\u50CF</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker pull node:latest</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -itd --name node-test node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165image\u5185</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it node-test /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">root@6c5d265c68a6:/</span><span style="color:#676E95;font-style:italic;"># node -v</span></span>
<span class="line"></span></code></pre></div><p>push node\u955C\u50CF\u5230tc \u955C\u50CFhub</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u767B\u5F55TC hub</span></span>
<span class="line"><span style="color:#A6ACCD;">docker login hub.xxx.com</span></span>
<span class="line"><span style="color:#A6ACCD;">Username: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u4F60\u7684\u5DE5\u53F7</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">Password: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\u547D\u4EE4\u884C\u5BC6\u7801</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u901A\u8FC7 docker tag \u547D\u4EE4\u91CD\u547D\u540D\u955C\u50CF\uFF0C\u6807\u8BB0\u672C\u5730\u955C\u50CF\uFF0C\u5C06\u5176\u5F52\u5165\u67D0\u4E00\u4ED3\u5E93\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">IMAGE ID</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> hub.xxx.com/unclewang/node:18.4.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FD9\u91CCIMAGE ID \u4E3A057129cb5d6f</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag 057129cb5d6f hub.xxx.com/unclewang/node:18.4.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u901A\u8FC7 docker push \u547D\u4EE4\u4E0A\u4F20\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">docker push hub.xxx.com/unclewang/node:18.4.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770Bimage\u5DF2\u7ECF\u63A8\u9001\u5230hub</span></span>
<span class="line"><span style="color:#A6ACCD;">https://hub.xxx.com/hub/projects/374/repositories/unclewang%2Fnode</span></span>
<span class="line"></span></code></pre></div>`,11),o=[e];function c(t,r,i,y,d,A){return a(),n("div",null,o)}var m=s(p,[["render",c]]);export{D as __pageData,m as default};

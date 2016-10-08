#HTTP的基础
##HTTP的概述</br>
&emsp;&emsp;1http仔细给每种要通过Web传输的对象打上名为MIME类型的数据格式标签，当web浏览器从服务器取回一个对象时，通过MIME来决定如何处理对象。常见的MIME格式如下：</br>
* HTML 格式的文本文档由 text/html 类型来标记。
* 普通的 ASCII 文本文档由 text/plain 类型来标记。
* JPEG 格式的图片为 image/jpeg 类型。
* GIF 格式的图片为 image/gif 类型。
* Apple 的 QuickTime 电影为 video/quicktime 类型。
*  微软的 PowerPoint 演示文件为 application/vnd.ms-powerpoint 类型。
    
&emsp;&emsp;2每个http请求都有一个方法，这个方法告诉服务器执行什么动作。有如下五种：</br>
* GET 从服务器向客户端发送命名资源。
* PUT 将来自客户端的数据存储到一个命名的服务器资源中。
* DELETE 删除服务器中的命名资源。
* POST 将客户端的数据发送到一个服务器中提交数据。
* HEAD 服务器返回资源的HTTP首部。

&emsp;&emsp;3通过终端连接web服务器的命令：</br>
```
192:github huangchengdu$ telnet www.joes-hardware.com 80
Trying 128.121.66.211...
Connected to joes-hardware.com.
Escape character is '^]'.
GET /tools.html HTTP/1.1
HOST:www.joes-hardware.com

HTTP/1.1 200 OK
Date: Sat, 08 Oct 2016 22:09:46 GMT
Server: Apache/2.2.22 (Unix) DAV/2 FrontPage/5.0.2.2635 mod_ssl/2.2.22 OpenSSL/1.0.1h
Last-Modified: Fri, 12 Jul 2002 07:50:17 GMT
ETag: "146deb7-1b1-3a58f649c4040"
Accept-Ranges: bytes
Content-Length: 433
Content-Type: text/html

<HTML>
<HEAD><TITLE>Joe's Tools</TITLE></HEAD>
<BODY>
<H1>Tools Page</H1>
<H2>Hammers</H2>
<P>Joe's Hardware Online has the largest selection of 
<A HREF="./hammers.html">hammers</A> on the earth.</P>
<H2><A NAME=drills></A>Drills</H2>
<P>Joe's Hardware has a complete line of cordless and corded drills,
as well as the latest in plutonium-powered atomic drills, for those
big around the house jobs.</P> ...
</BODY>
</HTML>
```
   
   /Users/huangchengdu/Desktop/屏幕快照 2016-08-31 10.37.48 PM.png

    

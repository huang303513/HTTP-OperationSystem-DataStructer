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
   
&emsp;&emsp;4URL 的设计者们认识到有时人们 可能会希望 URL 中包含除通用的安全字母表之外的二进制数据或字符。因此,需要 有一种转义机制,能够将不安全的字符编码为安全字符,再进行传输。为了避开安全字符集表示法带来的限制,人们设计了一种编码机制,用来在 URL 中表示各种不安全的字符。这种编码机制就是通过一种“转义”表示法来表示不安全字符的,这种转义表示法包含一个百分号(%),后面跟着两个表示字符 ASCII 码的 十六进制数。</br>

##HTTP报文</br>
&emsp;&emsp;1请求包括起始行、首部、主体。起始行和首部都是通过一个回车换行来分隔的，用CRLF表示。主体是一个可选的数据块，可以为二进制数据。Content-Type行说明了主体是什么，Content-Length行说明了主体有多大。

&emsp;&emsp;2 100~199信息状态码,200~299成功状态吗,300~399重定向状态吗,400~499客户端错误状态码,500~599服务器错误状态码。 

&emsp;&emsp;3首部分为五种类型，通用首部，客户端和服务端都使用的首部，提供与报文相关的最基本的信息，如Date。请求首部是请求报文特有的，如Accept。响应首部，比如Server。实体首部，用于表明实体相关的信息，Content-Type表示实体主体的类型。扩展首部，开发者自己创建。

##链接管理</br>

&emsp;&emsp;1TCP 连接是通过 4 个值来识别的:< 源 IP 地址、源端口号、目的 IP 地址、目的端口号 >这4个值一起唯一地定义了一条连接。两条不同的TCP连接不能拥有4个完全相同的地址组件值(但不同连接的部分组件可以拥有相同的值)。

&emsp;&emsp;2列出了一些会对 HTTP 程序员产生影响的、最常见的 TCP 相关时延,其中包括:TCP 连接建立握手;TCP 慢启动拥塞控制;数据聚集的Nagle算法;用于捎带确认的TCP延迟确认算法;TIME_W AIT 时延和端口耗尽。


&emsp;&emsp;3keep-Alive 首部只是请求将连接保持在活跃状态。发出 keep-alive 请求之 后,客户端和服务器并不一定会同意进行 keep-alive 会话。它们可以在任意时刻关 闭空闲的 keep-alive 连接,并可随意限制 keep-alive 连接所处理事务的数量。timeout在keep-Alive响应首部发送，表示服务器希望将连接保持在活跃状态的时间。max是keep-alive的响应首部发送，表示服务器还希望为多少个事务保持词连接的活跃状态。如果客户端没有发送 Connection: Keep-Alive 首部,服务器就会在那条请求 之后关闭连接。与 HTTP/1.0+ 的 keep-alive 连接不同,HTTP/1.1 持久连接在默认情况下是激活 的。除非特别指明,否则 HTTP/1.1 假定所有连接都是持久的。要在事务处理结束 之后将连接关闭,HTTP/1.1 应用程序必须向报文中显式地添加一个 Connection: close 首部。














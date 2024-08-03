# Foretify Developer安装

## 安装前准备

1. 一台 Ubuntu 20.04 或更高版本的服务器。
2. 要查看 Foretify 用户界面（可选）：推荐Chrome 浏览器
3. 服务器上的一个[非]root 用户，在本指南中称为 USER
4. 完成许可证服务器安装

一旦前提条件就绪，可以按以下顺序进行工具安装：

1. 安装环境依赖项。
2. 安装必备文件（联系Foretellix工程师提供XC压缩包）
3. 安装Foretify Developer（联系Foretellix工程师提供安装包）


## 安装步骤

### 安装环境依赖项

``` py
sudo apt install -y lsb-core ksh tcsh
sudo ln -s /usr/bin/basename /bin/basename
sudo dpkg-reconfigure dash #(choose no)
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt install -y libx11-6:i386 libncurses5:i386
```

### 安装必备文件

**首先进入安装目录：**

``` py
sudo mkdir -p /opt/foretellix
sudo chown $USER:users /opt/foretellix
cd /opt/foretellix
```

**将Foretellix提供的压缩包copy到安装目录并解压：**

``` py
sudo 
sudo tar -xvf foretify_prerequisites.tar.xz
```

**解压后会生成一个XC开头的文件夹目录，更改其Ownership:**

``` py
sudo chown -R $USER:users /opt/foretellix/XCELIUM1809
```

**在安装目录`/opt/foretellix/`下新建一个文件`ftx.rc`**

``` py
cd /opt/foretellix/
touch ftx.rc
```

**添加以下变量设置到 `/ftx/foretellix/ftx.rc`**

``` py
export CDS_LIC_FILE=5280@<license_server IP>
export INCISIVE_HOME=/opt/foretellix/<XC文件夹>
export SPECMAN_PATH=${INCISIVE_HOME}/tools/bin
export CDS_INST_DIR=${INCISIVE_HOME}
export CDS_AUTO_64BIT=ALL
export CDS_LIC_QUEUE_POLL=1
export CDS_LIC_QUEUE_POLL_INT=10
export PATH=$PATH:${INCISIVE_HOME}/bin:${INCISIVE_HOME}/tools/bin
```

注意替换其中的`<变量>`， 如果license安装在本机，`<license_server IP>` 可设为 `127.0.0.1`。


通过source `ftx.rc` 文件使环境变量生效：
```
source /opt/foretellix/ftx.rc
```
!!! Tip

    方便起见，请将上行代码添加至用户的 `~/.bashrc`文件中，这样每次打开新的terminal会自动加载变量配置。

**测试XC必备文件是否安装成功：**

在Terminal(确保该Terminal已经进行过上述source操作)中输入`specman`，如果您看到类似如下输出，则可进入下一步。

``` py
Linked on Mon Sep 17 16:10:52 2018
Protected by U.S. Patents 6,141,630 ;6,182,258; 6,219,809; 6,347,388;
6,487,704; 6,499,132; 6,502,232; 6,519,727; 6,530,054; 6,675,138; 6,684,359;
6,687,662; 6,907,599; 6,918,076; 6,920,583; Other Patents Pending.
Checking license ... OK

```

### 安装Foretify Developer

Foretellix提供的Foretify安装包为一个二进制文件，如`24.06.0.32-ubuntu2004-base_installer`, 本指南中称为`<foretify_file>`。


**解压安装包**

执行以下命令，将Foretify Developer安装至安装目录`/opt/foretellix/`

``` py
./<installer_file> --destination /opt/foretellix
```

安装成功后，会在安装目录`/opt/foretellix/`下看到一个叫`ftx`的文件夹。

**添加环境变量**

再次打开`/opt/foretellix/ftx.rc`, 添加如下变量设置，并保存。

``` py
export FTX=/opt/foretellix/ftx
export FTX_LIC_FILE=27001@<license_server IP>
source $FTX/bin/ftx_setup.sh 
```

同样地，为确保上述变量生效，请执行 `source /opt/foretellix/ftx.rc`。如果您已经将该语句添加至 `~/.bashrc`中，则新打开Terminal中，变量设置也会生效。

**验证Foretify Developer是否安装成功**

在Terminal中输入：

``` py
foretify --gui
```

如果您看到浏览器自动打开并显示如下界面，那恭喜您，Foretify Developer安装成功。

<figure markdown="span">
  ![Foretellix logo](../images/Foretify Developer gui.png){ width="600" }
  <figcaption>Foretify Developer UI</figcaption>
</figure>


# 许可证安装

## 安装前准备

**1. 许可证文件**

* Foretify许可证服务器的安装部署共需要两个license文件，请联系Foretellix工程师为指定工作站申请所需的许可证文件；
* 需将两个许可证文件中的`hostname`替换成工作站的实际hostname；
* 许可证默认占用端口5280和27001，确保该两端口可用

!!! note "注意"

    许可证文件与服务器的mac地址绑定，因此许可证仅能在指定工作站上生效.
        

**2. 许可证所需文件及安装脚本**
   
- 请联系Foretellix工程师提供许可证安装所需文件及脚本：

    * 安装脚本：license_installer.sh
    * 所需文件：foretellix_licensing_servers.tar.xz


**3. 安装依赖项**

- 如工作站已包含该依赖项，可跳过此步骤：
  
    `sudo apt install -y lsb-core`


## 安装步骤

**1. 设定安装路径**

``` py
sudo mkdir -p /opt/foretellix
```  

**2. 解压所需文件到上述安装路径**

``` 
cd /opt/foretellix
tar xavf foretellix_licensing_servers.tar.xz
sudo chown -R $USER /opt/foretellix
```

**3. 将两个license.txt文件拷贝至解压后的文件夹**
   
``` py
sudo mv <license files> /opt/foretellix/foretellix_licensing_servers
```  

注：确保license文件中的`hostname`已被更新

**4. 运行许可证安装脚本**

``` py
sudo ./license_installer.sh -l <path_to_license_1> -l <path_to_license_2> -i
/opt/foretellix/foretellix_license_server
```  

!!! Tip "关于license_installer.sh"

    ``` py
    -l | --license_file <path_to_file> The path to the license file to be set up. This option
    can be used more than once.
    -i | --install_dir <dir> The directory where to install the license servers
    -h | --help Show help (This page)
    ```


**5. 检查log**

脚本运行成功后，license server已经部署完毕。可通过检查log记录查看license server是否部署成功。

```py
/var/log/foretellix/foretellix_lic_server.log
/var/log/foretellix/foretify_lic_server.log
```
如果没有log中没有Error, 则表明安装成功。
接下来可进行Foretify软件的安装（Foretify Developer和Foretify Manager）

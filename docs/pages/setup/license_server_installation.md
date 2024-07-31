# 许可证安装

## 安装前准备

**1. 许可证文件**

* Foretify许可证服务器的安装部署共需要两个license文件(分别为`Foretellix license`和`Foretify license`)，请联系Foretellix工程师为指定工作站申请所需的许可证文件；
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

**3. 根据工作站实际参数更新两个许可证文件**
   
需结合工作站实际情况将两个许可证文件中的部分占位符替换成工作站的实际值，如下所示：

=== "Foretify license"

    将foretify license中首行的`hostname`替换成工作站的实际hostname:

    <p align="center">
    <a href="images/foretify lic.png" target="_blank">
    <img src="images/foretify lic.png", width="400">
    </a>
    </p>

=== "Foretellix license"

    Foretellix license中有两处更新：

    1. 将`Cadence Server`替换成工作站的实际hostname
    2. 将`./cdslmd` 替换成 `cdslmd`所在的**绝对路径**
    >  `cdslmd` 位于解压后的`foretellix_licensing_servers/installation_files/`文件下。
    
    <p align="center">
    <a href="images/foretellix lic.png" target="_blank">
    <img src="images/foretellix lic.png", width="400">
    </a>
    </p>

**4. 将更新后的两个license.txt文件拷贝至解压后的文件夹**
   
``` py
sudo mv <license files> /opt/foretellix/foretellix_licensing_servers/
```  

**5. 运行许可证安装脚本**

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

> 至此，如果没有任何报错，license server的安装部署已经完成了。为确保license安装成功且运行，请通过下一步进行安装状态检查。

## license安装状态检查

脚本运行成功后，license server已经部署完毕。

通过如下脚本进行检测：

=== "Foretify license 状态"

    ```bash
    sudo systemctl status foretify_lic_server.service
    ```

    如果**foretify license**安装成功，您将看到类似如下输出：
    
    <p align="center">
    <a href="images/foretify lic active.png" target="_blank">
    <img src="images/foretify lic active.png", width="600">
    </a>
    </p>

=== "Foretellix license 状态"

    ```bash
    sudo systemctl status foretellix_lic_server.service
    ```

    如果**foretellix license**安装成功，您将看到类似如下输出：
    
    <p align="center">
    <a href="images/foretellix lic active.png" target="_blank">
    <img src="images/foretellix lic active.png", width="600">
    </a>
    </p>


## Troubleshooting

如果通过上述步骤查看的license status不是`active`, 可进行如下检查：

1. 查看log记录，看是否存在`error`。

    ```py
    gedit /var/log/foretellix/foretellix_lic_server.log
    gedit /var/log/foretellix/foretify_lic_server.log
    ```
    如果log中没有Error, 则表明安装成功。
    如有error，可根据提示进行如下几个方面的检查：

      * 检查license文件中需要被替换的部分是否正确
      * 确认5280和27001两个端口没有被其他进程占用
        > `netstat -tnlp`可用于查看端口情况

2. 问题排查并修复后，可重复上述第5步骤再次运行许可证安装脚本
   
3. 如果仍未解决问题，尝试restart两个license的服务：
   
    ```bash
    sudo systemctl restart foretellix_lic_server.service
    sudo systemctl restart foretify_lic_server.service
    ```
   
4. 如果上述步骤均未能解决问题，不要犹豫，**请联系Foretellix工程师进行协助调查**！

# 仿真器配置

Foretify可无缝集成各种主流的仿真器软件进行集成，包括 VTD，Carmaker, Carla, 51Sim, Sumo等。
在正式使用之前，需要进行必要的环境配置，确保Foretify可以连接到用户机上指定的仿真软件。**本指南以VTD为例进行说明**。

**假设：**

- VTD安装路径为`~/VTD.2023.1`
- VTD的license文件位于：`~/VTD.2023.1/bin/license.dat`


**设置变量**

打开`/opt/foretellix/ftx/env/basic/exe_platforms/vtd_ssp/scripts/vtd.rc`文件：

```py
cd /opt/foretellix/ftx/env/basic/exe_platforms/vtd_ssp/scripts/
gedit vtd.rc
```

结合用户VTD环境对以下变量进行更新：
``` py
export FTX_VTD_HOME=~/VIRES/2023.1
export FTX_VTD_PROJ=SampleProject
export LM_LICENSE_FILE=~/VTD.2023.1/bin/license.dat
```

再次打开 `/ftx/foretellix/ftx.rc`，添加如下语句，确保vtd.rc文件有被source到。

``` py
source $FTX/env/basic/exe_platforms/vtd_ssp/scripts/vtd.rc
```

**注：**上述语句引用了`$FTX` 环境变量，因此需注意该语句出现在`export FTX` 语句之后。

**验证测试**

为验证VTD是否配置成功，请执行以下代码，进行一个简单的测试：

``` py
cd $FTX/smoke
```
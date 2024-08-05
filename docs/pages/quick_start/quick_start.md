# 快速开始

!!! info "Quick Start"
    
    本节内容旨在帮助用户熟悉foretify环境以及基本的操作流程。主要涉及三方面内容：

    - 用户资产交付情况（抽象场景、测试定义等）
    - 通过Foretify Developer进行场景加载及运行
    - 通过Foretify Manager进行数据统计分析

## 资产交付及变量配置

**1. 资产交付**

根据当前项目定义的资产包括如下内容，部署在`$HOME/CHERY_WS`路径下。
> *注：截至2024/08/05,资产仍在测试优化中。*

```bash title="资产文件结构"
~/CHERY_WS
├── config      # OSC2.0中实现算法启动的功能定义
├── maps        # opendrive 地图（包含`xodr`和同名`opt.osgb`两种文件）
├── scenarios   # OSC2.0 抽象场景
├── ssp_dsp     # DSP相关配置文件
├── test_suites # 测试组定义文件
└── tests       # 测试用例文件

```

**2. 环境变量配置**

为方便起见，请设置`CHERY_WS`的环境变量指向该路径。
>注：该环境变量在交付的资产中有所引用。

```bash title="打开~/.bashrc"
gedit ~/.bashrc
```

```bash title="添加CHERY_WS环境变量"
export CHERY_WS=~/CHERY_WS
```

保存后开启新Terminal确保变量生效。

执行如下命令可以直接通过VScode进入资产目录：

```bash
code $CHERY_WS
```

??? tip "进入资产目录"
    
    <figure markdown="span">
    ![chery_asset](images/chery_asset.png){ width="600" }
    <figcaption> vscode 打开资产目录</figcaption>
    </figure>    


## 测试启动流程

集成后，Foretify作为测试启动的主入口，在每次测试过程中会负责实现VTD、Simulink以及被测算法的开启和关闭。
但在运行Foretify之前，需通过脚本`run_sl_mdl.sh`启动matlab。

如下所示为启动测试(STEP 1 & 2)以及上传测试数据（STEP 3）的流程图：

<figure markdown="span">
![chery_asset](images/quick_start_user_flow.png){ width="600" }
<figcaption> 测试启动流程 </figcaption>
</figure>   

接下来，我们按照该流程启动测试。

## 快速开始：启动测试

### Step 1. 启动Matlab

```bash title="执行run_sl_mdl.sh"
cd ~/H-NOP/Lon
./run_sl_mdl.sh
```
> 稍等片刻，启动成功后，会出现matlab和simulink两个窗口。请注意matlab**当前的工作目录**应为`~/H-NOP/Lon`，如果为其他路径，请手动更正。

<figure markdown="span">
![chery_asset](images/run_sl_mdl_start_matlab.png){ width="600" }
<figcaption> Step1. 启动Matlab </figcaption>
</figure> 



### Step 2. 启动foretify运行测试

**1. 进入`$CHERY_WS`资产目录**

以下两种方式均可：

=== "VSCode"

    ```bash
    code $CHERY_WS
    ```

    VSCode中支持内置终端，可通过VSCode菜单栏中的`Terminal`->`New Terminal`打开一个内置终端：

    <figure markdown="span">
      ![chery_vscode](images/chery_vscode.png){ width="800" }
      <figcaption>VScode进入资产目录</figcaption>
    </figure>

=== "系统Terminal"

    ```bash
    cd $CHERY_WS
    ```

    <figure markdown="span">
    ![chery_terminal](images/chery_terminal.png){ width="600" }
    <figcaption>通过系统Terminal进入资产目录</figcaption>
    </figure>


**2. 启动foretify加载一个测试用例**

??? info "测试用例文件"
    所谓的测试（test）或测试用例是一个OSC2.0文件（.OSC），是foretify可直接加载并运行的最顶层文件，主要包含：

    - 抽象场景的导入及调用
    - OpenDRIVE地图配置
    - 仿真器配置
    - 被测对象配置
    - 观测指标定义（覆盖项、评价指标、KPI等）
    
    <figure markdown="span">
    ![test_file_structure](images/test_file_structure.png){ width="600" }
    <figcaption>典型测试用例文件的组成</figcaption>
    </figure>    


测试定义文件位于`$CHERY_WS/tests`下，我们在terminal用通过`foretify --gui --load <test.osc>`指令用foretify develop加载一项测试用例文件`t_Chery_lead_vehicle_and_slow.osc`：

在VScode的内置Terminal中输入如下指令启动foretify并加载测试用例文件：

```bash title="启动foretify加载测试文件"
cd tests
foretify --gui --load t_Chery_lead_vehicle_and_slow.osc
```

<figure markdown="span">
    ![chery_vscode_foretify_load](images/chery_vscode_foretify_load.png){ width="800" }
    <figcaption>启动foretify加载测试</figcaption>
</figure>
> 此处以VScode内置Terminal为例。

回车后稍等片刻，您将看到浏览器自动打开foretify developer窗口并加载测试文件：

<figure markdown="span">
    ![chery_foretify_loading](images/chery_foretify_loading.png){ width="800" }
    <figcaption>foretify加载测试</figcaption>
</figure>

等待加载完成。注意foretify developer界面上方的status变成了绿色的`loading completed`.


**3. 启动测试**

点击界面右上角的"Run Test"启动测试。

<figure markdown="span">
    ![button_Run_Test](images/button_Run_Test.png){ width="500" }
</figure>

你会看到VTD窗口自动打开并进行仿真。
> 注：foretify在该测试运行前已自动开启了被测算法以及所需的simulink模型。

片刻后，VTD窗口将自动关闭，本次测试完成。注意Status可能会显示为<span style="color: green;">Completed</span>, <span style="color: green;">incomplete scenario</span>, 或<span style="color: green;">SUT error</span>或<span style="color: green;">Test error</span>。
> 注：foretify在该测试运行结束后会自动停止被测算法以及所需的simulink模型。

!!! info "关于测试运行后的status"
    Status表示当前测试运行的状态，如果测试通过，则显示为Completed. 如果测试失败，根据不同的具体原因可显示为incomplete scenario, SUT error或Test error等。具体含义会在正式的workshop培训中进行讲解。




**4. 测试调试**

测试完成后，您可以通过Foretify Developer UI上的各项功能进行测试回放、log查询等各种调试操作。在此不做展开叙述。



=== "系统Terminal"

    ```bash
    cd $CHERY_WS
    ```

    <figure markdown="span">
    ![chery_terminal](images/chery_terminal.png){ width="600" }
    <figcaption>通过系统Terminal进入资产目录</figcaption>
    </figure>




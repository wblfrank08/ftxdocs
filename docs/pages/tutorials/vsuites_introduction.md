---
chapnum: 1
---

# 介绍Foretellix验证和验证环境

为了验证高级驾驶辅助系统（ADAS）或自动驾驶（AD）功能的安全性，你需要观察被测试系统（SUT）在各种情况或*场景*下的行为。

Foretellix验证和验证（V&V）环境与V-Suites库一起使用，帮助您验证常见的ADAS和AD功能以及标准，包括：

- 速度辅助系统（SAS）
- 自动紧急制动（AEB）
- 车道支持系统（LSS）
- 4级高速公路
- 欧洲新车评价计划（EuroNCAP）

V-Suites包含所需组件来测试ADAS或AD功能，包括场景、测试、地图、测试套件定义（CSV文件）和验证计划（VPlans）。

## Foretellix V&V自动化流程和引擎

Foretellix V&V环境的自动化流程和引擎实施了一个基于V-Suites组件的[安全驱动验证（SDV）](../sdv_terms/sdv_terminology.md)过程，产生大量基于测试的测试。SDV的四大支柱是：

- **抽象场景：** V-Suites场景是抽象的、高层次的描述，定义了使场景具有挑战性或有趣的规则。这些场景使用OSC2进行定义，即OpenSCENARIO2.0 ASAM标准。

- **自动化测试创建：** V-Suites测试是参数化的，意味着对于每个测试，您可以限制场景的关键属性，如车辆速度或执行机动的时间。

- **受约束的随机生成：** 对于每次测试运行，Foretify的约束求解器使用您在各种组合中指定的约束，从而以您可能没有预见到的方式测试SUT。

- **聚合度量审查：** Foretify Manager汇总了在执行测试套件过程中收集的度量数据，并将它们投射到VPlans上 - 这是机器可读的验证计划，可帮助您分析度量数据并运行数据。通过Foretify Manager，您可以分析验证进度并基于客观自动生成的度量数据做出决策。

Foretellix自动流程的三个阶段为：

- 设计和调试
- 测试套件执行
- 结果分析


### 设计和调试

如图1所示，**Foretify**是一个引擎，可帮助您设计和调试单个场景和测试。您可以直接使用V-Suites的场景和测试，也可以根据项目需求进行修改。此外，您还可以创建自己的场景和测试。

<figure>
    <img src="../shared/images/design_debug.png">
    <figcaption>图1：设计和调试</figcaption>
</figure>

Foretify具有各种视图，可帮助您设计场景和测试，以及调试失败的运行。例如，可视化工具让您可以查看在选定地图上测试的计划或实际执行情况。基于时间的视图（如可视化工具）与通用时间线相连接，因此您可以在时间轴上将这些视图同步移动，向前或向后。

### 测试套件执行

**Foretify**和**Foretify Manager**在测试套件执行中都扮演着重要角色。如图2所示，您可以通过向Foretify Manager提交以CSV格式定义的测试套件及各种环境设置来启动测试套件。Foretify Manager调用Dispatcher将作业提交至Foretify，在多个节点上同时执行。

<figure>
    <img src="../shared/images/test_suite_execution.png">
    <figcaption>图2：测试套件执行</figcaption>
</figure>

### 结果分析

如图3所示，**Foretify Manager** 在帮助您分析测试套件执行的汇总指标方面发挥着关键作用。如果您已经将需求管理工具集成到 Foretify Manager 中，例如 MagicDraw 或 IBM DOORS，您可以将 VPlan 中的指标与特定项目需求进行关联。

<figure>
    <img src="../shared/images/results_analysis.png">
    <figcaption>图3：结果分析</figcaption>
</figure>

Foretify Manager 还是故障分析的中心，帮助您识别 SUT 的错误以及场景或模拟器的问题。相同类型的问题被分组在一起，这样您可以快速识别测试套件中的常见问题。

## V&V用户任务流程

在您可以使用 Foretellix 类库（例如 V-Suites）执行测试之前，您的团队必须集成和配置 Foretify 和 SUT。这些任务在 [V-Suites 集成任务流程](../adas_conf/task_flow.md)中进行了描述。

但是，在 SUT 和执行平台集成之前，您可以使用 Foretify 的内置行为 SUT 和 Carla 和 SUMO 模拟器运行测试套件。

本 *入门指南* 的接下来几页演示了使用内置行为 SUT 进行 Interceptor 测试的 V-Suites 用户任务流程。这个测试是基础车辆演练测试之一。

1. [查看一组测试](../adas_user/review_tests.md) 以及相关的测试套件定义（CSV 文件）。

2. [执行测试套件](../adas_user/run_test_suites.md)。

3. 在 Foretify Manager 中 [创建工作区](../adas_user/create_workspace.md)。

4. [分析测试套件结果](../adas_user/triage.md)。

5. [分析覆盖率和性能指标](../adas_user/analyze_metrics.md)。

!!! note "注意事项"
    - Foretify提供了一整套验证和验证的解决方案和流程，包括验证进展和覆盖率的测量，这些测量展示了对验证计划的覆盖范围和进展情况。该工具本身无法自动保证达到全面安全性和可靠性保证所需的100%覆盖范围，除非这些保证标准在验证计划中指定。
    - Foretellix软件使用开源软件。有关许可信息，请参阅[第三方工具许可](../ftf_user/ftfuser_tool_license.md)。

> 本文由ChatGPT翻译，如有任何遗漏，请[**反馈**](https://github.com/linyuxuanlin/Wiki_MkDocs/issues/new)。
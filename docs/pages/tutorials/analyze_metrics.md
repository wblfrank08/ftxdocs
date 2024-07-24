---
chapnum: 6
---

# 分析指标
在测试执行过程中收集的指标用于回答两个关键问题：

- 系统测试得有多好
- 系统在这些测试中表现得有多好

第一个问题由 *覆盖等级* 回答，即测试过程中遇到的所有情况的多维表示。

第二个问题由关键绩效指标的收集回答。

这两种类型的指标以 VPlan 框架的形式在 Foretify Manager 中显示。VPlan 是一个分层的机器可读文件（JSON 格式），描述您想要验证的系统行为。

## 分析覆盖率

Workspace 窗口的 **VPlan** 选项卡显示了在运行过程中收集的指标数据进行了标注的 VPlan。在左上角显示的整体覆盖等级是基于指标模型中所有项目的个别等级计算得出的。每个部分和子部分都有一个显示为百分比和刻度的等级。

使用红色、黄色和绿色来表示具有低、中和高等级的实体。

<figure>
    <img src="images/adasusr_analyze_coverage1.png">
    <figcaption>图1：带注释的 VPlan</figcaption>
</figure>

当您在 VPlan 中选择一个指标项时，右侧窗格中会显示该项可能的值列表。如果值的范围很大，则将值划分为范围或 *存储桶*。显示每个存储桶的命中次数，颜色表示低、中和高数量。

任何没有命中次数的存储桶被视为 *覆盖漏洞*。您应通过约束测试参数以填补这些存储桶或将其从覆盖定义中移除来消除覆盖漏洞。

Figure 2 展示了场景 **sut.lead_vehicle_and_stop()** 中 **lead_vehicle_speed_at_end** 参数的几个覆盖空缺。

请注意，覆盖项旁边附有页面图标以示区分。

<figure>
  <img src="images/adasusr_analyze_coverage2.png">
  <figcaption>图1：distance_at_end参数的覆盖空缺</figcaption>
</figure>

## 查看关键绩效指标

预定义的关键绩效指标（KPI）已被收集并分类，可从 VPlan 访问的 **top.info** 结构中获取。**top.info.main_issue** 也显示在运行表的问题树中：

- **top.info.model** 包含 SUT 的名称和版本等信息。
- **top.info.run** 包含每次运行使用的地图等信息。
- **top.info.main_issue** 让您可以按类别、严重程度、类型和详情查看测试套件中的各种问题。

请注意，KPI 旁边附有米字符号以示区分。

![](images/adasusr_topinfo.png)

*图3：VPlan选项卡显示按类别划分的问题数量*

特定于场景的 KPI 被收集在 **top.adas.end** 下或特定场景的事件下。图4 展示了为 **sut.lead_vehicle_changing_speed()** 定义的两个 KPI：

- **lead_vehicle_max_speed_record**
- **lead_vehicle_min_acceleration_record**

<figure>
  <img src="images/adasusr_kpi.png">
  <figcaption>图4：sut.lead_vehicle_changing_speed() 的 KPI</figcaption>
</figure>

有关分析指标的更多信息，请参阅 Foretify Manager 的 [Analyzing Metrics](../fman_user/fmanuser_analyze_metrics.md)。

> 本文由ChatGPT翻译，如有任何遗漏，请[**反馈**](https://github.com/linyuxuanlin/Wiki_MkDocs/issues/new)。
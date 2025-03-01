# SUCI

<p align="center">
  <img src="../../../icons.svg" width="128" height="128" alt="SUCI Logo">
</p>

[![en](https://img.shields.io/badge/lang-English-red.svg)](../../../README.md)
[![cn](https://img.shields.io/badge/语言-中文-yellow.svg)](README.md)
[![cn](https://img.shields.io/badge/come-Español-purple.svg)](../sp/README.md)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.0.1-brightgreen.svg)](https://github.com/SepineTam/suci/releases)

上海大学教务选课助手，帮助学生在选课系统中自动搜索和选择课程。

## 💡 简介

SUCI 是一个专为上海大学学生设计的 Chrome 扩展，能够帮助你在选课系统中自动监控、搜索和选择课程。在选课高峰期或抢热门课程时，SUCI 可以替你持续刷新监控，一旦有名额立即自动选课，大大提高选课成功率。

## ✨ 特性

- 🔍 **智能搜索** - 自动搜索指定课程号和教师号组合
- 🖱️ **一键选课** - 自动点击选课按钮并确认
- 🔄 **持续监控** - 每10秒自动尝试选课一次，适合抢热门课程
- 📊 **实时日志** - 直观显示选课状态和操作结果
- 💾 **本地存储** - 自动保存课程列表和配置，下次使用无需重新输入
- 🔒 **安全可靠** - 仅在选课系统网页上运行，不收集任何个人数据

## 📥 安装

### 方法一：开发者模式安装 (推荐)

1. 克隆或下载本仓库
   ```bash
   git clone https://github.com/SepineTam/suci.git
   ```
2. 打开 Chrome 浏览器，进入 `chrome://extensions/`
3. 打开右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择已下载的 SUCI 文件夹

### 方法二：安装 CRX 文件

1. 从 [Releases](https://github.com/SepineTam/suci/releases) 页面下载最新的 `suci.crx` 文件
2. 打开 Chrome 扩展页面 `chrome://extensions/`
3. 开启开发者模式
4. 将下载的 crx 文件拖拽到扩展页面中安装

## 🚀 使用方法

1. 安装扩展后，在 Chrome 浏览器右上角会出现 SUCI 图标
2. 登录[上海大学选课系统](https://jwxk.shu.edu.cn/)
3. 点击扩展图标，打开选课助手面板
4. 输入要选的课程信息，每行一个，格式为 `课程号:教师号`
   
   例如：
   ```
   3100RH62:1000
   04136076:1000
   ```
5. 设置选项：
   - **自动确认选课**：勾选后会自动点击选课确认按钮
   - **持续监控**：勾选后会每10秒自动重试选课，适合抢满员课程
6. 点击"开始选课"按钮启动自动选课
7. 在状态日志区域可以看到选课进度和结果
8. 如需停止，点击"停止选课"按钮

## 📝 功能演示

![SUCI 演示](https://via.placeholder.com/640x360?text=SUCI+功能演示) <!-- 可以替换为实际的截图或 GIF -->

## 🔧 常见问题

<details>
<summary>为什么我的课程搜不到？</summary>
<p>请确认课程号和教师号是否正确，也可能是该课程不在当前选课阶段。</p>
</details>

<details>
<summary>扩展显示选课成功但实际没选上？</summary>
<p>可能是课程已满或与已选课程时间冲突，请查看选课系统给出的具体提示。</p>
</details>

<details>
<summary>持续监控模式会影响电脑性能吗？</summary>
<p>持续监控只会每10秒进行一次操作，对性能影响很小。在不使用时可以点击停止按钮关闭。</p>
</details>

## 🛠️ 开发

如果你想为 SUCI 贡献代码，可以按照以下步骤：

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## ⚠️ 免责声明

本工具仅用于辅助选课，提高选课效率，不得用于影响选课公平或违反学校规定的行为。使用本工具产生的一切后果由使用者自行承担，与开发者无关。本工具不保证能成功选到所有课程，选课结果以学校教务系统最终显示为准。

本项目遵循 MIT 开源协议，使用者可自由使用、修改和分发，但需自行承担使用风险。

## 📜 许可

这个项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解更多详情。

---

<p align="center">
  Made by <a href="https://github.com/SepineTam">SepineTam</a> Power by <a href="https://claude.ai/">Claude</a> ❤️
</p>

# JTools-OCalc

<div align="center">

![JTools-OCalc Logo](https://img.shields.io/badge/JTools--OCalc-v1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-GPL%20v3-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**一个轻量级的离线工具集合，提供常用的开发工具和转换器**

[快速开始](#快速开始) • [功能特性](#功能特性)

</div>

## 📋 目录

- [关于项目](#关于项目)
- [功能特性](#功能特性)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [许可证](#许可证)
- [联系方式](#联系方式)

## 🌟 关于项目

JTools-OCalc 是一个纯前端的离线工具集合，专为开发者和日常用户设计。它提供了多种实用的转换工具，无需联网即可使用，保护您的数据隐私。

### 设计理念

- 🌐 **离线优先**: 无需网络连接，随时随地使用
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🎨 **现代化界面**: 简洁优雅的UI设计，专注核心功能
- ⚡ **高性能**: 纯前端实现，响应速度快
- 🔒 **数据安全**: 所有数据处理均在本地完成

## ✨ 功能特性

### 🧮 进制转换器
- 支持十进制、十六进制、二进制之间的相互转换
- 实时转换，输入即显示结果
- 支持大数值转换（最大 2^53-1）

### 🔤 Hex/ASCII转换器
- 十六进制与ASCII码之间的双向转换
- 支持批量字符转换
- 实时预览转换结果

### 💡 光模块计算器
- **DDM参数转换**: 温度、电压、偏置电流、光功率
- **BER/SNR转换**: 误码率与信噪比转换
- **光功率单位转换**: mW与dBm相互转换
- **可靠性单位转换**: FIT与PPM相互转换

### 🔗 NVIDIA LinkX选型指南
- **设备兼容查询**: 支持Quantum/Spectrum交换机、ConnectX SuperNIC、BlueField DPU
- **LinkX模块匹配**: 自动匹配原厂光模块与线缆型号
- **详细参数查看**: 查看模块规格、速率、接口类型等详细参数

### 📡 AppSel编码计算器
- **速率支持**: 400G/800G/1.6T端口AppSel编码计算
- **端口选择**: 自动计算端口AppSel编码值
- **通道映射**: 显示通道与物理通道的映射关系

## 🚀 快速开始

### 安装使用

1. **克隆仓库**
   ```bash
   git clone https://gitee.com/jason-solo/jtools-ocalc.git
   cd jtools-ocalc
   ```

2. **直接使用（推荐）**
   - 直接打开 `home/index.html` 文件即可开始使用
   - 无需任何安装或配置

3. **使用本地服务器（可选）**
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

## 📁 项目结构

```
jtools-ocalc/
├── home/                  # 主页
├── converter/             # 进制转换器
├── hexascii/              # Hex/ASCII转换器
├── optical/               # 光模块计算器
├── nvidia-linkx-selector/ # NVIDIA LinkX选型指南
├── appsel-code-calculator/ # AppSel编码计算器
├── assets/                # 静态资源
├── README.md              # 项目说明文档
├── CHANGELOG.md           # 版本更新记录
└── LICENSE                # 许可证文件
```

## 📄 许可证

本项目采用 [GNU GPL v3.0](LICENSE) 许可证。

## 📞 联系方式

- **项目主页**: [https://gitee.com/jason-solo/jtools-ocalc](https://gitee.com/jason-solo/jtools-ocalc)
- **问题反馈**: [Gitee Issues](https://gitee.com/jason-solo/jtools-ocalc/issues)
- **邮箱**: jason-solo@foxmail.com

---

<div align="center">

Copyright © 2024 [Jason](https://gitee.com/jason-solo)

</div>

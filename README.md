# SUCI

<p align="center">
  <img src="icons.svg" width="128" height="128" alt="SUCI Logo">
</p>

[![en](https://img.shields.io/badge/lang-English-red.svg)](README.md)
[![cn](https://img.shields.io/badge/语言-中文-yellow.svg)](docs/README/cn/README.md)
[![cn](https://img.shields.io/badge/come-Español-purple.svg)](docs/README/sp/README.md)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.0.1-brightgreen.svg)](https://github.com/SepineTam/suci/releases)

Shanghai University Course Registration Assistant, helping students automatically search and select courses in the registration system.

## 💡 Introduction

SUCI is a Chrome extension designed specifically for Shanghai University students, helping you automatically monitor, search, and select courses in the registration system. During peak registration periods or when competing for popular courses, SUCI can continuously refresh and monitor for you, automatically selecting courses as soon as spots become available, greatly improving your chances of successful registration.

## ✨ Features

- 🔍 **Smart Search** - Automatically search for specified course and teacher ID combinations
- 🖱️ **One-Click Registration** - Automatically click the registration button and confirm
- 🔄 **Continuous Monitoring** - Automatically attempts registration every 10 seconds, perfect for popular courses
- 📊 **Real-time Logs** - Clearly displays registration status and operation results
- 💾 **Local Storage** - Automatically saves course lists and configurations for future use
- 🔒 **Safe and Reliable** - Only runs on the course registration website, collects no personal data

## 📥 Installation

### Method 1: Developer Mode Installation (Recommended)

1. Clone or download this repository
   ```bash
   git clone https://github.com/SepineTam/suci.git
   ```
2. Open Chrome browser and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the downloaded SUCI folder

### Method 2: Install CRX File

1. Download the latest `suci.crx` file from the [Releases](https://github.com/SepineTam/suci/releases) page
2. Open Chrome extensions page `chrome://extensions/`
3. Enable Developer mode
4. Drag and drop the downloaded crx file into the extensions page to install

## 🚀 How to Use

1. After installation, the SUCI icon will appear in the top right of Chrome
2. Log in to the [Shanghai University Course Registration System](https://jwxk.shu.edu.cn/)
3. Click the extension icon to open the assistant panel
4. Enter course information, one per line, in the format `CourseID:TeacherID`
   For example:
   ```
   3100RH62:1000
   04136076:1000
   ```
5. Set options:
   - **Auto-confirm Registration**: When checked, automatically clicks the confirmation button
   - **Continuous Monitoring**: When checked, automatically retries every 10 seconds, ideal for full courses
6. Click "Start Registration" to begin automatic course registration
7. View progress and results in the status log area
8. Click "Stop Registration" to end the process

## 📝 Feature Demo

![SUCI Demo](https://via.placeholder.com/640x360?text=SUCI+Feature+Demo) <!-- Replace with actual screenshots or GIF -->

## 🔧 FAQ

<details>
<summary>Why can't I find my course?</summary>
<p>Please verify the course and teacher IDs are correct. The course might also not be available in the current registration phase.</p>
</details>

<details>
<summary>The extension shows success but I'm not registered?</summary>
<p>The course might be full or conflict with your existing schedule. Please check the specific message in the registration system.</p>
</details>

<details>
<summary>Will continuous monitoring affect my computer's performance?</summary>
<p>Continuous monitoring only performs an operation every 10 seconds, having minimal impact on performance. You can click the stop button when not in use.</p>
</details>

## 🛠️ Development

If you want to contribute to SUCI, follow these steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Disclaimer

This tool is intended only to assist with course registration and improve efficiency. It should not be used to affect registration fairness or violate school regulations. Users assume all responsibility for consequences arising from the use of this tool, and the developers are not liable. The tool does not guarantee successful registration for all courses; final registration results are subject to the school's academic system.

This project follows the MIT open source license. Users are free to use, modify, and distribute but must assume all risks associated with its use.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made by <a href="https://github.com/SepineTam">SepineTam</a> Powered by <a href="https://claude.ai/">Claude</a> ❤️
</p>
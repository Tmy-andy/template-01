# 💎 Luxuria - Premium Website Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🌐 Language / Ngôn ngữ

- [🇬🇧 English](#-english)
- [🇻🇳 Tiếng Việt](#-tiếng-việt)

---

# 🇬🇧 English

A luxurious website template featuring dark purple/deep blue interface, modern design, and full functionality.

## 📸 Preview

Website interface with deep purple tone (#1a1a2e) combined with blue (#0f3460), featuring a luxurious and professional style.

## 📁 Folder Structure

```
luxuria/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main CSS file
├── js/
│   └── main.js         # Main JavaScript file
└── README.md           # Documentation
```

## ✨ Features

### 🎨 Interface
- ✅ Luxurious design with dark purple/deep blue tones
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Smooth animations and transitions
- ✅ CSS Variables for easy color customization
- ✅ Font Awesome icons

### 🔗 Navigation
- ✅ Fixed navbar with scroll effect
- ✅ Hamburger menu for mobile
- ✅ Smooth scroll between sections
- ✅ Breadcrumb navigation
- ✅ Back to top button

### 📋 Modal Popups (15+ modals)
- ✅ Login Modal (with Social Login)
- ✅ Register Modal (with Password Strength Indicator)
- ✅ Forgot Password Modal
- ✅ Terms & Privacy Modal
- ✅ Feature Detail Modal
- ✅ Service Detail Modal
- ✅ Video Modal
- ✅ Order Service Modal
- ✅ Quote Request Modal
- ✅ Schedule Call Modal
- ✅ Appointment Modal
- ✅ Live Chat Modal
- ✅ Project Detail Modal
- ✅ Plan Selection Modal
- ✅ Success/Confirm Modal

### ⚡ JavaScript Functions
- ✅ Form Validation with error messages
- ✅ Toast Notifications (Success, Error, Warning, Info)
- ✅ Counter Animation for Statistics
- ✅ Auto Testimonial Slider
- ✅ Portfolio Filter by category
- ✅ FAQ Accordion
- ✅ Pricing Toggle (Monthly/Yearly with discount)
- ✅ Live Chat Simulation with Bot Response
- ✅ Password Show/Hide Toggle
- ✅ Character Counter for textarea
- ✅ Like/Unlike for Portfolio items

### 📄 Pages

| Page | Description |
|------|-------------|
| **index.html** | Homepage with Hero, Features, Statistics, Services, Testimonials, Newsletter |
| **about.html** | Company introduction, Values, Team Members, Timeline |
| **services.html** | Service details, Pricing Plans, FAQ |
| **portfolio.html** | Project list with Filter, Clients |
| **contact.html** | Contact form, Map, Quick Contact Options, FAQ |

## 🚀 How to Use

### 1. Clone or Download
```bash
# Clone repository
git clone https://github.com/Tmy-andy/template-01.git

# Or download and extract
```

### 2. Open in Browser
```bash
# Open index.html file in browser
# Or use Live Server extension in VS Code
```

### 3. Customize
Edit CSS Variables in `css/style.css` to change colors:

```css
:root {
    /* Primary Colors */
    --primary-dark: #1a1a2e;
    --primary: #16213e;
    --primary-light: #0f3460;
    --accent: #e94560;
    
    /* Change these values as desired */
}
```

## 🎯 Components

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-text">Text</button>
<button class="btn btn-large">Large</button>
<button class="btn btn-block">Full Width</button>
```

### Cards
```html
<div class="feature-card">...</div>
<div class="service-card">...</div>
<div class="team-card">...</div>
<div class="pricing-card">...</div>
<div class="portfolio-item">...</div>
```

### Modals
```javascript
// Open modal
Modals.open('loginModal');

// Close modal
Modals.close('loginModal');

// Show success
Modals.showSuccess('Title', 'Content');
```

### Toast Notifications
```javascript
Toast.show('success', 'Title', 'Content');
Toast.show('error', 'Title', 'Content');
Toast.show('warning', 'Title', 'Content');
Toast.show('info', 'Title', 'Content');
```

## 📱 Responsive Breakpoints

| Breakpoint | Device |
|------------|--------|
| > 1024px | Desktop |
| 768px - 1024px | Tablet |
| 480px - 768px | Mobile |
| < 480px | Small Mobile |

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, Animations, Variables
- **JavaScript (ES6+)** - Modules, Classes, Arrow Functions
- **Font Awesome 6** - Icons

## 📝 Notes

- Website uses pure HTML/CSS/JS, no framework required
- All forms have validation
- No dependencies installation required
- Compatible with modern browsers (Chrome, Firefox, Safari, Edge)

## 🔧 Advanced Customization

### Add New Page
1. Copy an existing HTML file
2. Change `class="active"` in navbar
3. Update content

### Add New Modal
1. Add HTML structure for modal
2. Add event listener in `Modals.bindEvents()`
3. Handle logic in JavaScript

### Add New Form
1. Create HTML form with id
2. Add handler in `Forms.init()`
3. Handle validation and submit

---

# 🇻🇳 Tiếng Việt

Website template sang trọng với giao diện tím than/xanh dương đậm, thiết kế hiện đại và đầy đủ chức năng.

## 📸 Xem trước

Giao diện website với tone màu tím than đậm (#1a1a2e) kết hợp xanh dương (#0f3460), mang phong cách sang trọng và chuyên nghiệp.

## 📁 Cấu trúc thư mục

```
luxuria/
├── index.html          # Trang chủ
├── about.html          # Trang giới thiệu
├── services.html       # Trang dịch vụ
├── portfolio.html      # Trang portfolio
├── contact.html        # Trang liên hệ
├── css/
│   └── style.css       # File CSS chính
├── js/
│   └── main.js         # File JavaScript chính
└── README.md           # File hướng dẫn
```

## ✨ Tính năng

### 🎨 Giao diện
- ✅ Thiết kế sang trọng với tone màu tím than/xanh dương đậm
- ✅ Responsive hoàn toàn (Desktop, Tablet, Mobile)
- ✅ Animations và transitions mượt mà
- ✅ CSS Variables để dễ dàng tùy chỉnh màu sắc
- ✅ Font Awesome icons

### 🔗 Điều hướng
- ✅ Navbar cố định với hiệu ứng khi scroll
- ✅ Menu hamburger cho mobile
- ✅ Smooth scroll giữa các section
- ✅ Breadcrumb navigation
- ✅ Nút quay lại đầu trang

### 📋 Modal Popups (15+ modals)
- ✅ Login Modal (với Social Login)
- ✅ Register Modal (với Password Strength Indicator)
- ✅ Forgot Password Modal
- ✅ Terms & Privacy Modal
- ✅ Feature Detail Modal
- ✅ Service Detail Modal
- ✅ Video Modal
- ✅ Order Service Modal
- ✅ Quote Request Modal
- ✅ Schedule Call Modal
- ✅ Appointment Modal
- ✅ Live Chat Modal
- ✅ Project Detail Modal
- ✅ Plan Selection Modal
- ✅ Success/Confirm Modal

### ⚡ Chức năng JavaScript
- ✅ Form Validation với thông báo lỗi
- ✅ Toast Notifications (Success, Error, Warning, Info)
- ✅ Counter Animation cho Statistics
- ✅ Testimonial Slider tự động
- ✅ Portfolio Filter theo category
- ✅ FAQ Accordion
- ✅ Pricing Toggle (Monthly/Yearly với discount)
- ✅ Live Chat Simulation với Bot Response
- ✅ Password Show/Hide Toggle
- ✅ Character Counter cho textarea
- ✅ Like/Unlike cho Portfolio items

### 📄 Các trang

| Trang | Mô tả |
|-------|-------|
| **index.html** | Trang chủ với Hero, Features, Statistics, Services, Testimonials, Newsletter |
| **about.html** | Giới thiệu công ty, Values, Team Members, Timeline |
| **services.html** | Chi tiết dịch vụ, Pricing Plans, FAQ |
| **portfolio.html** | Danh sách dự án với Filter, Clients |
| **contact.html** | Form liên hệ, Map, Quick Contact Options, FAQ |

## 🚀 Cách sử dụng

### 1. Clone hoặc Download
```bash
# Clone repository
git clone https://github.com/Tmy-andy/template-01.git

# Hoặc download và giải nén
```

### 2. Mở trong trình duyệt
```bash
# Mở file index.html trong trình duyệt
# Hoặc sử dụng Live Server extension trong VS Code
```

### 3. Tùy chỉnh
Chỉnh sửa CSS Variables trong `css/style.css` để thay đổi màu sắc:

```css
:root {
    /* Primary Colors */
    --primary-dark: #1a1a2e;
    --primary: #16213e;
    --primary-light: #0f3460;
    --accent: #e94560;
    
    /* Thay đổi các giá trị này theo ý muốn */
}
```

## 🎯 Các Components

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-text">Text</button>
<button class="btn btn-large">Large</button>
<button class="btn btn-block">Full Width</button>
```

### Cards
```html
<div class="feature-card">...</div>
<div class="service-card">...</div>
<div class="team-card">...</div>
<div class="pricing-card">...</div>
<div class="portfolio-item">...</div>
```

### Modals
```javascript
// Mở modal
Modals.open('loginModal');

// Đóng modal
Modals.close('loginModal');

// Hiển thị success
Modals.showSuccess('Tiêu đề', 'Nội dung');
```

### Toast Notifications
```javascript
Toast.show('success', 'Tiêu đề', 'Nội dung');
Toast.show('error', 'Tiêu đề', 'Nội dung');
Toast.show('warning', 'Tiêu đề', 'Nội dung');
Toast.show('info', 'Tiêu đề', 'Nội dung');
```

## 📱 Responsive Breakpoints

| Breakpoint | Thiết bị |
|------------|----------|
| > 1024px | Desktop |
| 768px - 1024px | Tablet |
| 480px - 768px | Mobile |
| < 480px | Small Mobile |

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Flexbox, Grid, Animations, Variables
- **JavaScript (ES6+)** - Modules, Classes, Arrow Functions
- **Font Awesome 6** - Icons

## 📝 Ghi chú

- Website sử dụng HTML/CSS/JS thuần, không cần framework
- Tất cả các form đều có validation
- Không cần cài đặt bất kỳ dependencies nào
- Tương thích với các trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)

## 🔧 Tùy chỉnh nâng cao

### Thêm trang mới
1. Copy một file HTML hiện có
2. Thay đổi `class="active"` trong navbar
3. Cập nhật nội dung

### Thêm Modal mới
1. Thêm HTML structure cho modal
2. Thêm event listener trong `Modals.bindEvents()`
3. Xử lý logic trong JavaScript

### Thêm Form mới
1. Tạo form HTML với id
2. Thêm handler trong `Forms.init()`
3. Xử lý validation và submit

---

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 👨‍💻 Author

Created with ❤️ by [Tmy-andy](https://github.com/Tmy-andy)

---

⭐ **If you find this template useful, please give it a star!**

⭐ **Nếu bạn thấy template này hữu ích, hãy cho nó một ngôi sao nhé!**

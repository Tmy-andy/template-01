/* ========================================
   LUXURIA - Main JavaScript
   All functionality for the website
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    Navigation.init();
    Modals.init();
    Forms.init();
    Sliders.init();
    Animations.init();
    Portfolio.init();
    FAQ.init();
    Pricing.init();
    Chat.init();
    Utils.init();
});

/* ========== Navigation Module ========== */
const Navigation = {
    init() {
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.getElementById('navLinks');
        this.header = document.querySelector('.header');
        this.backToTop = document.getElementById('backToTop');

        this.bindEvents();
        this.handleScroll();
    },

    bindEvents() {
        // Hamburger menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking a link
        if (this.navLinks) {
            this.navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.closeMobileMenu());
            });
        }

        // Scroll events
        window.addEventListener('scroll', () => this.handleScroll());

        // Back to top button
        if (this.backToTop) {
            this.backToTop.addEventListener('click', () => this.scrollToTop());
        }
    },

    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navLinks.classList.toggle('active');
    },

    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.navLinks.classList.remove('active');
    },

    handleScroll() {
        const scrollY = window.scrollY;

        // Header background on scroll
        if (this.header) {
            if (scrollY > 50) {
                this.header.style.background = 'rgba(13, 13, 26, 0.98)';
            } else {
                this.header.style.background = 'rgba(13, 13, 26, 0.95)';
            }
        }

        // Back to top button visibility
        if (this.backToTop) {
            if (scrollY > 500) {
                this.backToTop.classList.add('visible');
            } else {
                this.backToTop.classList.remove('visible');
            }
        }
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

/* ========== Modals Module ========== */
const Modals = {
    init() {
        this.modals = document.querySelectorAll('.modal');
        this.bindEvents();
    },

    bindEvents() {
        // Login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.open('loginModal'));
        }

        // Register button
        const registerBtn = document.getElementById('registerBtn');
        if (registerBtn) {
            registerBtn.addEventListener('click', () => this.open('registerModal'));
        }

        // Switch between login and register
        const switchToRegister = document.getElementById('switchToRegister');
        if (switchToRegister) {
            switchToRegister.addEventListener('click', (e) => {
                e.preventDefault();
                this.close('loginModal');
                setTimeout(() => this.open('registerModal'), 300);
            });
        }

        const switchToLogin = document.getElementById('switchToLogin');
        if (switchToLogin) {
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                this.close('registerModal');
                setTimeout(() => this.open('loginModal'), 300);
            });
        }

        // Forgot password
        const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.close('loginModal');
                setTimeout(() => this.open('forgotPasswordModal'), 300);
            });
        }

        const backToLoginLink = document.getElementById('backToLoginLink');
        if (backToLoginLink) {
            backToLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.close('forgotPasswordModal');
                setTimeout(() => this.open('loginModal'), 300);
            });
        }

        // Privacy and Terms links
        const privacyLinks = document.querySelectorAll('#privacyLink, #privacyLinkContact');
        privacyLinks.forEach(link => {
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open('privacyModal');
                });
            }
        });

        const termsLinks = document.querySelectorAll('#termsLink, #termsLinkRegister');
        termsLinks.forEach(link => {
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open('termsModal');
                });
            }
        });

        // Watch video button
        const watchVideoBtn = document.getElementById('watchVideoBtn');
        if (watchVideoBtn) {
            watchVideoBtn.addEventListener('click', () => this.open('videoModal'));
        }

        // Explore button
        const exploreBtn = document.getElementById('exploreBtn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', () => {
                const features = document.getElementById('features');
                if (features) {
                    features.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Feature buttons
        document.querySelectorAll('.feature-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const feature = btn.dataset.feature;
                this.showFeatureModal(feature);
            });
        });

        // Service detail buttons
        document.querySelectorAll('.service-detail-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const service = btn.dataset.service;
                this.showServiceModal(service);
            });
        });

        // Order service buttons
        document.querySelectorAll('.order-service-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const service = btn.dataset.service;
                this.open('orderModal');
                const orderService = document.getElementById('orderService');
                if (orderService) {
                    orderService.value = service;
                }
            });
        });

        // Get quote button
        const getQuoteBtn = document.getElementById('getQuoteBtn');
        if (getQuoteBtn) {
            getQuoteBtn.addEventListener('click', () => this.open('quoteModal'));
        }

        // Our mission button
        const ourMissionBtn = document.getElementById('ourMissionBtn');
        if (ourMissionBtn) {
            ourMissionBtn.addEventListener('click', () => this.open('missionModal'));
        }

        // Download brochure
        const downloadBrochureBtn = document.getElementById('downloadBrochureBtn');
        if (downloadBrochureBtn) {
            downloadBrochureBtn.addEventListener('click', () => {
                Toast.show('info', 'Đang tải...', 'Brochure sẽ được tải xuống sau giây lát.');
                setTimeout(() => {
                    Toast.show('success', 'Thành công!', 'Brochure đã được tải xuống.');
                }, 2000);
            });
        }

        // Schedule call button
        const scheduleCallBtn = document.getElementById('scheduleCallBtn');
        if (scheduleCallBtn) {
            scheduleCallBtn.addEventListener('click', () => this.open('scheduleModal'));
        }

        // Discuss project button
        const discussProjectBtn = document.getElementById('discussProjectBtn');
        if (discussProjectBtn) {
            discussProjectBtn.addEventListener('click', () => this.open('discussModal'));
        }

        // Book appointment button
        const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
        if (bookAppointmentBtn) {
            bookAppointmentBtn.addEventListener('click', () => this.open('appointmentModal'));
        }

        // Live chat button
        const liveChatBtn = document.getElementById('liveChatBtn');
        if (liveChatBtn) {
            liveChatBtn.addEventListener('click', () => this.open('chatModal'));
        }

        // Call now button
        const callNowBtn = document.getElementById('callNowBtn');
        if (callNowBtn) {
            callNowBtn.addEventListener('click', () => {
                window.location.href = 'tel:+84123456789';
            });
        }

        // WhatsApp button
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                window.open('https://wa.me/84123456789', '_blank');
            });
        }

        // Open map button
        const openMapBtn = document.getElementById('openMapBtn');
        if (openMapBtn) {
            openMapBtn.addEventListener('click', () => {
                window.open('https://maps.google.com/?q=10.7769,106.7009', '_blank');
            });
        }

        // Contact about project
        const contactAboutProject = document.getElementById('contactAboutProject');
        if (contactAboutProject) {
            contactAboutProject.addEventListener('click', () => {
                this.close('projectModal');
                window.location.href = 'contact.html';
            });
        }

        // Close buttons
        document.querySelectorAll('.modal-close, .modal-footer .btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.dataset.modal;
                if (modalId) {
                    this.close(modalId);
                }
            });
        });

        // Close on backdrop click
        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.close(modal.id);
                }
            });
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });

        // Social login buttons
        const googleLogin = document.getElementById('googleLogin');
        if (googleLogin) {
            googleLogin.addEventListener('click', () => {
                Toast.show('info', 'Đang kết nối...', 'Đang kết nối với Google...');
                setTimeout(() => {
                    this.close('loginModal');
                    this.showSuccess('Đăng nhập thành công!', 'Chào mừng bạn đến với Luxuria.');
                }, 1500);
            });
        }

        const facebookLogin = document.getElementById('facebookLogin');
        if (facebookLogin) {
            facebookLogin.addEventListener('click', () => {
                Toast.show('info', 'Đang kết nối...', 'Đang kết nối với Facebook...');
                setTimeout(() => {
                    this.close('loginModal');
                    this.showSuccess('Đăng nhập thành công!', 'Chào mừng bạn đến với Luxuria.');
                }, 1500);
            });
        }

        // Social links
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const social = link.dataset.social;
                const urls = {
                    facebook: 'https://facebook.com/luxuria',
                    twitter: 'https://twitter.com/luxuria',
                    instagram: 'https://instagram.com/luxuria',
                    linkedin: 'https://linkedin.com/company/luxuria',
                    youtube: 'https://youtube.com/luxuria',
                    email: 'mailto:info@luxuria.vn'
                };
                if (urls[social]) {
                    Toast.show('info', 'Chuyển hướng', `Đang mở ${social}...`);
                    setTimeout(() => {
                        window.open(urls[social], '_blank');
                    }, 500);
                }
            });
        });
    },

    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    closeAll() {
        this.modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    },

    showSuccess(title, message) {
        document.getElementById('successTitle').textContent = title;
        document.getElementById('successMessage').textContent = message;
        this.open('successModal');
    },

    showConfirm(title, message, callback) {
        document.getElementById('confirmTitle').textContent = title;
        document.getElementById('confirmMessage').textContent = message;
        
        const confirmOk = document.getElementById('confirmOk');
        const confirmCancel = document.getElementById('confirmCancel');
        
        confirmOk.onclick = () => {
            this.close('confirmModal');
            if (callback) callback(true);
        };
        
        confirmCancel.onclick = () => {
            this.close('confirmModal');
            if (callback) callback(false);
        };
        
        this.open('confirmModal');
    },

    showFeatureModal(feature) {
        const features = {
            quality: {
                title: 'Chất Lượng Cao Cấp',
                content: `
                    <div class="feature-detail">
                        <p>Chúng tôi cam kết mang đến sản phẩm và dịch vụ với chất lượng cao nhất:</p>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Quy trình kiểm soát chất lượng nghiêm ngặt</li>
                            <li><i class="fas fa-check"></i> Đội ngũ chuyên gia giàu kinh nghiệm</li>
                            <li><i class="fas fa-check"></i> Công nghệ và công cụ hiện đại</li>
                            <li><i class="fas fa-check"></i> Cam kết bảo hành dài hạn</li>
                        </ul>
                    </div>
                `
            },
            support: {
                title: 'Hỗ Trợ 24/7',
                content: `
                    <div class="feature-detail">
                        <p>Đội ngũ hỗ trợ chuyên nghiệp luôn sẵn sàng phục vụ bạn:</p>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Hotline hỗ trợ 24/7</li>
                            <li><i class="fas fa-check"></i> Live chat trực tuyến</li>
                            <li><i class="fas fa-check"></i> Email support phản hồi nhanh</li>
                            <li><i class="fas fa-check"></i> Hỗ trợ kỹ thuật từ xa</li>
                        </ul>
                    </div>
                `
            },
            security: {
                title: 'Bảo Mật Tuyệt Đối',
                content: `
                    <div class="feature-detail">
                        <p>Thông tin của bạn được bảo vệ với công nghệ tiên tiến:</p>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Mã hóa SSL/TLS</li>
                            <li><i class="fas fa-check"></i> Backup dữ liệu tự động</li>
                            <li><i class="fas fa-check"></i> Bảo mật đa lớp</li>
                            <li><i class="fas fa-check"></i> Tuân thủ GDPR</li>
                        </ul>
                    </div>
                `
            },
            speed: {
                title: 'Tốc Độ Nhanh Chóng',
                content: `
                    <div class="feature-detail">
                        <p>Xử lý nhanh gọn, tiết kiệm thời gian quý báu:</p>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Quy trình làm việc tối ưu</li>
                            <li><i class="fas fa-check"></i> Giao hàng đúng hẹn</li>
                            <li><i class="fas fa-check"></i> Phản hồi trong 24h</li>
                            <li><i class="fas fa-check"></i> Triển khai nhanh chóng</li>
                        </ul>
                    </div>
                `
            }
        };

        const featureData = features[feature];
        if (featureData) {
            document.getElementById('featureModalTitle').textContent = featureData.title;
            document.getElementById('featureModalBody').innerHTML = featureData.content;
            this.open('featureModal');
        }
    },

    showServiceModal(service) {
        const services = {
            design: {
                title: 'Thiết Kế Sáng Tạo',
                content: `
                    <div class="service-modal-content">
                        <p class="lead">Chúng tôi cung cấp dịch vụ thiết kế đồ họa chuyên nghiệp với phong cách độc đáo và sáng tạo.</p>
                        <h4>Dịch vụ bao gồm:</h4>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Thiết kế logo và bộ nhận diện thương hiệu</li>
                            <li><i class="fas fa-check"></i> Thiết kế giao diện UI/UX</li>
                            <li><i class="fas fa-check"></i> Thiết kế ấn phẩm marketing</li>
                            <li><i class="fas fa-check"></i> Motion graphics và video</li>
                        </ul>
                        <div class="service-pricing" style="margin-top: 20px;">
                            <span class="price-label">Giá từ:</span>
                            <span class="price-value">5.000.000đ</span>
                        </div>
                    </div>
                `
            },
            development: {
                title: 'Phát Triển Website',
                content: `
                    <div class="service-modal-content">
                        <p class="lead">Xây dựng website chuyên nghiệp với công nghệ hiện đại và tối ưu SEO.</p>
                        <h4>Dịch vụ bao gồm:</h4>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Website doanh nghiệp</li>
                            <li><i class="fas fa-check"></i> E-commerce</li>
                            <li><i class="fas fa-check"></i> Web Application</li>
                            <li><i class="fas fa-check"></i> CMS & Portal</li>
                        </ul>
                        <div class="service-pricing" style="margin-top: 20px;">
                            <span class="price-label">Giá từ:</span>
                            <span class="price-value">10.000.000đ</span>
                        </div>
                    </div>
                `
            },
            marketing: {
                title: 'Digital Marketing',
                content: `
                    <div class="service-modal-content">
                        <p class="lead">Chiến lược marketing số toàn diện giúp tăng doanh số và nhận diện thương hiệu.</p>
                        <h4>Dịch vụ bao gồm:</h4>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> SEO & SEM</li>
                            <li><i class="fas fa-check"></i> Social Media Marketing</li>
                            <li><i class="fas fa-check"></i> Content Marketing</li>
                            <li><i class="fas fa-check"></i> Email Marketing</li>
                        </ul>
                        <div class="service-pricing" style="margin-top: 20px;">
                            <span class="price-label">Giá từ:</span>
                            <span class="price-value">8.000.000đ/tháng</span>
                        </div>
                    </div>
                `
            }
        };

        const serviceData = services[service];
        if (serviceData) {
            document.getElementById('serviceModalTitle').textContent = serviceData.title;
            document.getElementById('serviceModalBody').innerHTML = serviceData.content;
            this.open('serviceModal');
        }
    }
};

/* ========== Forms Module ========== */
const Forms = {
    init() {
        this.bindEvents();
        this.initPasswordToggle();
        this.initPasswordStrength();
        this.initCharCounter();
    },

    bindEvents() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Forgot password form
        const forgotPasswordForm = document.getElementById('forgotPasswordForm');
        if (forgotPasswordForm) {
            forgotPasswordForm.addEventListener('submit', (e) => this.handleForgotPassword(e));
        }

        // Newsletter form
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletter(e));
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContact(e));
        }

        // Order form
        const orderForm = document.getElementById('orderForm');
        if (orderForm) {
            orderForm.addEventListener('submit', (e) => this.handleOrder(e));
        }

        // Quote form
        const quoteForm = document.getElementById('quoteForm');
        if (quoteForm) {
            quoteForm.addEventListener('submit', (e) => this.handleQuote(e));
        }

        // Schedule form
        const scheduleForm = document.getElementById('scheduleForm');
        if (scheduleForm) {
            scheduleForm.addEventListener('submit', (e) => this.handleSchedule(e));
        }

        // Plan form
        const planForm = document.getElementById('planForm');
        if (planForm) {
            planForm.addEventListener('submit', (e) => this.handlePlan(e));
        }

        // Discuss form
        const discussForm = document.getElementById('discussForm');
        if (discussForm) {
            discussForm.addEventListener('submit', (e) => this.handleDiscuss(e));
        }

        // Appointment form
        const appointmentForm = document.getElementById('appointmentForm');
        if (appointmentForm) {
            appointmentForm.addEventListener('submit', (e) => this.handleAppointment(e));
        }

        // Set min date for date inputs
        document.querySelectorAll('input[type="date"]').forEach(input => {
            const today = new Date().toISOString().split('T')[0];
            input.setAttribute('min', today);
        });
    },

    initPasswordToggle() {
        document.querySelectorAll('.toggle-password').forEach(btn => {
            btn.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    },

    initPasswordStrength() {
        const passwordInput = document.getElementById('registerPassword');
        const strengthIndicator = document.getElementById('passwordStrength');
        
        if (passwordInput && strengthIndicator) {
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                
                if (password.length >= 8) strength++;
                if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
                if (/\d/.test(password)) strength++;
                if (/[^a-zA-Z0-9]/.test(password)) strength++;
                
                strengthIndicator.className = 'password-strength';
                strengthIndicator.innerHTML = '<div class="strength-bar"></div>';
                
                if (password.length === 0) {
                    // No indicator
                } else if (strength <= 1) {
                    strengthIndicator.classList.add('weak');
                } else if (strength <= 2) {
                    strengthIndicator.classList.add('medium');
                } else {
                    strengthIndicator.classList.add('strong');
                }
            });
        }
    },

    initCharCounter() {
        const messageInput = document.getElementById('contactMessage');
        const charCount = document.getElementById('charCount');
        
        if (messageInput && charCount) {
            messageInput.addEventListener('input', function() {
                charCount.textContent = this.value.length;
                if (this.value.length > 500) {
                    this.value = this.value.substring(0, 500);
                    charCount.textContent = 500;
                }
            });
        }
    },

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (!this.validateEmail(email)) {
            Toast.show('error', 'Lỗi', 'Email không hợp lệ');
            return;
        }
        
        if (password.length < 6) {
            Toast.show('error', 'Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }
        
        // Simulate login
        Toast.show('info', 'Đang xử lý...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('loginModal');
            Modals.showSuccess('Đăng nhập thành công!', 'Chào mừng bạn đến với Luxuria.');
            e.target.reset();
        }, 1500);
    },

    handleRegister(e) {
        e.preventDefault();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword');
        
        if (confirmPassword && password !== confirmPassword.value) {
            Toast.show('error', 'Lỗi', 'Mật khẩu xác nhận không khớp');
            return;
        }
        
        Toast.show('info', 'Đang xử lý...', 'Đang tạo tài khoản');
        setTimeout(() => {
            Modals.close('registerModal');
            Modals.showSuccess('Đăng ký thành công!', 'Tài khoản của bạn đã được tạo.');
            e.target.reset();
        }, 1500);
    },

    handleForgotPassword(e) {
        e.preventDefault();
        const email = document.getElementById('forgotEmail').value;
        
        if (!this.validateEmail(email)) {
            Toast.show('error', 'Lỗi', 'Email không hợp lệ');
            return;
        }
        
        Toast.show('info', 'Đang gửi...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('forgotPasswordModal');
            Modals.showSuccess('Đã gửi!', 'Vui lòng kiểm tra email để đặt lại mật khẩu.');
            e.target.reset();
        }, 1500);
    },

    handleNewsletter(e) {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        
        if (!this.validateEmail(email)) {
            Toast.show('error', 'Lỗi', 'Email không hợp lệ');
            return;
        }
        
        Toast.show('info', 'Đang đăng ký...', 'Vui lòng đợi');
        setTimeout(() => {
            Toast.show('success', 'Thành công!', 'Bạn đã đăng ký nhận tin thành công.');
            e.target.reset();
        }, 1000);
    },

    handleContact(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang gửi...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.showSuccess('Gửi thành công!', 'Chúng tôi sẽ liên hệ với bạn sớm nhất.');
            e.target.reset();
            document.getElementById('charCount').textContent = '0';
        }, 1500);
    },

    handleOrder(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang xử lý...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('orderModal');
            Modals.showSuccess('Đã nhận yêu cầu!', 'Chúng tôi sẽ liên hệ với bạn trong 24h.');
            e.target.reset();
        }, 1500);
    },

    handleQuote(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang xử lý...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('quoteModal');
            Modals.showSuccess('Đã nhận yêu cầu!', 'Báo giá sẽ được gửi đến email của bạn.');
            e.target.reset();
        }, 1500);
    },

    handleSchedule(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang đặt lịch...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('scheduleModal');
            Modals.showSuccess('Đặt lịch thành công!', 'Chúng tôi sẽ gọi điện xác nhận với bạn.');
            e.target.reset();
        }, 1500);
    },

    handlePlan(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang xử lý...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('planModal');
            Modals.showSuccess('Đăng ký thành công!', 'Chúng tôi sẽ liên hệ để hoàn tất thủ tục.');
            e.target.reset();
        }, 1500);
    },

    handleDiscuss(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang gửi...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('discussModal');
            Modals.showSuccess('Đã nhận yêu cầu!', 'Đội ngũ tư vấn sẽ liên hệ với bạn.');
            e.target.reset();
        }, 1500);
    },

    handleAppointment(e) {
        e.preventDefault();
        
        Toast.show('info', 'Đang đặt lịch...', 'Vui lòng đợi');
        setTimeout(() => {
            Modals.close('appointmentModal');
            Modals.showSuccess('Đặt lịch thành công!', 'Chúng tôi sẽ xác nhận qua email.');
            e.target.reset();
        }, 1500);
    },

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
};

/* ========== Sliders Module ========== */
const Sliders = {
    init() {
        this.initTestimonialSlider();
    },

    initTestimonialSlider() {
        const track = document.getElementById('testimonialTrack');
        const dotsContainer = document.getElementById('sliderDots');
        const prevBtn = document.getElementById('prevTestimonial');
        const nextBtn = document.getElementById('nextTestimonial');
        
        if (!track) return;
        
        const cards = track.querySelectorAll('.testimonial-card');
        let currentIndex = 0;
        const totalSlides = cards.length;
        
        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        const dots = dotsContainer.querySelectorAll('.dot');
        
        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Auto slide
        setInterval(nextSlide, 5000);
    }
};

/* ========== Animations Module ========== */
const Animations = {
    init() {
        this.initCounters();
        this.initScrollAnimations();
    },

    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    this.animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => observer.observe(counter));
    },

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, stepTime);
    },

    initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .service-card, .team-card, .value-card, .portfolio-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => observer.observe(el));
    }
};

/* ========== Portfolio Module ========== */
const Portfolio = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => this.filter(btn.dataset.filter, btn));
        });

        // View project buttons
        document.querySelectorAll('.view-project').forEach(btn => {
            btn.addEventListener('click', () => this.viewProject(btn.dataset.project));
        });

        // Like buttons
        document.querySelectorAll('.like-project').forEach(btn => {
            btn.addEventListener('click', () => this.likeProject(btn));
        });

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => this.loadMore());
        }
    },

    filter(category, activeBtn) {
        const items = document.querySelectorAll('.portfolio-item');
        const buttons = document.querySelectorAll('.filter-btn');
        
        buttons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
        
        items.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('fade-in'), 10);
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        });
    },

    viewProject(projectId) {
        const projects = {
            ecommerce: {
                title: 'E-Commerce Platform',
                content: `
                    <div class="project-detail">
                        <p><strong>Khách hàng:</strong> TechMart Vietnam</p>
                        <p><strong>Thời gian:</strong> 3 tháng</p>
                        <p><strong>Công nghệ:</strong> React, Node.js, MongoDB</p>
                        <h4>Mô tả dự án:</h4>
                        <p>Xây dựng nền tảng thương mại điện tử hoàn chỉnh với hơn 10,000 sản phẩm, tích hợp thanh toán đa kênh và hệ thống quản lý kho hàng.</p>
                        <h4>Kết quả:</h4>
                        <ul class="mission-list">
                            <li><i class="fas fa-check"></i> Tăng 200% doanh số online</li>
                            <li><i class="fas fa-check"></i> Giảm 50% thời gian xử lý đơn hàng</li>
                            <li><i class="fas fa-check"></i> 50,000+ người dùng hoạt động</li>
                        </ul>
                    </div>
                `
            },
            branding: {
                title: 'Brand Identity Design',
                content: `
                    <div class="project-detail">
                        <p><strong>Khách hàng:</strong> Luxury Hotel Group</p>
                        <p><strong>Thời gian:</strong> 6 tuần</p>
                        <p><strong>Phạm vi:</strong> Logo, Brand Guidelines, Marketing Materials</p>
                        <h4>Mô tả dự án:</h4>
                        <p>Thiết kế bộ nhận diện thương hiệu cao cấp cho chuỗi khách sạn 5 sao, thể hiện sự sang trọng và đẳng cấp.</p>
                    </div>
                `
            },
            fitness: {
                title: 'Fitness Tracking App',
                content: `
                    <div class="project-detail">
                        <p><strong>Khách hàng:</strong> FitLife Vietnam</p>
                        <p><strong>Thời gian:</strong> 4 tháng</p>
                        <p><strong>Công nghệ:</strong> React Native, Firebase</p>
                        <h4>Mô tả dự án:</h4>
                        <p>Ứng dụng theo dõi sức khỏe và luyện tập với AI coach, tích hợp thiết bị đeo thông minh.</p>
                    </div>
                `
            }
        };

        const project = projects[projectId] || {
            title: 'Chi Tiết Dự Án',
            content: '<p>Thông tin chi tiết về dự án sẽ được cập nhật.</p>'
        };

        document.getElementById('projectModalTitle').textContent = project.title;
        document.getElementById('projectModalBody').innerHTML = project.content;
        Modals.open('projectModal');
    },

    likeProject(btn) {
        btn.classList.toggle('liked');
        const icon = btn.querySelector('i');
        
        if (btn.classList.contains('liked')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            Toast.show('success', 'Đã thích', 'Đã thêm vào danh sách yêu thích');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            Toast.show('info', 'Đã bỏ thích', 'Đã xóa khỏi danh sách yêu thích');
        }
    },

    loadMore() {
        Toast.show('info', 'Đang tải...', 'Đang tải thêm dự án');
        setTimeout(() => {
            Toast.show('success', 'Hoàn thành', 'Đã hiển thị tất cả dự án');
        }, 1000);
    }
};

/* ========== FAQ Module ========== */
const FAQ = {
    init() {
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
};

/* ========== Pricing Module ========== */
const Pricing = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        const toggle = document.getElementById('pricingToggle');
        if (toggle) {
            toggle.addEventListener('change', () => this.updatePrices(toggle.checked));
        }

        document.querySelectorAll('.select-plan-btn').forEach(btn => {
            btn.addEventListener('click', () => this.selectPlan(btn.dataset.plan));
        });
    },

    updatePrices(isYearly) {
        const amounts = document.querySelectorAll('.pricing-price .amount');
        const periods = document.querySelectorAll('.pricing-price .period');
        const labels = document.querySelectorAll('.toggle-label');
        
        labels.forEach(label => {
            label.classList.toggle('active', label.dataset.period === (isYearly ? 'yearly' : 'monthly'));
        });
        
        amounts.forEach(amount => {
            const monthly = parseInt(amount.dataset.monthly);
            const yearly = parseInt(amount.dataset.yearly);
            const value = isYearly ? yearly : monthly;
            amount.textContent = value.toLocaleString('vi-VN');
        });
        
        periods.forEach(period => {
            period.textContent = isYearly ? '/tháng (thanh toán năm)' : '/tháng';
        });
    },

    selectPlan(plan) {
        const plans = {
            basic: { name: 'Basic', price: '5.000.000đ/tháng' },
            professional: { name: 'Professional', price: '12.000.000đ/tháng' },
            enterprise: { name: 'Enterprise', price: '25.000.000đ/tháng' }
        };
        
        const selectedPlan = plans[plan];
        const planInfo = document.getElementById('selectedPlanInfo');
        
        if (planInfo && selectedPlan) {
            planInfo.innerHTML = `
                <h3>Gói ${selectedPlan.name}</h3>
                <div class="plan-price">${selectedPlan.price}</div>
            `;
        }
        
        Modals.open('planModal');
    }
};

/* ========== Chat Module ========== */
const Chat = {
    init() {
        const chatForm = document.getElementById('chatForm');
        if (chatForm) {
            chatForm.addEventListener('submit', (e) => this.sendMessage(e));
        }
    },

    sendMessage(e) {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addMessage(message, 'user');
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            this.botResponse(message);
        }, 1000);
    },

    addMessage(text, type) {
        const messagesContainer = document.getElementById('chatMessages');
        const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        
        const messageHTML = `
            <div class="chat-message ${type}">
                <div class="message-avatar">
                    <i class="fas ${type === 'bot' ? 'fa-robot' : 'fa-user'}"></i>
                </div>
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${time}</span>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },

    botResponse(userMessage) {
        const responses = {
            'xin chào': 'Xin chào! Tôi có thể giúp gì cho bạn?',
            'giá': 'Bạn muốn biết giá dịch vụ nào? Chúng tôi có thiết kế, phát triển web và marketing.',
            'liên hệ': 'Bạn có thể liên hệ qua hotline: +84 123 456 789 hoặc email: info@luxuria.vn',
            'dịch vụ': 'Chúng tôi cung cấp: Thiết kế, Phát triển Web, Marketing, Tư vấn. Bạn quan tâm dịch vụ nào?'
        };
        
        let response = 'Cảm ơn bạn đã nhắn tin. Nhân viên tư vấn sẽ phản hồi trong giây lát. Hoặc bạn có thể gọi hotline: +84 123 456 789';
        
        const lowerMessage = userMessage.toLowerCase();
        for (const [key, value] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                response = value;
                break;
            }
        }
        
        this.addMessage(response, 'bot');
    }
};

/* ========== Toast Notifications ========== */
const Toast = {
    show(type, title, message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon"><i class="fas ${icons[type]}"></i></div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close"><i class="fas fa-times"></i></button>
        `;
        
        container.appendChild(toast);
        
        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });
        
        // Auto remove
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
};

/* ========== Utils Module ========== */
const Utils = {
    init() {
        this.initSmoothScroll();
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
};

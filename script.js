/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box- sizing: border - box;
}

:root {
    --primary - color: #6366f1;
    --secondary - color: #8b5cf6;
    --accent - color: #06b6d4;
    --success - color: #10b981;
    --warning - color: #f59e0b;
    --error - color: #ef4444;
    --background - color: #0f172a;
    --surface - color: #1e293b;
    --card - color: #334155;
    --text - primary: #f1f5f9;
    --text - secondary: #94a3b8;
    --text - muted: #64748b;
    --border - color: #475569;
    --shadow - color: rgba(0, 0, 0, 0.5);
    --gradient - 1: linear - gradient(135deg, var(--primary - color), var(--secondary - color));
    --gradient - 2: linear - gradient(135deg, var(--accent - color), var(--primary - color));
}

html {
    scroll - behavior: smooth;
}

body {
    font - family: 'Inter', sans - serif;
    background: var(--background - color);
    color: var(--text - primary);
    line - height: 1.6;
    overflow - x: hidden;
}

.container {
    max - width: 1200px;
    margin: 0 auto;
    position: relative;
}

/* Header Styles */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z - index: 1000;
    background: rgba(15, 23, 42, 0.95);
    backdrop - filter: blur(10px);
    border - bottom: 1px solid var(--border - color);
    transition: all 0.3s ease;
}

.header - content {
    max - width: 1200px;
    margin: 0 auto;
    display: flex;
    justify - content: space - between;
    align - items: center;
    padding: 1rem 2rem;
}

.logo {
    display: flex;
    align - items: center;
    gap: 0.5rem;
    font - size: 1.5rem;
    font - weight: 700;
    color: var(--primary - color);
}

.logo i {
    font - size: 2rem;
    animation: bounce 2s infinite;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav - link {
    color: var(--text - secondary);
    text - decoration: none;
    transition: all 0.3s ease;
    position: relative;
}

.nav - link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient - 1);
    transition: width 0.3s ease;
}

.nav - link:hover {
    color: var(--text - primary);
}

.nav - link: hover::after {
    width: 100 %;
}

/* Hero Section */
.hero {
    min - height: 100vh;
    display: flex;
    align - items: center;
    justify - content: center;
    position: relative;
    overflow: hidden;
    background: var(--gradient - 1);
    padding: 2rem;
}

.hero - content {
    text - align: center;
    z - index: 2;
    max - width: 800px;
}

.hero - title {
    font - size: 4rem;
    font - weight: 700;
    margin - bottom: 1rem;
    background: linear - gradient(45deg, #fff, #e2e8f0);
    -webkit - background - clip: text;
    -webkit - text - fill - color: transparent;
    background - clip: text;
    animation: fadeInUp 1s ease;
}

.hero - subtitle {
    font - size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    margin - bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s both;
}

.hero - badge {
    display: inline - flex;
    align - items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.75rem 1.5rem;
    border - radius: 50px;
    backdrop - filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: fadeInUp 1s ease 0.4s both;
}

.hero - animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    pointer - events: none;
}

.floating - shapes {
    position: relative;
    width: 100 %;
    height: 100 %;
}

.shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border - radius: 50 %;
    animation: float 6s ease -in -out infinite;
}

.shape - 1 {
    width: 80px;
    height: 80px;
    top: 20 %;
    left: 10 %;
    animation - delay: 0s;
}

.shape - 2 {
    width: 60px;
    height: 60px;
    top: 60 %;
    right: 10 %;
    animation - delay: 2s;
}

.shape - 3 {
    width: 100px;
    height: 100px;
    bottom: 20 %;
    left: 20 %;
    animation - delay: 4s;
}

.shape - 4 {
    width: 40px;
    height: 40px;
    top: 30 %;
    right: 30 %;
    animation - delay: 1s;
}

/* Main Content */
.main - content {
    padding: 4rem 2rem;
    background: var(--background - color);
}

.section {
    margin - bottom: 4rem;
    animation: fadeInUp 0.8s ease;
}

.section - header {
    display: flex;
    align - items: center;
    gap: 1rem;
    margin - bottom: 2rem;
}

.section - icon {
    width: 60px;
    height: 60px;
    background: var(--gradient - 1);
    border - radius: 50 %;
    display: flex;
    align - items: center;
    justify - content: center;
    font - size: 1.5rem;
    color: white;
    box - shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
}

.section - title {
    font - size: 2.5rem;
    font - weight: 600;
    color: var(--text - primary);
}

.card {
    background: var(--surface - color);
    border - radius: 20px;
    padding: 2rem;
    box - shadow: 0 20px 40px var(--shadow - color);
    border: 1px solid var(--border - color);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradient - 1);
    transform: translateX(-100 %);
    transition: transform 0.3s ease;
}

.card: hover::before {
    transform: translateX(0);
}

.card:hover {
    transform: translateY(-5px);
    box - shadow: 0 30px 60px var(--shadow - color);
}

.card - text {
    font - size: 1.1rem;
    color: var(--text - secondary);
    line - height: 1.8;
}

/* Feature List */
.feature - list {
    display: grid;
    gap: 1.5rem;
}

.feature - item {
    display: flex;
    align - items: flex - start;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.02);
    border - radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.feature - item:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
}

.feature - icon {
    width: 50px;
    height: 50px;
    border - radius: 50 %;
    display: flex;
    align - items: center;
    justify - content: center;
    color: white;
    flex - shrink: 0;
}

.feature - icon.success {
    background: var(--success - color);
    box - shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
}

.feature - content h3 {
    color: var(--text - primary);
    margin - bottom: 0.5rem;
    font - weight: 600;
}

.feature - content p {
    color: var(--text - secondary);
}

/* API Info */
.api - info {
    display: grid;
    gap: 1.5rem;
}

.api - card {
    background: rgba(255, 255, 255, 0.02);
    border - radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.api - card:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
}

.api - header {
    display: flex;
    align - items: center;
    gap: 1rem;
    margin - bottom: 1rem;
}

.api - header i {
    font - size: 2rem;
    color: var(--accent - color);
}

.api - header h3 {
    color: var(--text - primary);
    font - weight: 600;
}

.api - details p {
    color: var(--text - secondary);
    margin - bottom: 1rem;
}

.api - link a {
    display: inline - flex;
    align - items: center;
    gap: 0.5rem;
    color: var(--accent - color);
    text - decoration: none;
    transition: all 0.3s ease;
}

.api - link a:hover {
    color: var(--primary - color);
    transform: translateX(5px);
}

/* Contact Section */
.contact - content {
    text - align: center;
}

.contact - text {
    font - size: 1.1rem;
    color: var(--text - secondary);
    margin - bottom: 2rem;
    line - height: 1.8;
}

.contact - info {
    display: flex;
    justify - content: center;
    gap: 2rem;
    flex - wrap: wrap;
}

.contact - item {
    display: flex;
    align - items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    border - radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.contact - item:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
}

.contact - item i {
    color: var(--accent - color);
}

/* Footer */
.footer {
    background: var(--surface - color);
    border - top: 1px solid var(--border - color);
    padding: 2rem;
}

.footer - content {
    max - width: 1200px;
    margin: 0 auto;
    display: flex;
    justify - content: space - between;
    align - items: center;
    flex - wrap: wrap;
    gap: 1rem;
}

.footer - logo {
    display: flex;
    align - items: center;
    gap: 0.5rem;
    font - size: 1.2rem;
    font - weight: 600;
    color: var(--primary - color);
}

.footer - text {
    color: var(--text - muted);
}

/* Scroll to Top Button */
.scroll - top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--gradient - 1);
    border: none;
    border - radius: 50 %;
    color: white;
    font - size: 1.2rem;
    cursor: pointer;
    box - shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
    transition: all 0.3s ease;
    opacity: 0;
    pointer - events: none;
    z - index: 1000;
}

.scroll - top.visible {
    opacity: 1;
    pointer - events: auto;
}

.scroll - top:hover {
    transform: translateY(-3px);
    box - shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
}

/* Progress Bar */
.progress - bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0 %;
    height: 3px;
    background: var(--gradient - 1);
    z - index: 1001;
    transition: width 0.3s ease;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0 %, 20 %, 50 %, 80 %, 100 % {
        transform: translateY(0);
    }
    40 % {
        transform: translateY(-10px);
    }
    60 % {
        transform: translateY(-5px);
    }
}

@keyframes float {
    0 %, 100 % {
        transform: translateY(0px);
    }
    50 % {
        transform: translateY(-20px);
    }
}

/* Responsive Design */
@media(max - width: 768px) {
    .header - content {
        flex - direction: column;
        gap: 1rem;
    }
    
    .nav {
        gap: 1rem;
    }
    
    .hero - title {
        font - size: 2.5rem;
    }
    
    .hero - subtitle {
        font - size: 1.2rem;
    }
    
    .section - title {
        font - size: 2rem;
    }
    
    .main - content {
        padding: 2rem 1rem;
    }
    
    .card {
        padding: 1.5rem;
    }
    
    .contact - info {
        flex - direction: column;
        align - items: center;
    }
    
    .footer - content {
        flex - direction: column;
        text - align: center;
    }
}

@media(max - width: 480px) {
    .hero {
        padding: 1rem;
    }
    
    .hero - title {
        font - size: 2rem;
    }
    
    .section - header {
        flex - direction: column;
        text - align: center;
    }
    
    .feature - item {
        flex - direction: column;
        text - align: center;
    }
}

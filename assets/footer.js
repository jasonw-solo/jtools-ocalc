/**
 * JTools-OCalc 页脚组件
 */

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'app-footer';
    footer.innerHTML = `
        <div class="footer-content">
            <p>Copyright © ${new Date().getFullYear()} <a href="${CONFIG.urls.gitee}" target="_blank">${CONFIG.author.name}</a></p>
            <p class="footer-links">
                <a href="${CONFIG.urls.repo}" target="_blank">Gitee</a>
                <span class="separator">•</span>
                <a href="${CONFIG.urls.issues}" target="_blank">反馈</a>
                <span class="separator">•</span>
                <a href="${CONFIG.urls.email}">Email: ${CONFIG.author.email}</a>
                <span class="separator">•</span>
                <a href="${CONFIG.urls.license}" target="_blank">${CONFIG.project.license}</a>
            </p>
        </div>
    `;
    return footer;
}

function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.appendChild(renderFooter());
        return;
    }
    
    const container = document.querySelector('.app-container') || document.body;
    const existingFooter = container.querySelector('.app-footer');
    if (existingFooter) {
        existingFooter.replaceWith(renderFooter());
    } else {
        container.appendChild(renderFooter());
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}

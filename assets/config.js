/**
 * JTools-OCalc 全局配置文件
 */

const CONFIG = {
    author: {
        name: 'Jason',
        gitee: 'jason-solo',
        email: 'jason-solo@foxmail.com'
    },
    project: {
        name: 'JTools-OCalc',
        repo: 'jtools-ocalc',
        version: '1.2.5',
        license: 'GPL-3.0'
    },
    urls: {
        get gitee() {
            return `https://gitee.com/${CONFIG.author.gitee}`;
        },
        get repo() {
            return `${this.gitee}/${CONFIG.project.repo}`;
        },
        get issues() {
            return `${this.repo}/issues`;
        },
        get license() {
            return `${this.repo}/blob/master/LICENSE`;
        },
        get email() {
            return `mailto:${CONFIG.author.email}`;
        }
    }
};

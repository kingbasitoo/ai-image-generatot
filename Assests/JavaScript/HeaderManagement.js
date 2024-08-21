class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="nav">
                <a href="#" class="logo">Gen<span>Art</span>Lab</a>
                <ul id="center-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="feedback.html">Feedback</a></li>
                </ul>
                <div id="menu-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        `;

        // JavaScript to set active link
        const navLinks = this.querySelectorAll('#center-nav a');
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.toggle('active');
            }
        });
    }
}

customElements.define('special-header', specialHeader);
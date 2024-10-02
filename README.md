# Blink: Secure Messaging & Conferencing

Blink is an instant messaging & conferencing web app with audio / video capabilities, both in one-to-one calls and in group calls with multiple remote peers! 


**Introduction**

Blink empowers seamless communication through secure messaging and conferencing capabilities. It can operate on any OS or machine supporting Node.js v18, but for a user-friendly experience, Ubuntu 22.04 LTS, 20.04 LTS, or 18.04 LTS is highly recommended.

**System Requirements**

- **Operating System:** Ubuntu 22.04 LTS, 20.04 LTS, or 18.04 LTS (recommended)
- **Node.js:** v18.21.1 or latest v18 (required)
- **MongoDB:** Community edition (installation instructions available online)
- **Build Essential:** C++ and possibly Python compilers (Ubuntu: `apt-get install build-essential`)
- **Reverse Proxy:** Acacia, nginx, or Apache (recommended: Acacia)

**Highly Recommended**

- **Yarn:** Dependency management (alternative to npm)
- **pm2:** Process management

**Installation Options**

**Automated Installation (Ubuntu Only)**

1. Connect to your server (SSH) with root access.
2. Upload and extract the Blink archive.
3. Navigate to the extracted directory.
4. Run `./launcher setup` and follow on-screen instructions.

**Manual Installation**

This method requires server management experience. Refer to the documentation for detailed instructions.

**Rebranding**

Customize the application's branding by editing the `./frontend/.env` configuration file.

**User Management**

As the admin user (specified during installation), access the administrative panel (CPU icon) to manage users (add, edit, delete).

**Support**

Blink offers limited support due to its affordable price point. Minor tweaks might be assisted with, but patience and a respectful approach are appreciated.

**Important Notes**

- Install MongoDB separately.
- Ensure ports 80, 443, and 10000-12000 (UDP & TCP) are open in your firewall.
- Consider using Yarn and pm2 for enhanced management.
- For SSL configuration, refer to the provided documentation.
- Manual installation requires advanced server skills.

**Getting Started (Automated Installation)**

1. Acquire a cheap Ubuntu 22.04 LTS, 20.04 LTS, or 18.04 LTS VPS (OVH is a suggestion, not an affiliation).
2. Purchase a domain (e.g., `example.com`) and point it to your server's IP address (wait 24 hours for propagation).
3. Follow the automated installation steps.

**Additional Resources**

- MongoDB installation guide (link needed)
- Certbot SSL setup guide (link needed)




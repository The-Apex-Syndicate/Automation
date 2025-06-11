class loginpage {
    constructor(page) {
        this.page = page;
        this.signinlink = '//a[text()="Sign In"]'
        // this.usernameInput = '//input[@name="username"]';
        this.emailField = 'input[@id="email"]';
        this.passwordField = '//input[id="password"]';
        // this.dobInput = '//input[@name="dob"]';
        this.submitButton = '//button[text()="submit"]';
    }

    async goto() {
        await this.page.goto('https://192.168.1.84:5173');
    }

    async signin() {
        await this.page.click(this.signinlink);
    }

    async login(user) {
        await this.page.fill(this.usernameInput, user.name);
        // await this.page.fill(this.emailOrPhoneInput, user.emailOrPhone);
        await this.page.fill(this.passwordInput, user.password);
        // await this.page.fill(this.dobInput, user.dob);
        await this.page.click(this.submitButton);
    }
}

module.exports = loginpage;

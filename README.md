# Ambev Tech Trial - E2E Testing Project

This project contains end-to-end (E2E) tests for the Ambev Tech Trial application using Cypress, a modern web testing framework.

## 🚀 Technologies

- [Cypress](https://www.cypress.io/) - Modern web testing framework
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Test reporter
- [Faker.js](https://fakerjs.dev/) - Data generation library
- [Cypress Real Events](https://github.com/dmtrKovalenko/cypress-real-events) - Real browser events simulation

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/IvsonC/AmbevTechTrial
cd ambevtechtrial
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running Tests

The project includes several npm scripts for running tests:

- Open Cypress Test Runner:
```bash
npm run cy.open
```

- Run tests in headless mode (Chrome):
```bash
npm run test:headless
```

- Run tests in headed mode (Chrome):
```bash
npm run test:headed
```

- Run tests in specific browsers:
```bash
npm run cy:run:chrome    # Run in Chrome
npm run cy:run:firefox   # Run in Firefox
```

- Run specific test suites:
```bash
npm run test:login       # Run login tests
```

## 📊 Test Reports

Generate HTML test reports:
```bash
npm run report:generate
```

Reports will be available in the `cypress/reports` directory.

## 📁 Project Structure

```
cypress/
├── e2e/          # Test specifications
├── fixtures/     # Test data
├── pages/        # Page Object Models
├── screenshots/  # Test failure screenshots
└── support/      # Support files and custom commands
```

## 🛠️ Features

- Page Object Model (POM) architecture
- Custom commands and utilities
- Data-driven testing with Faker.js
- HTML test reports with Mochawesome
- Cross-browser testing support
- Real browser events simulation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

# 🔍 Make.com Scenario Blueprint Search Tool

This script helps **Make.com** developers search all scenarios in their organization for a specific node (e.g. `"amazon"`, `"telegram"`, or any other keyword). 
It logs the IDs of any scenarios whose blueprints contain the search term.

## 🧠 What It Does

- Connects to the [Make.com API](https://www.make.com/)
- Retrieves all scenario blueprints in your organization
- Searches each blueprint for a user-defined keyword
- Outputs matching scenario IDs to the console

---

## 📦 Prerequisites

Before using this tool, you’ll need:

- Your **Make API Token**
- Your **Organization ID**
- The Make.com **Base URL** (for example `https://eu1.make.com/api/v2`)
- A search term (e.g. `"webhook"`, `"aws"`, `"telegram"`)

---

## 🛠 Setup

1. Clone the repo:
   ```code
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME

2. Install dependencies
   ```code
   npm install

3. Create a `.env.example`:
   ```code
   echo "MAKE_API_TOKEN=your-api-token-here" > .env.example
   echo "MAKE_ORGANIZATION_ID=your-org-id-here" >> .env.example

3. Create a .env file based on the template:
   ```code
   cp .env.example .env

4. Replace the example values in your `.env` file with your actual Make API token and organization ID
   
6. Set your search term in `fetchScenarios.js`:
   ```code
   const SEARCH_TERM = 'your-search-keyword';

7. 🚀 Run the Script
   ```code
   node fetchScenarios.js





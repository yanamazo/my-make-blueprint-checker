require('dotenv').config();
const axios = require('axios');

// Load configuration from environment variables
const API_TOKEN = process.env.MAKE_API_TOKEN;
const ORGANIZATION_ID = process.env.MAKE_ORGANIZATION_ID;
const BASE_URL = 'https://eu2.make.com/api/v2';
const SEARCH_TERM = 'amazon'; // ✅ Declared as a global constant

if (!API_TOKEN || !ORGANIZATION_ID) {
  console.error('Missing required environment variables. Please set MAKE_API_TOKEN and MAKE_ORGANIZATION_ID.');
  process.exit(1);
}

const headers = {
  'Authorization': `Token ${API_TOKEN}`,
  'Content-Type': 'application/json'
};

/**
 * Fetches all scenario IDs from the Make.com API.
 */
async function getScenarioIds() {
  const url = `${BASE_URL}/scenarios?organizationId=${ORGANIZATION_ID}`;
  try {
    const response = await axios.get(url, { headers });
    return response.data.scenarios.map(scenario => scenario.id);
  } catch (error) {
    console.error('Error fetching scenarios:', error.response?.data || error.message);
    return [];
  }
}

/**
 * Fetches the blueprint for a specific scenario ID.
 */
async function getBlueprint(scenarioId) {
  const url = `${BASE_URL}/scenarios/${scenarioId}/blueprint?organizationId=${ORGANIZATION_ID}`;
  try {
    const response = await axios.get(url, { headers });
    return JSON.stringify(response.data);
  } catch (error) {
    console.error(`Error fetching blueprint for scenario ${scenarioId}:`, error.response?.data || error.message);
    return '';
  }
}

/**
 * Main function to find scenarios containing the global SEARCH_TERM in their blueprint.
 */
(async () => {
  const scenarioIds = await getScenarioIds();

  for (const id of scenarioIds) {
    const blueprint = await getBlueprint(id);
    if (blueprint.includes(SEARCH_TERM)) {
      console.log(`Match found in scenario ID: ${id}`);
    }
  }
})();


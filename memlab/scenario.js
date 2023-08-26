// initial page load's url
function url() {
  return 'http://localhost:3000/democosmos/';
}

// action where you suspect the memory leak might be happening
async function action(page) {
  const elements = await page.$x("//button[contains(., 'Search')]");
  const [button] = elements;
  if (button) {
    await button.click();
  }
  // clean up external references from memlab
  await Promise.all(elements.map(e => e.dispose()));
}

// how to go back to the state before action
async function back(page) {
  const elements = await page.$x("//button[contains(., 'Demo App')]");
  const [button] = elements;
  if (button) {
    await button.click();
  }
}

function repeat() {
  return 10;
}

module.exports = { action, back, url, repeat };

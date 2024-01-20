document.getElementById('btn').addEventListener('click', async function() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;

  if (!textInput || !delayInput) {
    alert('Please enter both text and delay values.');
    return;
  }

  const delayInSeconds = parseInt(delayInput, 10);

  try {
    // Wait for the specified delay
    await new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));

    // Display the message on the webpage
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = textInput;
  } catch (error) {
    console.error('An error occurred:', error);
  }
});


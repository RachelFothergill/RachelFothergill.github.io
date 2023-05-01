// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
  // My personal OpenAI API key
  const openaiApiKey = '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';
  // Chatbot chosen to use
  const chatbotName = 'davinci'; 
  // Create an instance of the OpenAI API client
  const openai = new OpenAI(openaiApiKey);

  // Define a function that takes user input and returns the chatbot's response
  const chatbot = async (input) => {
    // Set the prompt to the user's input
    const prompt = input;
    // Call the OpenAI API to get a response
    const chatbotResponse = await openai.complete({
      engine: chatbotName,
      prompt,
      maxTokens: 150,
      n: 1,
      stop: ['\n'],
      temperature: 0.7,
    });
    // Extract the response from the API's JSON output
    const message = chatbotResponse.choices[0].text.trim();
    return message;
  };

  // Define a function that gets user input, sends it to the chatbot function, and displays the response
  const sendInput = async () => {
    // Get the user's input from the text input element
    const userInput = document.getElementById('user-input').value;
    // Call the chatbot function to get a response
    const chatbotResponse = await chatbot(userInput);
    // Get the chatbot output container element
    const chatbotOutput = document.getElementById('chatbot-output');
    // Create a new paragraph element for the user's input
    const userMessage = document.createElement('p');
    userMessage.innerHTML = userInput;
    userMessage.classList.add('user-message');
    // Create a new paragraph element for the chatbot's response
    const chatbotMessage = document.createElement('p');
    chatbotMessage.innerHTML = chatbotResponse;
    chatbotMessage.classList.add('chatbot-message');
    // Add the user's input and the chatbot's response to the output container
    chatbotOutput.appendChild(userMessage);
    chatbotOutput.appendChild(chatbotMessage);
  };

  // Get the submit button element
  const submitButton = document.getElementById('submit-button');
  // Add an event listener to the submit button that calls the sendInput function when clicked
  submitButton.addEventListener('click', sendInput);
});
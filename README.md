**Task: Create a Node.js Command-Line Text Adventure Game**

**Objective**: Build an interactive text-based adventure game that runs in the command line. The game should present the user with story scenarios and choices that impact the direction of the game. Complete story is mentioned in `STORY.md`

**Requirements**:

1. **Story Setup**:

   - Design a short but engaging story with multiple paths. The story should branch based on user choices.
   - The story should have at least three different endings based on the choices made throughout the game.
   - Each part of the story should offer the user at least two choices that influence the subsequent path of the narrative.

2. **Command Line Interface (CLI)**:

   - Use the `readline` library for handling command line input and output.
   - The game should start with a brief introduction and instructions on how to play.
   - The user should be able to make choices by entering a number or keyword corresponding to the available options.

3. **State Management**:

   - Implement a system to track the user's choices and current state in the story which should be modified based on the user's choices and impact the possible outcomes of the game.

4. **Dynamic Story Progression**:

   - The narrative should change dynamically based on the user's decisions.
   - Implement different story branches and endings based on the choices made throughout the game.
   - The game should have at least three distinct paths leading to different conclusions.

5. **Error Handling and Validation**:

   - Ensure that the user's input is validated and handle any unexpected input gracefully.
   - Provide clear error messages and prompts when the user enters invalid input.

**Instructions**:

1. Create a new Node.js project and initialize it with `npm init`.
2. Implement the required features for the text adventure game.
3. Use appropriate data structures and algorithms to manage the story data, player state, and game logic.

You can use any libraries or frameworks you're familiar with, but be prepared to explain your choices and trade-offs during the code review. Creativity and effective storytelling should be the primary focus of this task.

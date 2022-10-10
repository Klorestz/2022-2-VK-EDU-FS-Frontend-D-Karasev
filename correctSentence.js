/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  //Заменяем в строке первый символ на тот же самый символ в верхнем регистре
  text = text.replace(text[0], text[0].toUpperCase())
  if (!text.includes("."))
    text += "."
  return text;
}
console.log(correctSentence("greetings, friends"))
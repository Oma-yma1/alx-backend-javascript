export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Update the existing variables without redeclaration
    task2 = false; // Update the existiong variables without redeclaration
  }

  return [task, task2];
}

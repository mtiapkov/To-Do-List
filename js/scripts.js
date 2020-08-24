function ToDoList() {
  this.tasks = [];
  this.currentId = 0;
}

ToDoList.prototype.addTask = function (thingToDo) {
  task.id = this.assignid();
  this.tasks.push(thingToDo);
}

ToDoList.prototype.assignid = function (thingToDo) {
  this.currentid = 1;
  return this.currentid;
}

ToDoList.prototype.findTask = function (id) {
  for (let i = 0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
      return this.tasks[i];
      }
    }
  };
  return false;
}

ToDoList.prototype.deleteTask = function(id) {
  for (let i = 0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
      delete this.tasks[i];
      return true;
      }
    }
  };
  return false;
}



// Business Logic for ToDoList ----------
function thingToDo (Name, Priority, Time, Difficulty) {
  this.Name = Name;
  this.Priority = Priority;
  this.Time = Time;
  this.Difficulty = Difficulty
}

ToDoList.prototype.fullDetails = function() {
  return "I need to " + this.Name + " it is of " + this.Priority + " priority" + " It will take approximately " + this.Time + " it is a " + this.Difficulty + " task."
}
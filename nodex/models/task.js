var TaskModel = function (title, description, created_at, url_image) {
  this.id = TaskModel.findAll().length + 1;
  this.title = title;
  this.description = description;
  this.created_at = created_at;
  this.url_image = url_image;
};

TaskModel.prototype.toString = () => {
  return "id: " + this.id + " | Title: " + this.title;
};

TaskModel.tasks = [];

TaskModel.add = (task) => { 
    let cantidad = TaskModel.tasks.length;
    nueva = cantidad + 1;

    let cualquiera = new TaskModel(`titulo ${nueva}`,`Description ${nueva}`, new Date(),"https://picsum.photos/200/300");
       // TaskModel.add(task1);
    TaskModel.tasks.push(cualquiera); 
    
    for (let i = 0; i < TaskModel.tasks.length ; i++){
        const task = TaskModel.tasks[i];
        if(task.id == nueva){
            return task;
        }
    }
};


TaskModel.findAll = () => {
return TaskModel.tasks;
};

TaskModel.findById = (id) => {
for (let index = 0; index < TaskModel.tasks.length; index++) {
    const element = TaskModel.tasks[index];
    if (element.id == id) {
    return element;
    }
}
    return [];
  //return TaskModel.tasks.find( element => task.id == id);
};

TaskModel.deleteById = (id) => {
let pos = TaskModel.tasks.findIndex((task) => task.id == id);
if (pos >= 0) {
    //    eliminar la tarea por su posicion
    TaskModel.tasks.splice(pos, 1);
}
return "tarea eliminada"
};

let task1 = new TaskModel(
"Titulo1",
"Description",
new Date(),
"https://picsum.photos/200/300"
);
TaskModel.add(task1);

let task2 = new TaskModel(
"Titulo1",
"Description",
new Date(),
"https://picsum.photos/seed/picsum/200/300"
);
TaskModel.add(task2);

module.exports = TaskModel;


// 每个Vue应用都是通过用Vue构造器创建一个新的Vue实例开始的
var vuedemo = new Vue({
    // DOM 元素，挂载视图模型，
    el: '#zhq',
    // 定义属性，并设置初始值
    //方式一
    data: {
        todos: [

        ],
        inputValue: ''

    },
    created() {
        this.loadLocalTodos();
        for (let i=0;i<this.todos.length;i++){
            this.todos[i].editting=false
        }
        
    },
    methods: {
        loadLocalTodos:function(){
            const his_todos=localStorage.getItem('todos');
            if(his_todos){
                this.todos=JSON.parse(his_todos)
            };
            
        },
        saveLocalTodos:function(){
            console.log('保存！')
            //localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        add_todo: function () {
            if (!this.inputValue) return
            const new_todo = {
                name: this.inputValue,
                done: false,
                id: Math.random().toString(36).substr(2, 9),
                editting:false
            }
            this.todos.push(new_todo)
            this.saveLocalTodos()
        },
        del_todo: function (id) {
            const index = this.todos.findIndex(todo => todo.id === id);
            if (index != -1) {
                this.todos.splice(index, 1);
                this.saveLocalTodos()
            }
        },
        check_todo:function(todo){
            todo.done=!todo.done;
            vuedemo2.num=0;
        },
        editTodoName:function(todo){
            todo.editting=true
        },
        saveEdit:function(todo){
            todo.editting=false;
            this.saveLocalTodos()
        }
    },
    computed: {
        sum: function () {
            return this.todos.length
        },
        sum_done: function () {
            return this.todos.filter(todo => todo.done === true).length
        }
    }

})

var vuedemo2 = new Vue({
    // DOM 元素，挂载视图模型，
    el: '#vuedemo_2',
    // 定义属性，并设置初始值
    //方式一
    data: {num:1}
})

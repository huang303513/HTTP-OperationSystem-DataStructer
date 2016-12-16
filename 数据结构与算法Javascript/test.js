function Queue(){
  this.items = [];
}
Queue.prototype = {
  constructor:Queue,
  enqueue:function(elements){
    this.items.push(elements);
  },
  dequeue:function(){
    return this.items.shift();
  },
  front:function(){
    return this.items[0];
  },
  isEmpty:function(){
    return this.items.length == 0;
  },
  size:function(){
    return this.items.length;
  },
  clear:function(){
    this.items = [];
  },
  print:function(){
    console.log(this.items.toString());
  }
}


function Dictionary() {
    this.items = {};
}
Dictionary.prototype = {
    constructor: Dictionary,
    has: function(key) {
        return key in this.items;
    },
    set: function(key, value) {
        this.items[key] = value;
    },
    remove: function(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    },
    get: function(key) {
        return this.has(key) ? this.items[key] : undefined;
    },
    values: function() {
        var values = [];
        for (var key in this.items) {
            if (this.has(key)) {
                values.push(key);
            }
        }
        return values;
    },
    clear: function() {
        this.items = {};
    },
    size: function() {
        return Object.keys(this.items).length;
    },
    keys: function() {
        return Object.keys(this.items);
    },
    getItems: function() {
        return this.items;
    }
};

function Graph() {
    this.vertices = []; //点数组
    this.adjList = new Dictionary();
    if ((typeof this.addVertex !== 'function') && (typeof this.addVertex !== 'string')) {
        //私有方法，标记节点颜色 未被访问过是white 被发现是grey 已被探索black。
        function initializeColor(vertices){
            var color = [];
            for(var i = 0; i < vertices.length; i++){
                color[vertices[i]] = 'white';
            }
            return color;
        }
        //添加节点
        Graph.prototype.addVertex = function(v) {
            this.vertices.push(v);
            this.adjList.set(v, []); //给节点v设置一个空数组作为值。
        };
        //添加边
        Graph.prototype.addEdge = function(v, w) {
            this.adjList.get(v).push(w); //先获取v节点对应的数组，然后把w推入数组中，这样就表示一条v到w的线
            this.adjList.get(w).push(v);
        };
        //广度优先搜索算法 v表示初始节点，callback表示回调。
        Graph.prototype.bfs = function(v, callback){
            var color = initializeColor(this.vertices);
            var queue = new Queue();//存储待访问和待探索的节点
            queue.enqueue(v);
            while(!queue.isEmpty()){
                var u = queue.dequeue();
                //获取u的相邻节点列表
                var neighbors = this.adjList.get(u);
                color[u] = 'grey';
                for(var i = 0; i < neighbors.length; i++){
                    var w = neighbors[i];
                    //如果从没有标记过，则标记为grey，加入队列
                    if (color[w] === 'white') {
                        color[w] = 'grey';
                        queue.enqueue(w);
                    }
                }
                //所有相邻节点都被标记了，所以改为黑色
                color[u] = 'black';
                //如果对于标记过得节点有操作，通过callback操作
                if (callback) {
                    callback(u);
                }
            }
        };
        Graph.prototype.toString = function(){
            var s = '';
            for(var i = 0; i < this.vertices.length; i++){
                s += this.vertices[i] + ' -> ';
                var neighbors = this.adjList.get(this.vertices[i]);
                for(var j = 0; j < neighbors.length; j++){
                    s += neighbors[j] + ' ';
                }
                s += ',';
            }
            return s;
        };
    }
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
//添加点
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
//添加点之间的关系
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
//console.log(graph.toString());//A -> B C D ,B -> A E F ,C -> A D G ,D -> A C G H ,E -> B I ,F -> B ,G -> C D ,H -> D ,I -> E 
//广度搜索算法测试
function printNode(value){
    console.log('Visited vertex: ' + value);
}
graph.bfs(myVertices[0],printNode);
//上行输出结果
// Visited vertex: A
// Visited vertex: B
// Visited vertex: C
// Visited vertex: D
// Visited vertex: E
// Visited vertex: F
// Visited vertex: G
// Visited vertex: H
// Visited vertex: I





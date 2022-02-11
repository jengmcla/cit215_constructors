function box (color) {
    let that = this;

    this.ele = document.createElement("div");

    this.ele.style["background-color"] = color;
    // color is grabbed from the name of the objects in list

    this.ele.style["border-radius"] = "10px";
    this.ele.style["width"] = "200px";
    this.ele.style["height"] = "100px";
    this.ele.style["display"] = "flex";
    this.ele.style["align-items"] = "center";
    this.ele.style["justify-content"] = "center";
    this.ele.style["color"] = "white";
    this.ele.style["font-size"] = "18px";

    this.eleNum = document.createElement("div");
    this.number = 0;
    this.eleNum.innerHTML = this.number;

    this.ele.addEventListener("click", function () {
        that.numberUp(1);
    });

    document.body.appendChild(this.ele);
    this.ele.appendChild(this.eleNum);
}

box.prototype.numberUp = function (num) {
    this.number = this.number + num;
    this.eleNum.innerHTML = this.number; // overwrites original value
}

let list = ["red", "green", "blue"];
let elements = [];

// for each object in list, push a new box with parameter named after the object
for (obj in list) {
    elements.push(new box(list[obj]));
    // makes box(red), box(green), etc...
}
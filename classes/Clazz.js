var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle_ = /** @class */ (function () {
    function Vehicle_() {
        this.color = "blue";
    }
    Vehicle_.prototype.drive = function () {
        console.log("self driving");
    };
    Vehicle_.prototype.honk = function () {
        console.log("just buzz off!");
    };
    Vehicle_.prototype.sos = function () {
        console.log("sent sos");
    };
    return Vehicle_;
}());
/** extend the class */
var Car_ = /** @class */ (function (_super) {
    __extends(Car_, _super);
    function Car_() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car_.prototype.drive = function () {
        console.log("kzoom!");
    };
    Car_.prototype.sendsos = function () {
        this.sos();
    };
    Car_.prototype.chasisNumber = function () {
        return 1236560900910;
    };
    return Car_;
}(Vehicle_));
var car_ = new Car_();
console.log(car_.color);

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display() {
        console.log(this.empCode + " : " + this.empName);
    }
}

let emp = new Employee(1, "Steve");
emp.display(); // 1 : Steve

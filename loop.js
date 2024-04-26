#! /usr/bin/env node
import inquirer from "inquirer";
let tables = await inquirer.prompt({
    name: "table",
    message: "please select table",
    type: "list",
    choices: ["2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
});
// condition statements
if (tables.table === "2") {
    console.log("table 2");
    for (let i = 1; i < 11; ++i) {
        console.log(2, "x", i, "=", 2 * i);
    }
}
else if (tables.table === "3") {
    console.log("table 3");
    for (let m = 1; m <= 10; m++) {
        console.log(3, "x", m, "=", 3 * m);
    }
}
else if (tables.table === "4") {
    console.log("table 4");
    for (let i = 1; i < 11; ++i) {
        console.log(4, "x", i, "=", 4 * i);
    }
}
else if (tables.table === "5") {
    console.log("table 5");
    for (let m = 1; m <= 10; m++) {
        console.log(5, "x", m, "=", 5 * m);
    }
}
else if (tables.table === "6") {
    console.log("table 6");
    for (let i = 1; i < 11; ++i) {
        console.log(6, "x", i, "=", 6 * i);
    }
}
else if (tables.table === "7") {
    console.log("table 7");
    for (let m = 1; m <= 10; m++) {
        console.log(7, "x", m, "=", 7 * m);
    }
}
else if (tables.table === "8") {
    console.log("table 8");
    for (let i = 1; i < 11; ++i) {
        console.log(8, "x", i, "=", 8 * i);
    }
}
else if (tables.table === "9") {
    console.log("table 9");
    for (let m = 1; m <= 10; m++) {
        console.log(9, "x", m, "=", 9 * m);
    }
}
else if (tables.table === "10") {
    console.log("table 10");
    for (let i = 1; i < 11; ++i) {
        console.log(10, "x", i, "=", 10 * i);
    }
}
else if (tables.table === "11") {
    console.log("table 11");
    for (let m = 1; m <= 10; m++) {
        console.log(11, "x", m, "=", 11 * m);
    }
}
else if (tables.table === "12") {
    console.log("table 12");
    for (let m = 1; m <= 10; m++) {
        console.log(12, "x", m, "=", 12 * m);
    }
}
else if (tables.table === "13") {
    console.log("table 13");
    for (let m = 1; m <= 10; m++) {
        console.log(13, "x", m, "=", 13 * m);
    }
}
else if (tables.table === "14") {
    console.log("table 14");
    for (let m = 1; m <= 10; m++) {
        console.log(14, "x", m, "=", 14 * m);
    }
}
else if (tables.table === "15") {
    console.log("table 15");
    for (let m = 1; m <= 10; m++) {
        console.log(15, "x", m, "=", 15 * m);
    }
}
else if (tables.table === "16") {
    console.log("table 16");
    for (let m = 1; m <= 10; m++) {
        console.log(16, "x", m, "=", 16 * m);
    }
}
else if (tables.table === "17") {
    console.log("table 17");
    for (let m = 1; m <= 10; m++) {
        console.log(17, "x", m, "=", 17 * m);
    }
}
else if (tables.table === "18") {
    console.log("table 18");
    for (let m = 1; m <= 10; m++) {
        console.log(18, "x", m, "=", 18 * m);
    }
}
else if (tables.table === "19") {
    console.log("table 19");
    for (let m = 1; m <= 10; m++) {
        console.log(19, "x", m, "=", 19 * m);
    }
}
else if (tables.table === "20") {
    console.log("table 20");
    for (let m = 1; m <= 10; m++) {
        console.log(20, "x", m, "=", 20 * m);
    }
}

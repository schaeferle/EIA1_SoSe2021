window.addEventListener("load", function (): void {

    const newtodo: HTMLInputElement = <HTMLInputElement> document.getElementById("toDoInput");
    const todolist: HTMLUListElement = <HTMLUListElement> document.getElementById("toDoList");

    interface ToDo {
        checked: boolean;
        text: string;

    }
    let list: ToDo[] = [
        {
            checked: true,
            text: "EIA-Aufagbe 9 machen"
        },
        {
            checked: false,
            text: "Workout"
        },
    ];
    newtodo.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.keyCode == 13) {
            list.push({ text: newtodo.value, checked: false });
            showList();
        }
    });

    showList();

    function showList(): void {
        todolist.innerHTML = "";
        for (let i: number = 0; i < list.length; i++) {
            const element: ToDo = list[i];

            let liElement: HTMLLIElement = document.createElement("li");
            let checkIcon: HTMLElement;
            if (element.checked) {
                checkIcon = document.createElement("i");
                checkIcon.className = "far fa-check-square";
            } else {
                checkIcon = document.createElement("i");
                checkIcon.className = "far fa-square";
            }
            checkIcon.addEventListener("click", function (): void {
                element.checked = !element.checked;
                showList();
            });


            liElement.append(checkIcon);

            const textnode: Node = document.createTextNode(" " + element.text);
            liElement.append(textnode);

            const trashcan: HTMLElement = document.createElement("i");
            trashcan.className = "far fa-trash-alt";

            trashcan.addEventListener("click", function(): void {
                list = list.filter(function(elem: ToDo): boolean {
                    return elem != element;
                });
                showList();
            });

            liElement.append(trashcan);

            todolist.append(liElement);

        }
    }


})
import React from "react";
import { Title, List, Item, Btn, Box } from "./TaskList.styled";

export class TaskList extends React.Component {
  tasks = [
    { id: 1, text: "Виконати домашнє завдання" },
    { id: 2, text: "Повторити React" },
    { id: 3, text: "Піти на прогулянку" },
  ];

  deleteTask = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <Box>
        <Title>Список завдань</Title>
        <List>
          {this.tasks.map((task) => (
            <Item key={task.id}>
              {task.text}
              <Btn onClick={() => this.deleteTask(task.id)}>Видалити</Btn>
            </Item>
          ))}
        </List>
      </Box>
    );
  }
}

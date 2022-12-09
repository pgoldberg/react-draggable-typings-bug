import { exampleProps } from "dep";
import { DraggableData, DraggableEventHandler } from "react-draggable";

console.log(exampleProps);

export const draggableEventHandler: DraggableEventHandler = (
  _e: MouseEvent,
  _data: DraggableData
) => {
  return;
};

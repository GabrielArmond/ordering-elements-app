import { useEffect, useState } from "react";
import { TaskItem } from "../types/elements";
import { Modal } from "./Modal";
import { Modal as BootstrapModal } from 'bootstrap'

interface Props {
  title: string;
  items: TaskItem[];
  indexOffset?: number;
  elementId: string;
};

export function TaskList({ title, items, indexOffset = 0, elementId }: Props) {
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [localTasks, setLocalTasks] = useState<TaskItem[]>(items);

  useEffect(() => {
    if (selectedTask) {
      const timer = setTimeout(() => {
        const modalElement = document.getElementById(`exampleModal-${selectedTask.text}`);
        if (modalElement) {
          const modal = new BootstrapModal(modalElement);
          modal.show();
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    setLocalTasks(items);
  }, [selectedTask, items]);

  const handleOpenModal = (task: TaskItem) => {
    setSelectedTask(task);
  };

  const handleChange = (index: number, checked: boolean) => {
    const updated = [...localTasks];
    updated[index].value = checked.toString();
    setLocalTasks(updated);
  };

  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="text-primary fw-bold m-0">{title}</h6>
          </div>
          <ul className="list-group list-group-flush">
            {items.map((task, i) => (
              <li
                className="list-group-item pointer"
                key={i}
              >
                <div className="row g-0 align-items-center">
                  <div className="col me-2" onClick={() => handleOpenModal(task)}>
                    <h6 className="mb-0"><strong>{task.text}</strong></h6>
                    <span className="text-xs">{task.subText}</span>
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`formCheck-${indexOffset}-${i}`}
                        value={task.value}
                        checked={localTasks[i].value === "true"}
                        onChange={e => handleChange(i, e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`formCheck-${indexOffset}-${i}`}
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal item={selectedTask} elementId={elementId} />
    </>
  );
};


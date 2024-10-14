import _ from "lodash";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import MainContext from "~/contexts/Main";

const Todo = ({ content, isCompleted, onComplete, onDelete }) => {
  const { themeMode } = useContext(MainContext);
  const [hover, setHover] = useState(false);
  const [deleting, setDeleting] = useState(false);

  return (
    <div
      className={`todo-item ${
        _.isEqual(themeMode, "dark") ? "todo-item-dark" : "todo-item-light"
      }`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Radio checked={isCompleted} onClick={() => onComplete()}>
        <Typography.Text delete={isCompleted} type={isCompleted && "secondary"}>
          {content}
        </Typography.Text>
      </Radio>
      <div style={{ width: 20 }}>
        {hover && (
          <Button
            onClick={async () => {
              setDeleting(true);
              await onDelete();
              setDeleting(false);
            }}
            loading={deleting}
            type="secondary"
            style={{ height: 20 }}
            size="small"
            icon={
              <div style={{ color: "#e74c3c" }}>
                <DeleteOutlined />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

Todo.propTypes = {
  content: PropTypes.string,
  isCompleted: PropTypes.bool,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Todo;

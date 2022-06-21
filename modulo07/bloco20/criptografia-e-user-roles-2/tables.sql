
CREATE TABLE IF NOT EXISTS Auth_users_roles (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Auth_tasks_roles (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Auth_users_roles(id)
);

CREATE TABLE IF NOT EXISTS Auth_assignees_roles (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES Auth_tasks_roles(id),
    FOREIGN KEY (assignee_id) REFERENCES Auth_users_roles(id)
);

ALTER TABLE Auth_users_roles ADD COLUMN role VARCHAR(255) DEFAULT "NORMAL";  
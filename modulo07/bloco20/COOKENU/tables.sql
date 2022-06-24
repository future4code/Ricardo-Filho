
CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
     role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL"
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users (id)
);

CREATE TABLE IF NOT EXISTS Cookenu_friends (
    user_id VARCHAR(64),
    friend_id VARCHAR(64),
    FOREIGN KEY (user_id) REFERENCES Cookenu_users (id),
    FOREIGN KEY (friend_id) REFERENCES Cookenu_users (id)
);

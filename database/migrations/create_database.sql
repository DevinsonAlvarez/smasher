CREATE TABLE IF NOT EXISTS links (
    id INTEGER PRIMARY KEY,
    url TEXT NOT NULL,
    shorter_url VARCHAR(45) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT NULL
);
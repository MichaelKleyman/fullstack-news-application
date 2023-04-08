-- SQL command to create the articles table via the psql command line, dont copy and paste, only works when manually typed.
CREATE TABLE articles (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    slug VARCHAR(128) NOT NULL,
    content TEXT NOT NULL,
);

-- SQl command to populate the current fields in the articles table.
INSERT INTO articles (title, slug, content)
VALUES
    (...),
    (...),
    (...);
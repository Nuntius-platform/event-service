-- migrate:up

CREATE TABLE IF NOT EXISTS events (
    id          BIGINT      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    description TEXT        NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);


CREATE TABLE IF NOT EXISTS article_analysis (
    id         BIGINT      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article_id TEXT        NOT NULL UNIQUE,
    event_id   BIGINT      REFERENCES events(id) ON DELETE SET NULL,
    keywords   TEXT[]      NOT NULL,
    facts      TEXT[]      NOT NULL,
    topics     TEXT[]      NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_article_analysis_event_id
    ON article_analysis(event_id);

-- migrate:down

DROP TABLE IF EXISTS article_analysis;
DROP TABLE IF EXISTS events;

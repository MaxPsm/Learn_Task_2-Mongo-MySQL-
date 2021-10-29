ALTER TABLE users
ADD COLUMN sex ENUM("unknown", "M", "F") DEFAULT "unknown" AFTER pass;

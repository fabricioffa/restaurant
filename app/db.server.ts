import Database from 'better-sqlite3';
import { singleton } from "~/singleton.server";


// Hard-code a unique key, so we can look up the client when this module gets re-imported
const db = singleton("db", () => new Database('vilicus.db', { verbose: console.log }));
db.pragma('journal_mode = WAL');

export type DB = typeof db;
export { db };

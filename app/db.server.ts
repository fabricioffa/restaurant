import Database from 'better-sqlite3';
import { singleton } from "~/singleton.server";

const db = singleton("db", () => new Database('vilicus.db', { verbose: console.log }));
db.pragma('journal_mode = WAL');

export type DB = typeof db;
export { db };

import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const portfolio = sqliteTable('portfolio',{id:text('id').primaryKey(),data:text('data').notNull()});

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

export interface UserData {
    id: string;
    email: string;
    name: string;
    passwordHash: string;
    role: 'admin' | 'user' | 'Enterprise Admin' | 'Member';
    avatar?: string;
    createdAt: string;
}

function ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([]));
    }
}

export function getUsers(): UserData[] {
    ensureDataDir();
    const fileContent = fs.readFileSync(USERS_FILE, 'utf-8');
    try {
        return JSON.parse(fileContent);
    } catch (error) {
        return [];
    }
}

export function saveUser(user: UserData) {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export function findUserByEmail(email: string): UserData | undefined {
    const users = getUsers();
    return users.find((u) => u.email === email);
}

export function findUserById(id: string): UserData | undefined {
    const users = getUsers();
    return users.find((u) => u.id === id);
}

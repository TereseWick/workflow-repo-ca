import {describe, test, expect, beforeEach, vi } from 'vitest';
import { getUsername, saveUser, clearStorage } from "./storage";

beforeEach(() => {
    vi.stubGlobal("localStorage", {
        getItem: vi.fn((key) => mockStorage[key] || null),
        setItem: vi.fn((key, value) => {
            mockStorage[key] = value;
        }),
        removeItem: vi.fn((key) => {
            delete mockStorage[key];
        }),
        clear: vi.fn(() => {
            mockStorage = {};
        })
    });

    global.mockStorage = {};
});
            
       

describe("getUsername", () => {
    test("should return the username from localStorage", () => {
        saveUser({ name: "John Doe" });
        expect(getUsername()).toBe("John Doe");
    });

    test("should return null if username is not found in localStorage", () => {
        expect(getUsername()).toBe(null);
    });
});
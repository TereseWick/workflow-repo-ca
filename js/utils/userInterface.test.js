import { describe, expect, test } from 'vitest';
import { isActivePath } from "./userInterface";

describe('isActivePath', () => {
    test('should return true when href is / and current path is /', () => {
        expect(isActivePath('/', '/')).toBe(true);
    });
    test('should return true when current path starts with href', () => {
        expect(isActivePath('/home','/home/')).toBe(true);
    });

    test('should return false when current path does not match href', () => {
        expect(isActivePath('/home','/about')).toBe(false);
    });
});
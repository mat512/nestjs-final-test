export function isValidUserId(userId: number): boolean {
    return !isNaN(userId) && Number.isInteger(userId) && userId >= 0;
}

export function isValidPriority(priority: number): boolean {
    return !isNaN(priority) && Number.isInteger(priority) && priority > 0;
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

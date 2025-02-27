

export function isDateInThisWeek(dateString: string): boolean {
    // Remove ordinal suffix (st, nd, rd, th)
    // ps: the LOC below is kinda expensive (regex) because this filter function is being called in a loop,
    // best to format the date in a way that doesn't include the ordinal suffix,
    // e.g "12 Jan 2025" instead of "12th Jan 2025".    
    const cleanedDate = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");

    const date = new Date(cleanedDate);
    if (Number.isNaN(date.getTime())) return false;

    const today = new Date();

    // Get the start and end of the current week (assuming week starts on Sunday)
    const startOfWeek = new Date(today);

    // "today.getDate()" returns day of the month (0 - 30).
    // "today.getDay()" returns day of the week (0 - 6).
    startOfWeek.setDate(today.getDate() - today.getDay()); // Move to Sunday

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Move to Saturday "+ 6"

    // Compare dates
    return date >= startOfWeek && date <= endOfWeek;
}



export function isDateInThisMonth(dateString: string): boolean {
    // Remove ordinal suffix (st, nd, rd, th)
    // ps: the LOC below is kinda expensive (regex) because this filter function is being called in a loop,
    // best to format the date in a way that doesn't include the ordinal suffix,
    // e.g "12 Jan 2025" instead of "12th Jan 2025".
    const cleanedDate = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");

    const date = new Date(cleanedDate);
    const today = new Date();

    // Compare year and month
    return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth();
}


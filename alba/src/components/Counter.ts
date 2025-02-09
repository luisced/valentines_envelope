export function setupCounter(startDate: Date, elementId: string) {
    function dateDiff(start: Date, end: Date) {
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    function updateCounter() {
        const now = new Date();
        const diff = dateDiff(startDate, now);
        let parts: string[] = [];

        if (diff.years > 0) parts.push(`${diff.years} año(s)`);
        if (diff.months > 0) parts.push(`${diff.months} mes(es)`);
        if (diff.days > 0 || parts.length === 0) parts.push(`${diff.days} día(s)`);

        document.getElementById(elementId)!.textContent = `Llevamos juntos: ${parts.join(", ")}.`;
    }

    setInterval(updateCounter, 1000);
    updateCounter();
}

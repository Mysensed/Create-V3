export function validateURL(url: string): string {
    try {
        // Try to create a URL object from the provided string
        new URL(url);
        // If no exception is thrown, the URL is valid, so return it
        return url;
    } catch (error) {
        // If an exception is thrown, the URL is invalid, so return the fallback URL
        //console.error('Invalid URL:', error);
        return 'https://www.place-hold.it/400'; // Fallback URL
    }
}
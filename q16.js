/*Q16. Write a JavaScript function to parse an URL
*/

function parseURL(urlString) {
    try {
        // Create a new URL object with the provided URL string
        const url = new URL(urlString);

        // Extract various components of the URL
        const protocol = url.protocol;
        const host = url.host;
        const pathname = url.pathname;
        const searchParams = url.searchParams;
        const hash = url.hash;

        // Return an object containing the parsed URL components
        return {
            protocol,
            host,
            pathname,
            searchParams: Object.fromEntries(searchParams.entries()), // Convert URLSearchParams object to plain object
            hash
        };
    } catch (error) {
        // If the URL parsing fails (e.g., invalid URL), return null
        console.error("Error parsing URL:", error);
        return null;
    }
}

// Example usage:
const urlString = "https://www.coursera.org/in/articles/internet-of-things";
const parsedURL = parseURL(urlString);
console.log(parsedURL);

/*OUTPUT
---------
{
  protocol: 'https:',
  host: 'www.coursera.org',
  pathname: '/in/articles/internet-of-things',
  searchParams: {},
  hash: ''
}
--------- */
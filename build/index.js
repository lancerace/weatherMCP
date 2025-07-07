import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
export const NWS_API_BASE = "https://api.weather.gov";
export const USER_AGENT = "weather-app/1.0";
// Create server instance
export const server = new McpServer({
    name: "weather",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
async function main() {
    const transport = new StdioServerTransport();
    await import("./tools/index.js");
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
